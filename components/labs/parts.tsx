import { ReactNode } from "react";

export function LabsEyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`mono-label inline-flex items-center gap-2 rounded-full border px-3.5 py-2 ${
        dark
          ? "border-white/20 bg-white/5 text-white/80"
          : "border-black/15 bg-black/[0.03] text-ink"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-white" : "bg-ink-strong"}`}
      />
      {children}
    </span>
  );
}

export function LabsHeader({
  eyebrow,
  title,
  sub,
  dark = false,
  center = true,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <LabsEyebrow dark={dark}>{eyebrow}</LabsEyebrow>
      <h2
        className={`mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl text-balance ${
          dark ? "text-white" : "text-ink-strong"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-5 text-[15px] leading-relaxed sm:text-base ${
            dark ? "text-dark-muted" : "text-muted"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
