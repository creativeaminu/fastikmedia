"use client";

import { useEffect, useRef, useState } from "react";
import { PlayIcon, SpeakerMutedIcon, SpeakerOnIcon } from "./icons";

/**
 * A looping reel sourced from Mux (HLS).
 *
 * Mobile-seamless: the HLS source is only attached when the reel nears the
 * viewport (lazy), and torn down when it leaves — so a page with many reels
 * never spins up dozens of decoders at once. iOS Safari uses native HLS;
 * everything else uses hls.js. Autoplay is muted + playsInline. If autoplay is
 * blocked, a tap-to-play button appears.
 *
 * When `allowSound` is set, a speaker button lets the viewer unmute — which
 * restarts the reel from the beginning with sound and mutes every other reel.
 */

const SOUND_EVENT = "fmedia-reel-sound";

export default function AutoVideo({
  id,
  className = "",
  posterTime = 0,
  allowSound = false,
}: {
  id: string;
  className?: string;
  posterTime?: number;
  allowSound?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<import("hls.js").default | null>(null);
  const attachedRef = useRef(false);
  const [muted, setMuted] = useState(true);
  const [needsTap, setNeedsTap] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const src = `https://stream.mux.com/${id}.m3u8`;
    let cancelled = false;
    let wantPlay = false;

    const attach = async () => {
      if (attachedRef.current) return;
      attachedRef.current = true;
      // iOS Safari (and any browser with native HLS) — cheapest path.
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        return;
      }
      const Hls = (await import("hls.js")).default;
      if (cancelled) return;
      if (Hls.isSupported()) {
        const hls = new Hls({
          maxBufferLength: 8,
          maxMaxBufferLength: 16,
          capLevelToPlayerSize: true,
          startLevel: 0,
        });
        hlsRef.current = hls;
        hls.loadSource(src);
        hls.attachMedia(video);
      } else {
        video.src = src;
      }
    };

    // Attempt play; retried automatically as data arrives (canplay/loadeddata),
    // which is what makes autoplay reliable on mobile — the first attempt often
    // fires before any media is buffered.
    const attemptPlay = () => {
      if (!wantPlay || cancelled) return;
      const p = video.play();
      if (p)
        p.then(
          () => setNeedsTap(false),
          () => {
            if (video.readyState >= 2) setNeedsTap(true);
          }
        );
    };

    video.addEventListener("canplay", attemptPlay);
    video.addEventListener("loadeddata", attemptPlay);

    const io = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          wantPlay = true;
          await attach();
          attemptPlay();
        } else {
          wantPlay = false;
          video.pause();
        }
      },
      { threshold: 0.2, rootMargin: "300px 0px" }
    );
    io.observe(video);

    return () => {
      cancelled = true;
      io.disconnect();
      video.removeEventListener("canplay", attemptPlay);
      video.removeEventListener("loadeddata", attemptPlay);
      hlsRef.current?.destroy();
      hlsRef.current = null;
    };
  }, [id]);

  // Only one reel plays sound at a time: mute self when another unmutes.
  useEffect(() => {
    const onOther = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail !== id) {
        const v = ref.current;
        if (v) v.muted = true;
        setMuted(true);
      }
    };
    window.addEventListener(SOUND_EVENT, onOther);
    return () => window.removeEventListener(SOUND_EVENT, onOther);
  }, [id]);

  const toggleSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    if (muted) {
      window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: id }));
      v.muted = false;
      v.currentTime = 0;
      setMuted(false);
      setNeedsTap(false);
      v.play().catch(() => {});
    } else {
      v.muted = true;
      setMuted(true);
    }
  };

  const tapToPlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    ref.current?.play().then(
      () => setNeedsTap(false),
      () => {}
    );
  };

  return (
    <div className={`reel-placeholder group/vid relative overflow-hidden ${className}`}>
      <video
        ref={ref}
        poster={`https://image.mux.com/${id}/thumbnail.jpg?time=${posterTime}`}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {needsTap && (
        <button
          onClick={tapToPlay}
          aria-label="Play video"
          className="absolute inset-0 z-20 grid place-items-center bg-black/20"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-ink-strong shadow-lg">
            <PlayIcon className="h-6 w-6 translate-x-0.5" />
          </span>
        </button>
      )}

      {allowSound && (
        <button
          onClick={toggleSound}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-black/45 text-white backdrop-blur-md transition-all hover:bg-black/65 active:scale-95"
        >
          {muted ? (
            <SpeakerMutedIcon className="h-4 w-4" />
          ) : (
            <SpeakerOnIcon className="h-4 w-4" />
          )}
        </button>
      )}
    </div>
  );
}
