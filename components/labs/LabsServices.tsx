import { LABS } from "@/lib/data";
import Reveal from "../Reveal";
import { Container } from "../ui";
import { LabsHeader } from "./parts";

const ICONS = [
  // automation — nodes/flow
  <svg key="a" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="12" cy="18" r="2.5" />
    <path d="M6 8.5v3a2 2 0 002 2h2M18 8.5v3a2 2 0 01-2 2h-2" strokeLinecap="round" />
  </svg>,
  // agent — spark/bot
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <rect x="5" y="8" width="14" height="10" rx="3" />
    <path d="M12 8V4M9 13h.01M15 13h.01M3 12v2M21 12v2" strokeLinecap="round" />
  </svg>,
  // software — code brackets
  <svg key="c" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // web — browser
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M3 9h18M7 6.5h.01M9.5 6.5h.01" strokeLinecap="round" />
  </svg>,
];

export default function LabsServices() {
  return (
    <section id="capabilities" className="labs-grid py-20 sm:py-28">
      <Container className="!max-w-[1180px]">
        <Reveal>
          <LabsHeader
            eyebrow={LABS.services.eyebrow}
            title={LABS.services.title}
            sub={LABS.services.sub}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {LABS.services.items.map((s, i) => (
            <Reveal key={s.name} delay={(i % 2) * 100}>
              <article className="group h-full rounded-[24px] border border-white/[0.08] bg-dark-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(79,107,255,0.4)] sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo/12 text-indigo-soft transition-colors group-hover:bg-indigo group-hover:text-white [&>svg]:h-6 [&>svg]:w-6">
                  {ICONS[i]}
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {s.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-dark-muted">
                  {s.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/75"
                    >
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
