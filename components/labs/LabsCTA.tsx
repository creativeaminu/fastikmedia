import { LABS } from "@/lib/data";
import Reveal from "../Reveal";

export default function LabsCTA() {
  return (
    <section id="contact" data-nav="dark" className="bg-dark-bg px-4 py-10">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#1c1c1c] px-6 py-24 text-center sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl text-balance">
              {LABS.cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-dark-muted">
              {LABS.cta.sub}
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href="mailto:info@creativeaminu.com"
                className="rounded-full bg-white px-7 py-4 text-sm font-medium text-ink-strong shadow-[0_14px_34px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-0.5 hover:bg-neutral-100"
              >
                {LABS.cta.button}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
