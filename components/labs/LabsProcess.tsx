import { LABS } from "@/lib/data";
import Reveal from "../Reveal";
import { Container } from "../ui";
import { LabsHeader } from "./parts";

export default function LabsProcess() {
  return (
    <section id="process" data-nav="dark" className="bg-dark-bg py-20 sm:py-28">
      <Container className="!max-w-[1080px]">
        <Reveal>
          <LabsHeader
            eyebrow={LABS.process.eyebrow}
            title={LABS.process.title}
            sub={LABS.process.sub}
            dark
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LABS.process.steps.map((s, i) => (
            <Reveal key={s.step} delay={(i % 4) * 90}>
              <article className="relative h-full rounded-[20px] bg-dark-card p-6">
                <span className="font-mono text-3xl font-semibold text-white/30">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-muted">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
