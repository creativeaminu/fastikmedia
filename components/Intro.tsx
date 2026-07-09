import { INTRO } from "@/lib/data";
import AutoVideo from "./AutoVideo";
import Reveal from "./Reveal";
import { EyebrowPill, ProfileRow, StatPill, PillIcon } from "./ui";

/**
 * Purpose / Mission rows: reels on one side, eyebrow + headline on the
 * other, alternating direction like the original.
 */
export default function Intro() {
  const [purpose, mission] = INTRO;

  return (
    <section id="about" className="overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        {/* Purpose — media left, text right */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative mx-auto flex w-full max-w-[560px] items-center">
            {/* tall dark reel */}
            <div className="relative z-0 w-[55%]">
              <AutoVideo
                id={purpose.reels[0].video}
                className="aspect-[3/4] w-full rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
              />
              <ProfileRow
                handle={purpose.reels[0].handle}
                avatar={purpose.reels[0].avatar}
                className="absolute bottom-4 left-4"
                size="sm"
              />
              <StatPill
                icon={purpose.reels[0].pills[0].icon as PillIcon}
                text={purpose.reels[0].pills[0].text}
                className="absolute -left-3 bottom-[28%]"
              />
            </div>
            {/* overlapping square reel */}
            <div className="relative z-10 -ml-[10%] mt-16 w-[52%]">
              <AutoVideo
                id={purpose.reels[1].video}
                className="aspect-square w-full rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
              />
              <ProfileRow
                handle={purpose.reels[1].handle}
                avatar={purpose.reels[1].avatar}
                className="absolute bottom-4 left-4"
                size="sm"
              />
              <StatPill
                icon="link"
                text={purpose.reels[1].pills[0].text}
                className="absolute -right-4 top-[62%]"
              />
              <StatPill
                text={purpose.reels[0].pills[1].text}
                className="absolute -top-4 left-[-12%]"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <EyebrowPill>{purpose.label}</EyebrowPill>
            <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[1.08] tracking-tight text-ink-strong sm:text-5xl text-balance">
              {purpose.title}
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted sm:text-base">
              {purpose.body}
            </p>
          </Reveal>
        </div>

        {/* Mission — text left, wide reel right */}
        <div className="mt-28 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <EyebrowPill>{mission.label}</EyebrowPill>
            <h2 className="mt-5 max-w-sm text-4xl font-semibold leading-[1.08] tracking-tight text-ink-strong sm:text-5xl text-balance">
              {mission.title}
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted sm:text-base">
              {mission.body}
            </p>
          </Reveal>

          <Reveal delay={120} className="relative">
            <AutoVideo
              id={mission.reels[0].video}
              allowSound
              className="aspect-[16/10] w-full rounded-[28px] shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
            />
            <ProfileRow
              handle={mission.reels[0].handle}
              avatar={mission.reels[0].avatar}
              className="absolute bottom-5 left-5"
            />
            <StatPill
              icon="heart"
              text={mission.reels[0].pills[0].text}
              className="absolute -left-4 top-[30%]"
            />
            <StatPill
              icon="user"
              text={mission.reels[0].pills[1].text}
              className="absolute bottom-[22%] right-[-16px] sm:right-[-28px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
