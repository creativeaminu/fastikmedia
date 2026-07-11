import { LABS } from "@/lib/data";
import LottiePlayer from "../LottiePlayer";
import Reveal from "../Reveal";

const h = LABS.hero;

// A small terminal/automation motif in place of a reel.
function TerminalMotif() {
  const lines = [
    { p: "$", t: "fastik build --agent support", c: "text-white/90" },
    { p: ">", t: "connecting tools · slack, gmail, notion", c: "text-white/50" },
    { p: ">", t: "training on 1,240 docs", c: "text-white/50" },
    { p: "✓", t: "agent deployed, replying in 0.8s", c: "text-emerald-400" },
    { p: ">", t: "automating invoice workflow", c: "text-white/50" },
    { p: "✓", t: "12 hrs/week saved", c: "text-emerald-400" },
  ];
  return (
    <div className="overflow-hidden rounded-2xl bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="mono-label ml-2 text-white/40">fastik-labs · build</span>
      </div>
      <div className="space-y-2.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((l, i) => (
          <div key={i} className="flex gap-2.5">
            <span className={l.p === "✓" ? "text-emerald-400" : "text-white/60"}>
              {l.p}
            </span>
            <span className={l.c}>{l.t}</span>
          </div>
        ))}
        <div className="flex gap-2.5">
          <span className="text-white/60">$</span>
          <span className="inline-block h-4 w-2 animate-pulse bg-white/70" />
        </div>
      </div>
    </div>
  );
}

/* ---- inline headline chips: small visual motifs standing in for
   "software", "automation" and "AI" inside the H1 ---- */

function SoftwareChip() {
  return (
    <span
      className="hero-chip h-[0.85em] w-[1.7em] shrink-0 overflow-hidden rounded-[0.16em] shadow-[0_0.12em_0.35em_rgba(0,0,0,0.3)]"
      style={{ animationDelay: "0s" }}
    >
      <svg viewBox="0 0 64 40" className="h-full w-full">
        <rect width="64" height="40" rx="7" fill="#161616" />
        <circle cx="9" cy="9" r="2.1" fill="#ff5f57" />
        <circle cx="16" cy="9" r="2.1" fill="#febc2e" />
        <circle cx="23" cy="9" r="2.1" fill="#28c840" />
        <rect x="8" y="18" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.75)" />
        <rect x="8" y="25" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.4)" />
        <rect x="8" y="32" width="25" height="3" rx="1.5" fill="rgba(255,255,255,0.55)" />
      </svg>
    </span>
  );
}

function AutomationChip() {
  return (
    <span
      className="hero-chip h-[0.85em] w-[1.7em] shrink-0 overflow-hidden rounded-[0.16em] shadow-[0_0.12em_0.35em_rgba(0,0,0,0.3)]"
      style={{ animationDelay: "1.3s" }}
    >
      <svg viewBox="0 0 64 40" className="h-full w-full">
        <rect width="64" height="40" rx="7" fill="#161616" />
        <line x1="14" y1="20" x2="32" y2="12" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
        <line x1="14" y1="20" x2="32" y2="28" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
        <line x1="32" y1="12" x2="50" y2="20" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
        <line x1="32" y1="28" x2="50" y2="20" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
        <circle cx="14" cy="20" r="4" fill="#fff" />
        <circle cx="32" cy="12" r="3.2" fill="rgba(255,255,255,0.7)" />
        <circle cx="32" cy="28" r="3.2" fill="rgba(255,255,255,0.7)" />
        <circle cx="50" cy="20" r="4" fill="#ff7a00" />
      </svg>
    </span>
  );
}

function AiChip() {
  return (
    <span
      className="hero-chip h-[1.15em] w-[1.15em] shrink-0"
      style={{ animationDelay: "2.6s" }}
    >
      <LottiePlayer src="/lottie/ai-robot.json" className="h-full w-full" />
    </span>
  );
}

export default function LabsHero() {
  return (
    <section id="top" className="labs-grid-light relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <h1 className="flex flex-wrap items-center gap-x-[0.22em] gap-y-2 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink-strong sm:text-5xl lg:text-[3.7rem]">
            <span>We build the software,</span>
            <SoftwareChip />
            <span>automation</span>
            <AutomationChip />
            <span>and AI</span>
            <AiChip />
            <span>behind modern brands.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {h.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#1c1c1c] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_28px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-0.5 hover:bg-black"
            >
              {h.ctaPrimary}
            </a>
            <a
              href="#capabilities"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink-strong shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-0.5 hover:bg-neutral-100"
            >
              {h.ctaSecondary}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
            {h.stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-semibold tracking-tight text-ink-strong">
                  {s.value}
                </p>
                <p className="mono-label mt-1.5 text-muted">{s.label}</p>
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
