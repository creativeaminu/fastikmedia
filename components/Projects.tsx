"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import AutoVideo from "./AutoVideo";
import Reveal from "./Reveal";
import { Container, ProfileRow, SectionHeader } from "./ui";

export default function Projects() {
  // On mobile only the first 3 reels show until "Load more" is tapped.
  // Desktop always shows the full grid.
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="work" className="py-16 sm:py-24">
      <Container className="!max-w-[1180px]">
        <Reveal>
          <SectionHeader
            eyebrow="Projects"
            title={PROJECTS.title}
            sub={PROJECTS.sub}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.items.map((p, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 100}
              className={
                i >= 3 && !expanded ? "hidden sm:block" : undefined
              }
            >
              <article className="group relative overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1.5">
                <AutoVideo id={p.video} allowSound className="aspect-[3/4] w-full" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
                <ProfileRow
                  handle={p.handle}
                  avatar={p.avatar}
                  className="absolute bottom-4 left-4"
                />
              </article>
            </Reveal>
          ))}
        </div>

        {!expanded && (
          <div className="mt-8 flex justify-center sm:hidden">
            <button
              onClick={() => setExpanded(true)}
              className="rounded-full border border-[var(--line-strong)] bg-white px-6 py-3 text-sm font-medium text-ink-strong transition-all hover:-translate-y-0.5 hover:bg-bg-alt"
            >
              Load more
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
