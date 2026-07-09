"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AVATAR_MAIN, TESTIMONIALS } from "@/lib/data";
import AutoVideo from "./AutoVideo";
import Reveal from "./Reveal";
import { ProfileRow, SectionHeader } from "./ui";

const CARD_W = 300; // px
const GAP = 24;

/**
 * Auto-advancing phone-reel carousel: the active card sits centered at full
 * opacity, neighbours are dimmed; stat pills sit under each card. Dot
 * pagination below, like the original slideshow.
 */
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const items = TESTIMONIALS.items;

  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % items.length),
      4500
    );
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <section className="overflow-hidden py-16 sm:py-24">
      <Reveal className="px-5">
        <SectionHeader
          eyebrow="Testimonials"
          title={TESTIMONIALS.title}
          sub={TESTIMONIALS.sub}
        />
        <div className="mt-7 flex justify-center">
          <a
            href="#contact"
            className="flex items-center gap-2.5 rounded-full bg-[#1c1c1c] py-2 pl-2 pr-5 text-sm font-medium text-white shadow-[0_10px_28px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-0.5 hover:bg-black"
          >
            <span className="relative h-7 w-7 overflow-hidden rounded-full">
              <Image src={AVATAR_MAIN} alt="" fill sizes="28px" className="object-cover" />
            </span>
            {TESTIMONIALS.cta}
          </a>
        </div>
      </Reveal>

      {/* Carousel track */}
      <div className="relative mt-14">
        <div
          className="flex items-start gap-6 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0.32,1)]"
          style={{
            transform: `translateX(calc(50vw - ${CARD_W / 2}px - ${
              active * (CARD_W + GAP)
            }px))`,
          }}
        >
          {items.map((t, i) => {
            const isActive = i === active;
            return (
              <div
                key={i}
                role="button"
                tabIndex={0}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActive(i);
                }}
                aria-label={`Show testimonial from ${t.handle}`}
                className={`w-[300px] shrink-0 cursor-pointer text-left transition-all duration-700 ${
                  isActive ? "opacity-100" : "opacity-40 saturate-50"
                }`}
              >
                <div
                  className={`relative transition-transform duration-700 ${
                    isActive ? "scale-100" : "scale-[0.94]"
                  }`}
                >
                  <AutoVideo
                    id={t.video}
                    className="aspect-[9/16] w-full rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.2)]"
                  />
                  <ProfileRow
                    handle={t.handle}
                    avatar={t.avatar}
                    className="absolute left-4 top-4"
                    size="sm"
                  />
                </div>

                {/* stat pills */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {t.stats.map((s) => (
                    <span
                      key={s.text}
                      className={`rounded-full px-3.5 py-2 text-[13px] font-semibold tracking-tight shadow-[0_6px_20px_rgba(0,0,0,0.1)] ${
                        s.dark
                          ? "bg-[#1c1c1c] text-white"
                          : "bg-white text-ink-strong"
                      }`}
                    >
                      {s.text}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-10 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-5 bg-ink-strong" : "w-2 bg-black/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
