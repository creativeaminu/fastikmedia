import Image from "next/image";
import { BRAND_LOGOS } from "@/lib/data";

/**
 * "Brands collaborated" logo marquee shown under the hero. The source logos
 * are large white PNGs (built for a dark site), so they're piped through
 * next/image (resized) and rendered as a tasteful monochrome strip on the
 * light background — dimmed by default, darker on hover.
 */
export default function BrandStrip() {
  const loop = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="border-y border-line bg-bg py-10 sm:py-12">
      <p className="mono-label mb-8 text-center text-muted">
        Brands we&apos;ve collaborated with
      </p>
      <div className="marquee-mask flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
          {loop.map((src, i) => (
            <div
              key={i}
              className="relative h-7 w-[110px] shrink-0 opacity-45 transition-opacity duration-300 [filter:brightness(0)] hover:opacity-80 sm:h-8 sm:w-[130px]"
            >
              <Image
                src={src}
                alt="Brand logo"
                fill
                sizes="130px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
