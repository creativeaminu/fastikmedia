import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import {
  VerifiedBadge,
  HeartIcon,
  EyeIcon,
  CommentIcon,
  UserIcon,
  LinkIcon,
} from "./icons";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1040px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function EyebrowPill({ children }: { children: ReactNode }) {
  return <span className="mono-label eyebrow-pill">{children}</span>;
}

/** avatar + @handle + verified badge, overlaid on reels */
export function ProfileRow({
  handle,
  avatar,
  className = "",
  size = "md",
}: {
  handle: string;
  avatar: string;
  className?: string;
  size?: "sm" | "md";
}) {
  const img = size === "sm" ? "h-6 w-6" : "h-8 w-8";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`relative ${img} shrink-0 overflow-hidden rounded-full`}>
        <Image src={avatar} alt={handle} fill sizes="32px" className="object-cover" />
      </span>
      <span className="text-sm font-semibold tracking-tight text-white">
        {handle}
      </span>
      <VerifiedBadge className="h-4 w-4" />
    </div>
  );
}

const PILL_ICONS = {
  heart: HeartIcon,
  eye: EyeIcon,
  comment: CommentIcon,
  user: UserIcon,
  link: LinkIcon,
  chart: UserIcon,
} as const;

export type PillIcon = keyof typeof PILL_ICONS;

/** floating white stat pill, e.g. "30k ♥" hovering next to a reel */
export function StatPill({
  icon,
  text,
  className = "",
}: {
  icon?: PillIcon;
  text: string;
  className?: string;
}) {
  const Icon = icon ? PILL_ICONS[icon] : null;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-semibold tracking-tight text-ink-strong shadow-[0_6px_24px_rgba(0,0,0,0.14)] ${className}`}
    >
      {Icon && <Icon className="h-4 w-4 text-ink" />}
      {text}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
      <EyebrowPill>{eyebrow}</EyebrowPill>
      <h2
        className={`mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl text-balance ${
          dark ? "text-white" : "text-ink-strong"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-5 max-w-lg text-[15px] leading-relaxed sm:text-base ${
            dark ? "text-dark-muted" : "text-muted"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/** dark rounded pill button, optionally with a leading round icon/avatar chip */
export function PillButton({
  children,
  href = "#",
  variant = "dark",
  leading,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "dark" | "light";
  leading?: ReactNode;
  className?: string;
}) {
  const styles =
    variant === "dark"
      ? "bg-[#1c1c1c] text-white hover:bg-black shadow-[0_10px_28px_rgba(0,0,0,0.28)]"
      : "bg-white text-ink-strong hover:bg-neutral-100 shadow-[0_10px_28px_rgba(0,0,0,0.12)]";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {leading}
      {children}
    </Link>
  );
}
