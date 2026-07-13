import Image from "next/image";
import { HERO, PHOTOS } from "@/lib/data";
import AutoVideo from "./AutoVideo";
import Reveal from "./Reveal";
import {
  CommentIcon,
  EyeIcon,
  HeartIcon,
  PhoneIcon,
  SnapchatIcon,
  StarIcon,
  TikTokIcon,
  InstagramIcon,
  YouTubeIcon,
} from "./icons";
import { PillButton, ProfileRow } from "./ui";

/** overlapping circular social icons embedded in the headline */
function SocialCluster() {
  const chip =
    "grid h-[0.95em] w-[0.95em] place-items-center rounded-full ring-4 ring-bg";
  return (
    <span className="mx-1 inline-flex translate-y-[0.1em] items-center align-baseline">
      <span className={`${chip} bg-[#fffc00]`}>
        <SnapchatIcon className="h-[55%] w-[55%] [&_path]:fill-black" />
      </span>
      <span className={`${chip} -ml-[0.28em] bg-black`}>
        <TikTokIcon className="h-[55%] w-[55%]" />
      </span>
      <span
        className={`${chip} -ml-[0.28em] bg-[radial-gradient(circle_at_30%_110%,#ffd776_0%,#f5233d_45%,#b729a8_70%,#5342d6_100%)]`}
      >
        <InstagramIcon className="h-[55%] w-[55%]" />
      </span>
      <span className={`${chip} -ml-[0.28em] bg-[#ff0000]`}>
        <YouTubeIcon className="h-[60%] w-[60%]" />
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden pb-24 pt-32 sm:pt-40 lg:pb-28">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left column */}
        <Reveal>
          <span className="badge-orange mono-label">
            <span className="h-2 w-2 rounded-full bg-orange shadow-[0_0_0_3px_rgba(255,122,0,0.25)]" />
            {HERO.badge}
          </span>

          <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink-strong sm:text-5xl lg:text-[3.8rem]">
            Short-form content
            <br />
            <SocialCluster />
            that builds
            <br />
            <em className="font-medium italic tracking-tight">
              real influence.
            </em>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {HERO.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PillButton
              href="#contact"
              leading={
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/12">
                  <PhoneIcon className="h-3.5 w-3.5 text-white" />
                </span>
              }
              className="py-2.5 pl-2.5"
            >
              {HERO.ctaPrimary}
            </PillButton>
            <PillButton href="#work" variant="light">
              {HERO.ctaSecondary}
            </PillButton>
          </div>

          {/* Social proof row */}
          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="mono-label text-muted">{HERO.proofBrands}</p>
              <div className="mt-3 flex -space-x-2.5">
                {PHOTOS.slice(0, 4).map((p) => (
                  <span
                    key={p}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-bg"
                  >
                    <Image src={p} alt="" fill sizes="36px" className="object-cover" />
                  </span>
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-black/10" />
            <div>
              <p className="mono-label text-muted">{HERO.proofRating}</p>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right column — phone reel with floating stat pills */}
        <Reveal delay={150} className="relative mx-auto w-full max-w-[330px]">
          <div className="relative">
            <AutoVideo
              id={HERO.reel.video}
              allowSound
              className="aspect-[9/16] w-full rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
            />
            <ProfileRow
              handle={HERO.reel.handle}
              avatar={HERO.reel.avatar}
              className="absolute bottom-5 left-5"
            />

            {/* floating pills */}
            <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <CommentIcon className="h-4 w-4 text-ink" /> 100+
            </span>
            <span className="absolute right-[-38px] top-[28%] hidden items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.15)] sm:flex">
              <EyeIcon className="h-4 w-4 text-ink" /> 40k+
            </span>
            <span className="absolute left-[-8px] top-[55%] flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.15)] sm:left-[-30px]">
              <HeartIcon className="h-4 w-4" /> 30k
            </span>
            <span className="absolute bottom-[16%] right-[-8px] flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.15)] sm:right-[-24px]">
              <span className="flex -space-x-1.5">
                {PHOTOS.slice(4, 6).map((p) => (
                  <span
                    key={p}
                    className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-white"
                  >
                    <Image src={p} alt="" fill sizes="24px" className="object-cover" />
                  </span>
                ))}
              </span>
              2k+ followers
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
