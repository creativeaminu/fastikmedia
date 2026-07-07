import Link from "next/link";
import { BRAND, FOOTER } from "@/lib/data";
import { ShareMark } from "./icons";

export default function Footer() {
  return (
    <footer data-nav="dark" className="border-t border-dark-line bg-dark-bg pb-10 pt-20">
      <div className="mx-auto w-full max-w-[1080px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          {/* Brand */}
          <div>
            <Link href="#top" className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-white text-ink-strong">
                <ShareMark className="h-4.5 w-4.5" />
              </span>
              <span className="text-3xl font-semibold tracking-tight text-white">
                {BRAND}
              </span>
            </Link>
            <p className="mt-5 max-w-[15rem] text-[15px] leading-relaxed text-dark-muted">
              {FOOTER.tagline}
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-x-14 gap-y-3">
            {FOOTER.columns.map((col, i) => (
              <ul key={i} className="space-y-3.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[15px] font-medium text-white/85 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 text-sm text-dark-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
          <p>
            Design based on the Influence template by Ramish Aziz · Rebuilt
            with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
