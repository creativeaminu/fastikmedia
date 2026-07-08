import { PROJECTS } from "@/lib/data";
import AutoVideo from "./AutoVideo";
import Reveal from "./Reveal";
import { Container, ProfileRow, SectionHeader } from "./ui";

export default function Projects() {
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
            <Reveal key={i} delay={(i % 3) * 100}>
              <article className="group relative overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1.5">
                <AutoVideo id={p.video} className="aspect-[3/4] w-full" />
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
      </Container>
    </section>
  );
}
