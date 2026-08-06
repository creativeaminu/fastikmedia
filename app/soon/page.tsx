import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fastik Media | Something loud is loading",
  description:
    "Your go-to creative and tech agency. Content and marketing that makes brands impossible to ignore, plus AI automations that kill the boring work.",
  openGraph: {
    title: "Fastik Media | Something loud is loading",
    description:
      "Content, marketing and AI automation for brands that refuse to blend in.",
    type: "website",
  },
};

/* ---------- small pieces ---------- */

function Streaks() {
  // staggered speed lines: the visual pun on "Fast"
  const lines = [
    { top: "14%", w: "38%", d: "0s", o: "opacity-60" },
    { top: "28%", w: "22%", d: "0.7s", o: "opacity-35" },
    { top: "63%", w: "30%", d: "1.4s", o: "opacity-45" },
    { top: "81%", w: "18%", d: "2.1s", o: "opacity-30" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {lines.map((l, i) => (
        <span
          key={i}
          className={`streak absolute h-px bg-gradient-to-r from-transparent via-orange to-transparent ${l.o}`}
          style={{ top: l.top, width: l.w, animationDelay: l.d }}
        />
      ))}
    </div>
  );
}

function Stat({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: string;
}) {
  return (
    <div className="rise" style={{ animationDelay: delay }}>
      <p className="text-2xl font-semibold tracking-tight text-ink-strong sm:text-3xl">
        {value}
      </p>
      <p className="mono-label mt-1.5 text-muted">{label}</p>
    </div>
  );
}

function Pillar({
  icon,
  title,
  body,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  delay: string;
}) {
  return (
    <article
      className="rise group rounded-2xl border border-line bg-card p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6"
      style={{ animationDelay: delay }}
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-strong text-white">
        {icon}
      </span>
      <h3 className="mt-4 text-base font-semibold tracking-tight text-ink-strong">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
    </article>
  );
}

/* ---------- icons ---------- */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconSpark = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  </svg>
);

const IconMegaphone = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke}>
    <path d="M4 10v4a1 1 0 001 1h2l5 4V5L7 9H5a1 1 0 00-1 1z" />
    <path d="M16.5 8.5a5 5 0 010 7" />
    <path d="M19.5 6a9 9 0 010 12" />
  </svg>
);

const IconBot = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke}>
    <rect x="4" y="9" width="16" height="10" rx="2.5" />
    <path d="M12 9V5" />
    <circle cx="12" cy="4" r="1.4" />
    <path d="M9 13.5v1.5M15 13.5v1.5" />
  </svg>
);

/* ---------- page ---------- */

export default function ComingSoon() {
  return (
    <main className="labs-grid-light relative min-h-screen overflow-hidden bg-bg">
      {/* drifting warm aura */}
      <div
        aria-hidden
        className="aura pointer-events-none absolute left-1/2 top-[-18%] -z-0 h-[560px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,122,0,0.20),rgba(247,185,0,0.10),transparent)] blur-2xl"
      />

      <div className="relative mx-auto w-full max-w-[1080px] px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
        {/* brand row */}
        <header
          className="rise flex items-center gap-3"
          style={{ animationDelay: "0ms" }}
        >
          <Image
            src="/fastik-icon.png"
            alt="Fastik"
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.22)]"
          />
          <span className="text-[17px] font-semibold tracking-tight text-ink-strong">
            Fastik Media
          </span>
        </header>

        {/* status badge */}
        <div className="mt-14 sm:mt-20">
          <span
            className="badge-orange mono-label rise"
            style={{ animationDelay: "90ms" }}
          >
            <span className="live-dot h-2 w-2 rounded-full bg-orange" />
            In the workshop right now
          </span>
        </div>

        {/* headline */}
        <div className="relative">
          <Streaks />
          <h1
            className="rise relative mt-6 text-[2.7rem] font-semibold leading-[1.02] tracking-tight text-ink-strong sm:text-6xl lg:text-[4.4rem] text-balance"
            style={{ animationDelay: "160ms" }}
          >
            Your go to creative
            <br />
            and tech agency.
          </h1>
        </div>

        <p
          className="rise mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "240ms" }}
        >
          We are building something loud. Content and marketing that makes
          brands impossible to scroll past, plus AI automations that quietly
          delete the boring work in the background.
        </p>

        {/* the FASTIK breakdown, the visual centrepiece */}
        <section
          className="rise mt-14 overflow-hidden rounded-[24px] border border-line bg-card"
          style={{ animationDelay: "320ms" }}
        >
          <div className="grid gap-px bg-line sm:grid-cols-[1fr_auto_1fr]">
            {/* FAST */}
            <div className="bg-card p-6 sm:p-8">
              <p className="mono-label text-orange">Part one</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-ink-strong sm:text-4xl">
                FAST
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Speed is the strategy. Briefs move, edits land, campaigns ship
                while the trend is still a trend.
              </p>
              {/* speed bars */}
              <div className="mt-5 space-y-1.5" aria-hidden>
                {["92%", "74%", "58%"].map((w, i) => (
                  <span key={w} className="block h-1 rounded-full bg-bg-alt">
                    <span
                      className="meter-fill block h-1 rounded-full bg-gradient-to-r from-orange to-amber"
                      style={{ width: w, animationDelay: `${0.6 + i * 0.15}s` }}
                    />
                  </span>
                ))}
              </div>
            </div>

            {/* the joint */}
            <div className="flex items-center justify-center bg-card px-6 py-3 sm:px-4 sm:py-8">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-bg text-xl font-semibold text-ink-strong">
                +
              </span>
            </div>

            {/* DYNAMIC */}
            <div className="bg-card p-6 sm:p-8">
              <p className="mono-label text-pink">Part two</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-ink-strong sm:text-4xl">
                DYNAMIC
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                High energy, premium finish. Nothing flat, nothing safe, nothing
                that looks like the template everyone else used.
              </p>
              {/* energy waveform */}
              <div className="mt-5 flex h-4 items-end gap-1" aria-hidden>
                {[5, 11, 7, 16, 9, 14, 6, 13, 8, 16, 10, 12, 6, 15, 8].map(
                  (h, i) => (
                    <span
                      key={i}
                      className="w-1 rounded-full bg-gradient-to-t from-pink/40 to-pink"
                      style={{ height: `${h}px` }}
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* the equals bar */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line bg-bg px-6 py-5 sm:px-8">
            <span className="mono-label text-muted">Which gives you</span>
            <span className="charge-text text-3xl font-semibold tracking-tight sm:text-4xl">
              FASTIK
            </span>
            <span className="text-sm text-muted">
              Fast execution. Zero drop in energy.
            </span>
          </div>
        </section>

        {/* what is coming */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Pillar
            icon={IconMegaphone}
            title="Marketing that lands"
            body="Positioning and campaigns built to win attention, not just fill a calendar."
            delay="400ms"
          />
          <Pillar
            icon={IconSpark}
            title="Content that hits"
            body="Short form, cinematic film and social systems that make brands impossible to ignore."
            delay="470ms"
          />
          <Pillar
            icon={IconBot}
            title="AI that works late"
            body="Automations and agents that take the repetitive, draining tasks off your team for good."
            delay="540ms"
          />
        </div>

        {/* proof strip */}
        <div
          className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-line pt-8"
          aria-label="Studio at a glance"
        >
          <Stat value="250+" label="Projects delivered" delay="600ms" />
          <Stat value="7+" label="Years in the game" delay="650ms" />
          <Stat value="80+" label="Happy clients" delay="700ms" />
          <Stat value="24/7" label="Automations running" delay="750ms" />
        </div>

        {/* CTA */}
        <section
          className="rise mt-14 overflow-hidden rounded-[24px] bg-[#1c1c1c] px-6 py-10 sm:px-10 sm:py-12"
          style={{ animationDelay: "820ms" }}
        >
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl text-balance">
                Get in early, before everyone
                <br className="hidden sm:block" /> else catches on.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-dark-muted">
                We are dropping the work, the process and the playbooks on
                Instagram first. Follow now and watch it get built in real time.
              </p>
            </div>

            <a
              href="https://instagram.com/fastikmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink-strong transition-all hover:-translate-y-0.5 hover:bg-neutral-100 sm:self-auto"
            >
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4" {...stroke}>
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </span>
              Follow @fastikmedia
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" {...stroke}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </section>

        {/* signature */}
        <footer
          className="rise mt-12 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ animationDelay: "900ms" }}
        >
          <div className="flex items-center gap-3">
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/creativeaminu.jpg"
                alt="Aminu Hassan Iradukunda"
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink-strong">
                Aminu Hassan Iradukunda
              </span>
              <span className="mono-label mt-1 block text-muted">
                Director, Fastik Media
              </span>
            </span>
          </div>

          <p className="mono-label text-muted">
            © {new Date().getFullYear()} Fastik Media
          </p>
        </footer>
      </div>
    </main>
  );
}
