import { ReactNode } from "react";

export function LabsEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="labs-eyebrow mono-label">
      <span className="h-1.5 w-1.5 rounded-full bg-indigo-soft" />
      {children}
    </span>
  );
}

export function LabsHeader({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <LabsEyebrow>{eyebrow}</LabsEyebrow>
      <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl text-balance">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-[15px] leading-relaxed text-dark-muted sm:text-base">
          {sub}
        </p>
      )}
    </div>
  );
}
