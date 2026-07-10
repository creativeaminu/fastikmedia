import { LABS } from "@/lib/data";

/**
 * Tool marquee using each tool's real logo in brand colour, served from the
 * Simple Icons CDN. Rendered as white chips on the light band.
 */
export default function LabsStack() {
  const loop = [...LABS.stack.items, ...LABS.stack.items];
  return (
    <section className="overflow-hidden bg-bg py-16 sm:py-20">
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${tool.slug}`}
                alt=""
                width={18}
                height={18}
                loading="lazy"
                className="h-[18px] w-[18px]"
              />
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
