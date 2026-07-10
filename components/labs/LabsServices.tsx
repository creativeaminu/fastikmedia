import { LABS } from "@/lib/data";
import Reveal from "../Reveal";
import { Container } from "../ui";
import { LabsHeader } from "./parts";

const ICONS = [
  // automation: nodes/flow
  <svg key="a" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="12" cy="18" r="2.5" />
    <path d="M6 8.5v3a2 2 0 002 2h2M18 8.5v3a2 2 0 01-2 2h-2" strokeLinecap="round" />
  </svg>,
  // agent: bot
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <rect x="5" y="8" width="14" height="10" rx="3" />
    <path d="M12 8V4M9 13h.01M15 13h.01M3 12v2M21 12v2" strokeLinecap="round" />
  </svg>,
  // software: code brackets
  <svg key="c" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // web: browser
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M3 9h18M7 6.5h.01M9.5 6.5h.01" strokeLinecap="round" />
  </svg>,
];

export default function LabsServices() {
  return (
    <section id="capabilities" className="border-t border-line bg-bg pb-14 pt-20 sm:pb-16 sm:pt-24">
      <Container className="!max-w-[1180px]">
        <Reveal>
          <LabsHeader
            eyebrow={LABS.services.eyebrow}
            title={LABS.services.title}
            sub={LABS.services.sub}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LABS.services.items.map((s, i) => (
            <Reveal key={s.name} delay={(i % 4) * 80}>
              <article className="group h-full rounded-[20px] border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-bg text-ink-strong transition-colors group-hover:bg-ink-strong group-hover:text-white [&>svg]:h-[18px] [&>svg]:w-[18px]">
                  {ICONS[i]}
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-ink-strong">
                  {s.name}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                  {s.body}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-[13px] text-ink">
                      <span className="h-1 w-1 rounded-full bg-ink-strong/60" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
