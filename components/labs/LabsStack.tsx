import { LABS } from "@/lib/data";
import { ToolIcon } from "./stackIcons";

/**
 * Tool marquee using each tool's real logo in brand colour, bundled locally
 * (no CDN dependency, so nothing can fail to load at runtime).
 */
export default function LabsStack() {
  const loop = [...LABS.stack.items, ...LABS.stack.items];
  return (
    <section className="overflow-hidden bg-bg pb-16 pt-6 sm:pb-20 sm:pt-8">
      <p className="mono-label mb-8 text-center text-muted">
        {LABS.stack.title}
      </p>
      <div className="marquee-mask flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-3 pr-3">
          {loop.map((tool, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium text-ink shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            >
              <ToolIcon slug={tool.slug} />
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
