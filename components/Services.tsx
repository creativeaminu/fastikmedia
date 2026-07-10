import Link from "next/link";
import { SERVICES } from "@/lib/data";
import Reveal from "./Reveal";
import { Container, SectionHeader } from "./ui";

function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container className="!max-w-[1180px]">
        <Reveal>
          <SectionHeader
            eyebrow={SERVICES.eyebrow}
            title={SERVICES.title}
            sub={SERVICES.sub}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {SERVICES.pillars.map((p, i) => {
            const labs = p.isLabs;
            return (
              <Reveal key={p.name} delay={i * 100}>
                <Link
                  href={p.href}
                  className={`group flex h-full flex-col rounded-[24px] border p-7 transition-all duration-300 hover:-translate-y-1.5 sm:p-8 ${
                    labs
                      ? "border-transparent bg-[#141414] text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                      : "border-line bg-card hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`mono-label ${labs ? "text-white/50" : "text-muted"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-full transition-colors ${
                        labs
                          ? "bg-white/10 text-white group-hover:bg-white group-hover:text-ink-strong"
                          : "bg-bg-alt text-ink-strong group-hover:bg-ink-strong group-hover:text-white"
                      }`}
                    >
                      <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  <h3
                    className={`mt-6 text-2xl font-semibold tracking-tight ${
                      labs ? "text-white" : "text-ink-strong"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={`mt-3 text-[15px] leading-relaxed ${
                      labs ? "text-white/65" : "text-muted"
                    }`}
                  >
                    {p.body}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className={`flex items-center gap-2.5 text-sm ${
                          labs ? "text-white/80" : "text-ink"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            labs ? "bg-white" : "bg-ink-strong"
                          }`}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <span
                    className={`mt-8 inline-flex items-center gap-1.5 text-sm font-medium ${
                      labs ? "text-white" : "text-ink-strong"
                    }`}
                  >
                    {p.cta}
                    <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
