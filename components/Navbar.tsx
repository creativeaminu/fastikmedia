"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AVATAR_MAIN, LABS, NAV_LINKS } from "@/lib/data";

/**
 * Shared nav across both brand arms. `arm="labs"` swaps the links, CTA and
 * accent for the technology surface. A compact "Media | Labs" switcher ties the
 * two together. On the creative flagship the nav flips to light-on-dark while
 * over a [data-nav="dark"] section; the Labs surface is dark throughout.
 */
export default function Navbar({ arm = "media" }: { arm?: "media" | "labs" }) {
  const isLabs = arm === "labs";
  const [overDark, setOverDark] = useState(isLabs);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isLabs) return; // Labs is dark end-to-end
    const darkSections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav="dark"]')
    );
    const check = () => {
      const y = 40;
      const hit = darkSections.some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= y && r.bottom >= y;
      });
      setOverDark(hit);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [isLabs]);

  const dark = overDark || isLabs;
  const links = isLabs ? LABS.nav : NAV_LINKS;
  const linkColor = dark
    ? "text-white/80 hover:text-white"
    : "text-ink hover:text-ink-strong";

  const homeHref = isLabs ? "/labs" : "/";

  const Switcher = ({ className = "" }: { className?: string }) => (
    <div
      className={`flex items-center rounded-full border p-0.5 text-[13px] font-medium ${
        dark ? "border-white/12 bg-white/5" : "border-black/8 bg-black/[0.03]"
      } ${className}`}
    >
      <Link
        href="/"
        className={`rounded-full px-3 py-1 transition-colors ${
          !isLabs
            ? "bg-ink-strong text-white"
            : dark
              ? "text-white/70 hover:text-white"
              : "text-ink hover:text-ink-strong"
        }`}
      >
        Media
      </Link>
      <Link
        href="/labs"
        className={`rounded-full px-3 py-1 transition-colors ${
          isLabs
            ? "bg-indigo text-white"
            : dark
              ? "text-white/70 hover:text-white"
              : "text-ink hover:text-ink-strong"
        }`}
      >
        Labs
      </Link>
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3.5">
      <nav
        className={`mx-auto flex h-[64px] w-full max-w-[1180px] items-center justify-between rounded-full border px-4 pl-4 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 sm:px-5 ${
          dark
            ? "border-white/10 bg-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "border-black/[0.06] bg-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
        }`}
      >
        {/* Logo + brand + switcher */}
        <div className="flex items-center gap-3">
          <Link href={homeHref} className="flex items-center gap-2.5">
            <Image
              src="/fastik-icon.png"
              alt="Fastik"
              width={34}
              height={34}
              priority
              className="h-[34px] w-[34px] rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
            />
            <span
              className={`hidden text-[15px] font-semibold tracking-tight transition-colors sm:inline ${
                dark ? "text-white" : "text-ink-strong"
              }`}
            >
              Fastik
            </span>
          </Link>
          <Switcher className="hidden sm:flex" />
        </div>

        {/* Center links */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${linkColor}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          {isLabs ? (
            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-indigo px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_24px_rgba(79,107,255,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#3f5aff]"
            >
              Start a project
            </Link>
          ) : (
            <Link
              href="#contact"
              className={`flex items-center gap-2.5 rounded-full py-2 pl-2 pr-5 text-sm font-medium shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 ${
                dark ? "bg-[#242424] text-white" : "bg-white text-ink-strong"
              }`}
            >
              <span className="relative h-7 w-7 overflow-hidden rounded-full">
                <Image src={AVATAR_MAIN} alt="" fill sizes="28px" className="object-cover" />
              </span>
              Book a call
            </Link>
          )}
        </div>

        {/* Mobile burger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-full md:hidden ${
            dark ? "bg-[#242424]" : "bg-white shadow-sm"
          }`}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 transition-transform ${dark ? "bg-white" : "bg-ink-strong"} ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 transition-opacity ${dark ? "bg-white" : "bg-ink-strong"} ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 transition-transform ${dark ? "bg-white" : "bg-ink-strong"} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl bg-white p-3 shadow-xl md:hidden">
          <Switcher className="mb-2 w-max" />
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-ink hover:bg-bg"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className={`mt-1 block rounded-xl px-4 py-3 text-center text-sm font-medium text-white ${
              isLabs ? "bg-indigo" : "bg-[#1c1c1c]"
            }`}
          >
            {isLabs ? "Start a project" : "Book a call"}
          </Link>
        </div>
      )}
    </header>
  );
}
