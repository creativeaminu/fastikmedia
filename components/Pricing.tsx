import Image from "next/image";
import Link from "next/link";
import { AVATAR_MAIN, PRICING } from "@/lib/data";
import Reveal from "./Reveal";
import { Container, SectionHeader } from "./ui";

export default function Pricing() {
  return (
    <section id="pricing" data-nav="dark" className="bg-dark-bg pb-24 pt-4 sm:pb-28">
      <Container className="!max-w-[1080px]">
        <Reveal>
          <SectionHeader
            eyebrow="Pricing"
            title={PRICING.title}
            sub={PRICING.sub}
            dark
          />
        </Reveal>

        <div className="mt-14 grid items-center gap-6 lg:grid-cols-3">
          {PRICING.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <article
                className={`flex flex-col rounded-[24px] p-7 sm:p-8 ${
                  plan.featured
                    ? "bg-[#1f1f1f] shadow-[0_0_0_1px_rgba(255,255,255,0.09),0_30px_80px_rgba(0,0,0,0.5)] lg:-my-4 lg:py-12"
                    : "bg-dark-card"
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {plan.name}
                  </h3>
                  <span className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-3 max-w-[16rem] text-[15px] leading-relaxed text-dark-muted">
                  {plan.blurb}
                </p>

                <ul className="mt-7 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-[15px] text-white/85">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-white/50" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={`mt-8 flex items-center justify-center gap-2.5 rounded-full py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                    plan.featured
                      ? "bg-white py-2 pl-2 pr-5 text-ink-strong hover:bg-neutral-100"
                      : "bg-[#2a2a2a] text-white hover:bg-[#333]"
                  }`}
                >
                  {plan.featured && (
                    <span className="relative h-7 w-7 overflow-hidden rounded-full">
                      <Image src={AVATAR_MAIN} alt="" fill sizes="28px" className="object-cover" />
                    </span>
                  )}
                  {plan.cta}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
