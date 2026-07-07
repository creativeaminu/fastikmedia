import Image from "next/image";
import { QUOTES } from "@/lib/data";
import { QuoteIcon } from "./icons";
import { VerifiedBadge } from "./icons";

function QuoteCard({
  text,
  author,
  avatar,
}: {
  text: string;
  author: string;
  avatar: string;
}) {
  return (
    <figure className="flex w-[330px] shrink-0 flex-col justify-between rounded-[20px] bg-dark-card p-6">
      <div>
        <QuoteIcon className="h-5 w-5 text-white/25" />
        <blockquote className="mt-4 text-[15px] leading-relaxed text-white/90">
          {text}
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-2.5">
        <span className="relative h-8 w-8 overflow-hidden rounded-full">
          <Image src={avatar} alt={author} fill sizes="32px" className="object-cover" />
        </span>
        <span className="text-sm font-semibold text-white/80">{author}</span>
        <VerifiedBadge className="h-4 w-4" />
      </figcaption>
    </figure>
  );
}

/** two counter-scrolling marquee rows of client quotes on the dark band */
export default function QuoteWall() {
  const rowA = [...QUOTES.slice(0, 4), ...QUOTES.slice(0, 4)];
  const rowB = [...QUOTES.slice(4), ...QUOTES.slice(4)];

  return (
    <section data-nav="dark" className="overflow-hidden border-t border-dark-line bg-dark-bg py-16 sm:py-20">
      <div className="marquee-mask space-y-5">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-5 pr-5">
            {rowA.map((q, i) => (
              <QuoteCard key={i} {...q} />
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div className="animate-marquee-reverse flex gap-5 pr-5">
            {rowB.map((q, i) => (
              <QuoteCard key={i} {...q} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
