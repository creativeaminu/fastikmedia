import { LABS } from "@/lib/data";
import Reveal from "../Reveal";
import { Container } from "../ui";
import { LabsHeader } from "./parts";

export default function LabsWork() {
  return (
    <section id="work" data-nav="dark" className="border-t border-dark-line bg-dark-bg py-20 sm:py-28">
      <Container className="!max-w-[1080px]">
        <Reveal>
          <LabsHeader
            eyebrow={LABS.work.eyebrow}
            title={LABS.work.title}
            sub={LABS.work.sub}
            dark
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {LABS.work.items.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 100}>
              <article className="group flex items-center justify-between gap-4 rounded-[20px] bg-dark-card p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#222] sm:p-7">
                <div>
                  <span className="mono-label text-dark-muted">{w.sector}</span>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {w.title}
                  </h3>
                </div>
                <span className="shrink-0 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-sm font-medium text-white">
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
