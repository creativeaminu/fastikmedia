import { LABS } from "@/lib/data";
import Reveal from "../Reveal";

export default function LabsCTA() {
  return (
    <section id="contact" className="px-4 py-10">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[rgba(79,107,255,0.25)] bg-[#0d0d12] px-6 py-24 text-center sm:py-28">
          <div
            aria-hidden
            className="labs-glow pointer-events-none absolute inset-0"
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
                className="rounded-full bg-indigo px-7 py-4 text-sm font-medium text-white shadow-[0_14px_34px_rgba(79,107,255,0.4)] transition-all hover:-translate-y-0.5 hover:bg-[#3f5aff]"
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
