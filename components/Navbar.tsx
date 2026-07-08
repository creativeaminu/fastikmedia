"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND, NAV_LINKS, AVATAR_MAIN } from "@/lib/data";

/**
 * Fixed full-width nav like the original: logo chip left, links center,
 * "Book a call" pill (with avatar) right. Switches to light-on-dark styling
 * while the viewport is over a dark section ([data-nav="dark"]).
 */
export default function Navbar() {
  const [overDark, setOverDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const darkSections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav="dark"]')
    );
    const check = () => {
      const y = 40; // nav center line
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
  }, []);

  const linkColor = overDark
    ? "text-white/80 hover:text-white"
    : "text-ink hover:text-ink-strong";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3.5">
      <nav
        className={`mx-auto flex h-[64px] w-full max-w-[1180px] items-center justify-between rounded-full border px-4 pl-5 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 sm:px-5 ${
          overDark
            ? "border-white/10 bg-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "border-black/[0.06] bg-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
        }`}
      >
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-2.5">
          <Image
            src="/fastik-icon.png"
            alt={BRAND}
            width={34}
            height={34}
            priority
            className="h-[34px] w-[34px] rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          />
          <span
            className={`text-[15px] font-semibold tracking-tight transition-colors ${
              overDark ? "text-white" : "text-ink-strong"
            }`}
          >
            {BRAND}
          </span>
        </Link>

        {/* Center links */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${linkColor}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Book a call */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className={`flex items-center gap-2.5 rounded-full py-2 pl-2 pr-5 text-sm font-medium shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 ${
              overDark
                ? "bg-[#242424] text-white"
                : "bg-white text-ink-strong"
            }`}
          >
            <span className="relative h-7 w-7 overflow-hidden rounded-full">
              <Image src={AVATAR_MAIN} alt="" fill sizes="28px" className="object-cover" />
            </span>
            Book a call
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-full md:hidden ${
            overDark ? "bg-[#242424]" : "bg-white shadow-sm"
          }`}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 transition-transform ${
                overDark ? "bg-white" : "bg-ink-strong"
              } ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 transition-opacity ${
                overDark ? "bg-white" : "bg-ink-strong"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 transition-transform ${
                overDark ? "bg-white" : "bg-ink-strong"
              } ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="mx-4 rounded-2xl bg-white p-3 shadow-xl md:hidden">
          {NAV_LINKS.map((l) => (
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
            className="mt-1 block rounded-xl bg-[#1c1c1c] px-4 py-3 text-center text-sm font-medium text-white"
          >
            Book a call
          </Link>
        </div>
      )}
    </header>
  );
}
