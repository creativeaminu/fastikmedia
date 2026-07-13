"use client";

import { useState } from "react";
import { FILMS } from "@/lib/data";
import AutoVideo from "./AutoVideo";
import Reveal from "./Reveal";
import { Container, PillButton, SectionHeader } from "./ui";
import { PlayIcon } from "./icons";

export default function Production() {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const filters = ["All", ...FILMS.categories];
  const items =
    active === "All"
      ? FILMS.items
      : FILMS.items.filter((f) => f.category === active);
  const visibleItems = expanded ? items : items.slice(0, 6);
  const hasMore = !expanded && items.length > 6;

  const selectFilter = (f: string) => {
    setActive(f);
    setExpanded(false);
  };

  return (
    <section id="production" className="bg-bg-alt py-20 sm:py-28">
      <Container className="!max-w-[1180px]">
        <Reveal>
          <SectionHeader
            eyebrow={FILMS.eyebrow}
            title={FILMS.title}
            sub={FILMS.sub}
          />
        </Reveal>

        {/* category filter */}
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => selectFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  active === f
                    ? "border-transparent bg-ink-strong text-white"
                    : "border-[var(--line-strong)] bg-card text-ink hover:border-ink-strong"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((film, i) =>
            film.placeholder ? (
              <Reveal key={film.title} delay={(i % 3) * 90}>
                <article className="flex aspect-[16/10] w-full flex-col items-center justify-center rounded-[24px] border border-dashed border-[var(--line-strong)] bg-card text-center">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-bg-alt text-muted">
                    <PlayIcon className="h-5 w-5 translate-x-0.5" />
                  </span>
                  <p className="mt-4 text-sm font-semibold text-ink-strong">
                    {film.title}
                  </p>
                  <p className="mono-label mt-1.5 text-muted">Coming soon</p>
                </article>
              </Reveal>
            ) : (
              <Reveal key={film.title} delay={(i % 3) * 90}>
                <article className="group relative overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-1.5">
                  <AutoVideo
                    id={film.video!}
                    allowSound
                    className="aspect-[16/10] w-full"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <p className="text-sm font-semibold text-white">
                      {film.title}
                    </p>
                    <span className="mono-label shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-white backdrop-blur">
                      {film.category}
                    </span>
                  </div>
                </article>
              </Reveal>
            )
          )}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setExpanded(true)}
              className="rounded-full border border-[var(--line-strong)] bg-card px-6 py-3 text-sm font-medium text-ink-strong transition-all hover:-translate-y-0.5 hover:bg-bg-alt"
            >
              Load more
            </button>
          </div>
        )}

        <Reveal delay={120}>
          <div className="mt-12 flex justify-center">
            <PillButton href="#contact">{FILMS.cta}</PillButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
