"use client";

import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";

/**
 * Lightweight Lottie renderer: lazy-loads lottie-web on mount, plays only
 * while the animation is on screen, and freezes on reduced-motion.
 */
export default function LottiePlayer({
  src,
  className = "",
  loop = true,
  speed = 1,
}: {
  src: string;
  className?: string;
  loop?: boolean;
  speed?: number;
}) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let anim: AnimationItem | null = null;
    let cancelled = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!anim) return;
        if (entry.isIntersecting && !reduceMotion) anim.play();
        else anim.pause();
      },
      { threshold: 0.15 }
    );

    (async () => {
      const lottie = (await import("lottie-web")).default;
      if (cancelled || !hostRef.current) return;
      anim = lottie.loadAnimation({
        container: hostRef.current,
        renderer: "svg",
        loop,
        autoplay: !reduceMotion,
        path: src,
      });
      anim.setSpeed(speed);
      io.observe(hostRef.current);
    })();

    return () => {
      cancelled = true;
      io.disconnect();
      anim?.destroy();
    };
  }, [src, loop, speed]);

  return <div ref={hostRef} className={className} aria-hidden="true" />;
}
