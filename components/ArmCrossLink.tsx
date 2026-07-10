import Image from "next/image";
import Link from "next/link";

/**
 * Cross-link band tying the two brand arms together. `to="labs"` promotes the
 * technology arm from the creative flagship; `to="media"` points back.
 */
export default function ArmCrossLink({ to }: { to: "labs" | "media" }) {
  const labs = to === "labs";
  const config = labs
    ? {
        href: "/labs",
        eyebrow: "Fastik Labs",
        title: "Need software, automation or AI agents?",
        sub: "Our technology arm builds the systems, apps and agents behind modern brands.",
        cta: "Explore Fastik Labs",
      }
    : {
        href: "/",
        eyebrow: "Fastik Media",
        title: "Looking for content or cinematic film production?",
        sub: "Our creative arm grows brands with short-form content and cinematic films.",
        cta: "Explore Fastik Media",
      };

  return (
    <section data-nav="dark" className="bg-dark-bg pb-6 pt-2">
      <div className="mx-auto w-full max-w-[1080px] px-5 sm:px-8">
        <Link
          href={config.href}
          className="group flex flex-col items-start gap-5 rounded-[24px] border border-dark-line bg-dark-card p-7 transition-all hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between sm:p-9"
        >
          <div className="flex items-start gap-4">
            <Image
              src="/fastik-icon.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 rounded-[12px]"
            />
            <div>
              <span
                className="mono-label text-dark-muted"
              >
                {config.eyebrow}
              </span>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {config.title}
              </h3>
              <p className="mt-1.5 max-w-md text-[15px] text-dark-muted">
                {config.sub}
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink-strong transition-colors group-hover:bg-neutral-100">
            {config.cta}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
