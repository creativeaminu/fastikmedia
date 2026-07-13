import { CTA } from "@/lib/data";
import AutoVideo from "./AutoVideo";
import Reveal from "./Reveal";
import { PillButton, ProfileRow } from "./ui";

export default function CtaSection() {
  return (
    <section
      id="contact"
      data-nav="dark"
      className="overflow-hidden border-t border-dark-line bg-dark-bg pt-24 sm:pt-32"
    >
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center px-5 text-center">
        <span className="badge-orange mono-label">
          <span className="h-2 w-2 rounded-full bg-orange shadow-[0_0_0_3px_rgba(255,122,0,0.25)]" />
          {CTA.badge}
        </span>
        <h2 className="mt-7 text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl text-balance">
          {CTA.title}
        </h2>
        <PillButton href="#pricing" variant="light" className="mt-9">
          {CTA.button}
        </PillButton>
      </Reveal>

      {/* three reels, middle one offset lower */}
      <Reveal delay={150}>
        <div className="mx-auto mt-16 flex max-w-[820px] items-start justify-center gap-0 px-5">
          {CTA.reels.map((r, i) => (
            <div
              key={i}
              className={`relative w-1/3 min-w-0 sm:min-w-[220px] ${
                i === 1 ? "z-10 -mx-3 mt-5 sm:-mx-6 sm:mt-8" : "mt-0"
              }`}
            >
              <AutoVideo
                id={r.video}
                className={`aspect-[9/16] w-full rounded-[24px] ${
                  i === 1
                    ? "shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
                    : "opacity-90"
                }`}
              />
              <ProfileRow
                handle={r.handle}
                avatar={r.avatar}
                className="absolute bottom-5 left-5"
                size="sm"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
