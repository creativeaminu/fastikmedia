import Image from "next/image";
import { PHOTOS, PROCESS } from "@/lib/data";
import Reveal from "./Reveal";
import { FolderUploadIcon, PhoneIcon } from "./icons";
import { Container, SectionHeader } from "./ui";

/* ---- per-step visuals inside the dark media panel ---- */

function CallVisual() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="relative h-16 w-16 overflow-hidden rounded-full ring-4 ring-white/10">
        <Image src={PHOTOS[3]} alt="" fill sizes="64px" className="object-cover" />
      </span>
      <p className="text-sm font-medium text-white">Kickoff with {`Fastik Media`}</p>
      <span className="mono-label text-dark-muted">00:12:34</span>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-[#33d478]">
        <PhoneIcon className="h-5 w-5 text-white" />
      </span>
    </div>
  );
}

function UploadVisual() {
  return (
    <div className="grid h-full place-items-center">
      <div className="grid h-28 w-36 place-items-center rounded-2xl border border-dashed border-white/25">
        <FolderUploadIcon className="h-7 w-7 text-white/80" />
      </div>
    </div>
  );
}

function ChatVisual({ chat }: { chat: { from: string; text: string }[] }) {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 px-6">
      {chat.map((m, i) => (
        <div
          key={i}
          className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}
        >
          <p
            className={`max-w-[75%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug ${
              m.from === "you"
                ? "bg-[#0a84ff] text-white"
                : "bg-[#2a2a2a] text-white/90"
            }`}
          >
            {m.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function ChartVisual() {
  const bars = [34, 46, 54, 48, 62, 58, 66, 78, 72, 88, 82, 96];
  return (
    <div className="flex h-full items-end justify-center gap-2.5 px-8 pb-8">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-4 rounded-full bg-white/12 sm:w-5"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export default function Process() {
  return (
    <section data-nav="dark" className="bg-dark-bg py-20 sm:py-28">
      <Container className="!max-w-[1080px]">
        <Reveal>
          <SectionHeader
            eyebrow="Process"
            title={PROCESS.title}
            sub={PROCESS.sub}
            dark
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROCESS.steps.map((s, i) => (
            <Reveal key={s.step} delay={(i % 2) * 120}>
              <article className="rounded-[24px] bg-dark-card p-5 sm:p-6">
                <span className="mono-label inline-flex rounded-full border border-pink/35 px-3 py-1.5 text-pink">
                  {s.step}
                </span>

                <div className="mt-5 h-56 overflow-hidden rounded-2xl bg-dark-media shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  {s.visual === "call" && <CallVisual />}
                  {s.visual === "upload" && <UploadVisual />}
                  {s.visual === "chat" && s.chat && <ChatVisual chat={s.chat} />}
                  {s.visual === "chart" && <ChartVisual />}
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-dark-muted">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
