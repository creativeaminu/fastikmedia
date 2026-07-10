import { LABS } from "@/lib/data";

export default function LabsStack() {
  const loop = [...LABS.stack.items, ...LABS.stack.items];
  return (
    <section className="labs-grid overflow-hidden py-16 sm:py-20">
      <p className="mono-label mb-8 text-center text-dark-muted">
        {LABS.stack.title}
      </p>
      <div className="marquee-mask flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-3 pr-3">
          {loop.map((tool, i) => (
            <span
              key={i}
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/80"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
