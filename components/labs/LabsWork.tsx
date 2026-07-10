import { LABS } from "@/lib/data";
import Reveal from "../Reveal";
import { Container } from "../ui";
import { LabsHeader } from "./parts";

export default function LabsWork() {
  return (
    <section id="work" className="labs-grid py-20 sm:py-28">
      <Container className="!max-w-[1080px]">
        <Reveal>
          <LabsHeader
            eyebrow={LABS.work.eyebrow}
            title={LABS.work.title}
            sub={LABS.work.sub}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {LABS.work.items.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 100}>
              <article className="group flex items-center justify-between gap-4 rounded-[20px] border border-white/[0.08] bg-dark-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(79,107,255,0.4)] sm:p-7">
                <div>
                  <span className="mono-label text-dark-muted">{w.sector}</span>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {w.title}
                  </h3>
                </div>
                <span className="shrink-0 rounded-full bg-indigo/12 px-3.5 py-2 text-sm font-medium text-indigo-soft">
                  {w.outcome}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
