"use client";

import { useEffect, useRef } from "react";

/**
 * A muted looping reel that plays while on screen and pauses off-screen,
 * like the videos on the original site. Renders the diagonal placeholder
 * texture behind the video while it loads.
 */
export default function AutoVideo({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`reel-placeholder relative overflow-hidden ${className}`}>
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
