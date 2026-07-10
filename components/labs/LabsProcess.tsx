"use client";

import { ReactNode, useEffect, useState } from "react";
import { LABS } from "@/lib/data";
import { Container } from "../ui";
import { LabsHeader } from "./parts";
import { ToolIcon } from "./stackIcons";

/**
 * "How we build." as an interactive workflow canvas: pick a step on the
 * left, and the node graph on the right plays that step's story:
 * trigger, agent node with tool drops, a decision, and both outcomes.
 */

/* ---------- tiny icon set for the canvas ---------- */

function Stroke({ d, className = "h-5 w-5" }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {d.split("|").map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

const ICONS: Record<string, (cls?: string) => ReactNode> = {
  phone: (c) => (
    <Stroke className={c} d="M5 4h3.5l1.5 4-2 1.5a12 12 0 006.5 6.5L16 14l4 1.5V19a2 2 0 01-2.2 2A16.8 16.8 0 013 6.2 2 2 0 015 4z" />
  ),
  file: (c) => (
    <Stroke className={c} d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z|M14 3v5h5|M9 13h6|M9 17h4" />
  ),
  merge: (c) => (
    <Stroke className={c} d="M7 7v10|M7 7a9 9 0 009 9h1|M7 7m-2 0a2 2 0 104 0 2 2 0 10-4 0|M7 19m-2 0a2 2 0 104 0 2 2 0 10-4 0|M19 16m-2 0a2 2 0 104 0 2 2 0 10-4 0" />
  ),
  gauge: (c) => (
    <Stroke className={c} d="M12 21a9 9 0 110-18 9 9 0 010 18z|M12 13l4-4|M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  ),
  bot: (c) => (
    <Stroke className={c} d="M6 9h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2z|M12 9V5|M12 5m-1.5 0a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0|M9 13.5v1.5|M15 13.5v1.5" />
  ),
  split: (c) => (
    <Stroke className={c} d="M4 12h6|M10 12c4 0 4-5 7-5h3|M10 12c4 0 4 5 7 5h3|M17.5 4.5L20 7l-2.5 2.5|M17.5 14.5L20 17l-2.5 2.5" />
  ),
  map: (c) => (
    <Stroke className={c} d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z|M9 4v14|M15 6v14" />
  ),
  scissors: (c) => (
    <Stroke className={c} d="M6 9a3 3 0 100-6 3 3 0 000 6z|M6 21a3 3 0 100-6 3 3 0 000 6z|M20 4L8.1 15.9|M14.5 14.5L20 20|M8.1 8.1L12 12" />
  ),
  refresh: (c) => (
    <Stroke className={c} d="M21 12a9 9 0 11-2.6-6.4|M21 3v5h-5" />
  ),
  rocket: (c) => (
    <Stroke className={c} d="M5 15c-1.5 1.2-2 5-2 5s3.8-.5 5-2|M15 4c2.5-1 6-1 6-1s0 3.5-1 6c-1.4 3.4-4.5 6.5-7.5 8L9 13.5C10.5 10.5 11.6 6.4 15 4z|M9 13.5L5.5 12l2-3.5H11|M10.5 15l1.5 3.5 3.5-2V13" />
  ),
  undo: (c) => (
    <Stroke className={c} d="M3 12a9 9 0 112.6 6.4|M3 21v-5h5" />
  ),
  trend: (c) => (
    <Stroke className={c} d="M3 17l6-6 4 4 8-8|M15 7h6v6" />
  ),
  wrench: (c) => (
    <Stroke className={c} d="M14.5 6.5a4.5 4.5 0 006 6L9 24l-3-3L17.5 9.5a4.5 4.5 0 01-3-3z|M14.5 6.5A4.5 4.5 0 0121 3l-3.5 3.5 3 3L24 6a4.5 4.5 0 01-3.5 3.5" />
  ),
};

function Bolt({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />
    </svg>
  );
}

/* ---------- per-step diagrams ---------- */

type Diagram = {
  trigger: { icon: string; label: string };
  agent: { title: string; sub: string };
  ports: { caption: string; slug: string; name: string }[];
  question: string;
  yes: { icon: string; label: string; sub: string };
  no: { icon: string; label: string; sub: string };
};

const DIAGRAMS: Diagram[] = [
  {
    trigger: { icon: "phone", label: "On kickoff call" },
    agent: { title: "Scope Agent", sub: "maps goals, tools & constraints" },
    ports: [
      { caption: "Model", slug: "anthropic", name: "Anthropic" },
      { caption: "Research", slug: "openai", name: "OpenAI" },
      { caption: "Workflow", slug: "n8n", name: "n8n" },
    ],
    question: "Worth building?",
    yes: { icon: "map", label: "Scoped roadmap", sub: "smallest valuable slice" },
    no: { icon: "scissors", label: "Cut from scope", sub: "no wasted budget" },
  },
  {
    trigger: { icon: "file", label: "Spec locked" },
    agent: { title: "Build Sprint", sub: "clickable previews, every week" },
    ports: [
      { caption: "Language", slug: "typescript", name: "TypeScript" },
      { caption: "Framework", slug: "react", name: "React" },
      { caption: "Backend", slug: "supabase", name: "Supabase" },
    ],
    question: "Preview approved?",
    yes: { icon: "merge", label: "Merged to main", sub: "ready for release" },
    no: { icon: "refresh", label: "Revised in a day", sub: "feedback applied" },
  },
  {
    trigger: { icon: "merge", label: "Merge to main" },
    agent: { title: "Deploy Pipeline", sub: "tests, build & release" },
    ports: [
      { caption: "Deploy", slug: "vercel", name: "Vercel" },
      { caption: "Database", slug: "postgresql", name: "PostgreSQL" },
      { caption: "Payments", slug: "stripe", name: "Stripe" },
    ],
    question: "All checks green?",
    yes: { icon: "rocket", label: "Live in production", sub: "analytics wired" },
    no: { icon: "undo", label: "Auto rollback", sub: "zero downtime" },
  },
  {
    trigger: { icon: "gauge", label: "Monthly review" },
    agent: { title: "Watch Agent", sub: "monitors usage & errors" },
    ports: [
      { caption: "Automation", slug: "n8n", name: "n8n" },
      { caption: "Model", slug: "openai", name: "OpenAI" },
      { caption: "Runtime", slug: "nodedotjs", name: "Node.js" },
    ],
    question: "Performing better?",
    yes: { icon: "trend", label: "Double down", sub: "scale what works" },
    no: { icon: "wrench", label: "Fix & improve", sub: "shipped next sprint" },
  },
];

/* ---------- canvas geometry (760 x 400) ---------- */

const PORT_X = [250, 320, 390];

function Pop({
  children,
  delay,
  className = "",
  style = {},
}: {
  children: ReactNode;
  delay: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`node-pop absolute ${className}`}
      style={{ ...style, animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Canvas({ d }: { d: Diagram }) {
  return (
    <div className="relative h-[400px] w-[760px] shrink-0">
      {/* connector layer */}
      <svg
        viewBox="0 0 760 400"
        className="node-pop absolute inset-0 h-full w-full"
        style={{ animationDelay: "260ms" }}
      >
        {/* main flow */}
        <path d="M144 190 H210" className="flow-line" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" fill="none" />
        <path d="M430 190 H462" className="flow-line" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" fill="none" />
        <path d="M538 172 C574 172 566 98 600 98" className="flow-line" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" fill="none" />
        <path d="M538 208 C574 208 566 282 600 282" className="flow-line" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" fill="none" />
        <path d="M692 98 H714" stroke="rgba(255,255,255,0.25)" strokeWidth="1.6" fill="none" />
        <path d="M692 282 H714" stroke="rgba(255,255,255,0.25)" strokeWidth="1.6" fill="none" />
        {/* dashed drops to tools */}
        {PORT_X.map((x) => (
          <path
            key={x}
            d={`M${x} 236 V289`}
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.4"
            strokeDasharray="3 5"
            fill="none"
          />
        ))}
        {/* junction dots */}
        {[
          [144, 190], [210, 190], [430, 190], [462, 190],
          [538, 172], [538, 208], [600, 98], [600, 282],
          [692, 98], [692, 282],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.2" fill="#2e2e34" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        ))}
      </svg>

      {/* trigger */}
      <Pop delay={40} className="left-[10px] top-[178px] text-orange">
        <Bolt className="h-5 w-5" />
      </Pop>
      <Pop delay={40} className="left-[36px] top-[148px]">
        <div className="grid h-[84px] w-[108px] place-items-center rounded-2xl border border-white/10 bg-[#1c1c1c] text-teal-300 shadow-[0_14px_34px_rgba(0,0,0,0.45)]">
          {ICONS[d.trigger.icon]("h-6 w-6")}
        </div>
      </Pop>
      <Pop delay={90} className="left-[16px] top-[244px] w-[148px] text-center">
        <p className="text-[12px] font-medium text-white/85">{d.trigger.label}</p>
      </Pop>

      {/* agent node */}
      <Pop delay={140} className="left-[210px] top-[150px]">
        <div className="flex h-[80px] w-[220px] items-center gap-3 rounded-2xl border border-white/10 bg-[#1c1c1c] px-4 shadow-[0_14px_34px_rgba(0,0,0,0.45)]">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/8 text-white">
            {ICONS.bot("h-5 w-5")}
          </span>
          <span>
            <span className="block text-[13px] font-semibold text-white">{d.agent.title}</span>
            <span className="mt-0.5 block text-[10.5px] leading-snug text-white/50">{d.agent.sub}</span>
          </span>
        </div>
      </Pop>
      {/* agent bottom ports */}
      {PORT_X.map((x, i) => (
        <Pop key={x} delay={180 + i * 30} className="" style={{ left: x - 4.5, top: 225.5 }}>
          <span className="block h-[9px] w-[9px] rotate-45 rounded-[2px] border border-white/25 bg-[#26262b]" />
        </Pop>
      ))}

      {/* tool circles */}
      {d.ports.map((p, i) => {
        const x = PORT_X[i];
        return (
          <div key={p.caption + p.slug}>
            <Pop delay={260 + i * 60} className="w-[90px] text-center" style={{ left: x - 45, top: 262 }}>
              <p className="mono-label !text-[9px] text-white/40">
                {p.caption}
                {i === 0 && <span className="text-orange">*</span>}
              </p>
            </Pop>
            <Pop delay={260 + i * 60} style={{ left: x - 4.5, top: 284.5 }}>
              <span className="block h-[9px] w-[9px] rotate-45 rounded-[2px] border border-white/25 bg-[#26262b]" />
            </Pop>
            <Pop delay={280 + i * 60} style={{ left: x - 27, top: 291 }}>
              <span className="grid h-[54px] w-[54px] place-items-center rounded-full border border-white/12 bg-[#18181c] shadow-[0_10px_26px_rgba(0,0,0,0.4)]">
                <ToolIcon slug={p.slug} onDark />
              </span>
            </Pop>
            <Pop delay={300 + i * 60} className="w-[100px] text-center" style={{ left: x - 50, top: 352 }}>
              <p className="text-[11px] font-medium text-white/75">{p.name}</p>
            </Pop>
          </div>
        );
      })}

      {/* branch */}
      <Pop delay={380} className="left-[462px] top-[152px]">
        <div className="grid h-[76px] w-[76px] place-items-center rounded-2xl border border-white/10 bg-[#1c1c1c] text-emerald-400 shadow-[0_14px_34px_rgba(0,0,0,0.45)]">
          {ICONS.split("h-6 w-6")}
        </div>
      </Pop>
      <Pop delay={420} className="left-[420px] top-[240px] w-[160px] text-center">
        <p className="text-[12px] font-medium text-white/85">{d.question}</p>
      </Pop>
      <Pop delay={430} className="left-[546px] top-[152px]">
        <p className="mono-label !text-[9px] text-white/45">true</p>
      </Pop>
      <Pop delay={430} className="left-[546px] top-[216px]">
        <p className="mono-label !text-[9px] text-white/45">false</p>
      </Pop>

      {/* outputs */}
      <Pop delay={500} className="left-[600px] top-[60px]">
        <div className="grid h-[76px] w-[92px] place-items-center rounded-2xl border border-white/10 bg-[#1c1c1c] text-emerald-300 shadow-[0_14px_34px_rgba(0,0,0,0.45)]">
          {ICONS[d.yes.icon]("h-6 w-6")}
        </div>
      </Pop>
      <Pop delay={540} className="left-[570px] top-[142px] w-[152px] text-center">
        <p className="text-[12px] font-medium text-white/85">{d.yes.label}</p>
        <p className="mt-0.5 text-[10.5px] text-white/45">{d.yes.sub}</p>
      </Pop>
      <Pop delay={540} className="left-[600px] top-[244px]">
        <div className="grid h-[76px] w-[92px] place-items-center rounded-2xl border border-white/10 bg-[#1c1c1c] text-white/70 shadow-[0_14px_34px_rgba(0,0,0,0.45)]">
          {ICONS[d.no.icon]("h-6 w-6")}
        </div>
      </Pop>
      <Pop delay={580} className="left-[570px] top-[326px] w-[152px] text-center">
        <p className="text-[12px] font-medium text-white/85">{d.no.label}</p>
        <p className="mt-0.5 text-[10.5px] text-white/45">{d.no.sub}</p>
      </Pop>

      {/* plus stubs */}
      <Pop delay={620} className="left-[714px] top-[86px]">
        <span className="grid h-6 w-6 place-items-center rounded-md border border-white/15 bg-white/[0.04] text-sm font-medium text-white/60">
          +
        </span>
      </Pop>
      <Pop delay={620} className="left-[714px] top-[270px]">
        <span className="grid h-6 w-6 place-items-center rounded-md border border-white/15 bg-white/[0.04] text-sm font-medium text-white/60">
          +
        </span>
      </Pop>
    </div>
  );
}

/* ---------- section ---------- */

export default function LabsProcess() {
  const [active, setActive] = useState(0);
  const steps = LABS.process.steps;

  // auto-advance, restarted whenever the step changes (incl. manual clicks)
  useEffect(() => {
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), 6500);
    return () => clearTimeout(t);
  }, [active, steps.length]);

  return (
    <section id="process" data-nav="dark" className="bg-dark-bg py-16 sm:py-28">
      <Container className="!max-w-[1180px]">
        <LabsHeader
          eyebrow={LABS.process.eyebrow}
          title={LABS.process.title}
          sub={LABS.process.sub}
          dark
        />

        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
          {/* ---- step selector ---- */}
          <div>
            {/* mobile: compact horizontal tabs + single active description */}
            <div className="lg:hidden">
              <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {steps.map((s, i) => (
                  <button
                    key={s.step}
                    onClick={() => setActive(i)}
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      i === active
                        ? "border-white/15 bg-white/[0.08] text-white"
                        : "border-white/8 text-white/45"
                    }`}
                  >
                    <span className="mono-label !text-[10px] text-white/40">
                      {s.step}
                    </span>
                    {s.title}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-dark-muted">
                {steps[active].body}
              </p>
              <span className="mt-4 block h-px bg-white/10">
                <span
                  key={active}
                  className="step-progress block h-px bg-white/40"
                />
              </span>
            </div>

            {/* desktop: vertical list */}
            <div className="hidden flex-col gap-1.5 lg:flex">
              {steps.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.step}
                    onClick={() => setActive(i)}
                    className={`relative w-full rounded-xl px-5 py-4 text-left transition-colors duration-300 ${
                      isActive ? "bg-white/[0.05]" : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className="mono-label text-white/40">{s.step}</span>
                    <span
                      className={`mt-1 block text-lg font-semibold tracking-tight transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/55"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span
                      className={`mt-1 block text-sm leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-dark-muted" : "text-white/30"
                      }`}
                    >
                      {s.body}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-5 right-5 block h-px bg-white/10">
                        <span className="step-progress block h-px bg-white/40" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ---- workflow canvas ---- */}
          <div className="canvas-dots overflow-x-auto rounded-[24px] border border-white/8 bg-[#0e0e12] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              className="flex min-w-[760px] justify-start py-4 lg:justify-center"
              key={active}
            >
              <Canvas d={DIAGRAMS[active]} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
