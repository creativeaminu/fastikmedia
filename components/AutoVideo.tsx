"use client";

import { useEffect, useRef } from "react";

/**
 * A muted looping reel sourced from Mux (HLS). Plays while on screen and
 * pauses off-screen. Accepts a Mux playback id and streams via hls.js in
 * browsers without native HLS (Chrome/Firefox); Safari uses the native path.
 * The Mux thumbnail is used as the poster so a frame shows before play.
 */
export default function AutoVideo({
  id,
  className = "",
  posterTime = 0,
}: {
  id: string;
  className?: string;
  posterTime?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const src = `https://stream.mux.com/${id}.m3u8`;
    let hls: import("hls.js").default | null = null;

    const setup = async () => {
      // Prefer hls.js wherever MSE is available (Chrome, Firefox, Edge); only
      // fall back to native HLS for Safari, which lacks MSE-based HLS but plays
      // .m3u8 natively.
      const Hls = (await import("hls.js")).default;
      if (Hls.isSupported()) {
        hls = new Hls({ maxBufferLength: 12, capLevelToPlayerSize: true });
        hls.loadSource(src);
        hls.attachMedia(video);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      }
    };
    setup();

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 }
    );
    io.observe(video);

    return () => {
      io.disconnect();
      hls?.destroy();
    };
  }, [id]);

  return (
    <div className={`reel-placeholder relative overflow-hidden ${className}`}>
      <video
        ref={ref}
        poster={`https://image.mux.com/${id}/thumbnail.jpg?time=${posterTime}`}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
