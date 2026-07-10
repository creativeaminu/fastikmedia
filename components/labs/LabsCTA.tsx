import { LABS } from "@/lib/data";
import Reveal from "../Reveal";

export default function LabsCTA() {
  return (
    <section id="contact" data-nav="dark" className="bg-dark-bg px-4 py-10">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-white px-6 py-24 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:py-28">
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-4xl font-semibold leading-[1.06] tracking-tight text-ink-strong sm:text-5xl text-balance">
              {LABS.cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-muted">
              {LABS.cta.sub}
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href="mailto:info@creativeaminu.com"
                className="rounded-full bg-ink-strong px-7 py-4 text-sm font-medium text-white shadow-[0_14px_34px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-0.5 hover:bg-black"
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
