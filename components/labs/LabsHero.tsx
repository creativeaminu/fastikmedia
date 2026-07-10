import { LABS } from "@/lib/data";
import Reveal from "../Reveal";
import { LabsEyebrow } from "./parts";

const h = LABS.hero;

// A small terminal/automation motif in place of a reel.
function TerminalMotif() {
  const lines = [
    { p: "$", t: "fastik build --agent support", c: "text-indigo-soft" },
    { p: ">", t: "connecting tools · slack, gmail, notion", c: "text-white/55" },
    { p: ">", t: "training on 1,240 docs", c: "text-white/55" },
    { p: "✓", t: "agent deployed — replying in 0.8s", c: "text-emerald-400" },
    { p: ">", t: "automating invoice workflow", c: "text-white/55" },
    { p: "✓", t: "12 hrs/week saved", c: "text-emerald-400" },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="mono-label ml-2 text-white/40">fastik-labs — build</span>
      </div>
      <div className="space-y-2.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((l, i) => (
          <div key={i} className="flex gap-2.5">
            <span className={l.c === "text-emerald-400" ? "text-emerald-400" : "text-indigo-soft"}>
              {l.p}
            </span>
            <span className={l.c}>{l.t}</span>
          </div>
        ))}
        <div className="flex gap-2.5">
          <span className="text-indigo-soft">$</span>
          <span className="inline-block h-4 w-2 animate-pulse bg-indigo-soft/80" />
        </div>
      </div>
    </div>
  );
}

export default function LabsHero() {
  return (
    <section id="top" className="relative overflow-hidden labs-grid pb-20 pt-32 sm:pt-40">
      <div aria-hidden className="labs-glow pointer-events-none absolute inset-x-0 top-0 -z-0 h-[560px]" />
      <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <LabsEyebrow>{h.badge}</LabsEyebrow>
          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.7rem] text-balance">
            {h.title}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-dark-muted sm:text-lg">
            {h.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-indigo px-6 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(79,107,255,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#3f5aff]"
            >
              {h.ctaPrimary}
            </a>
            <a
              href="#capabilities"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              {h.ctaSecondary}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
            {h.stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-semibold tracking-tight text-white">
                  {s.value}
                </p>
                <p className="mono-label mt-1.5 text-dark-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <TerminalMotif />
        </Reveal>
      </div>
    </section>
  );
}
