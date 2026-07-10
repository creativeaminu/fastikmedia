import Image from "next/image";
import Link from "next/link";
import { BRAND, FOOTER, LABS } from "@/lib/data";

const LABS_COLUMNS = [
  {
    links: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Process", href: "#process" },
      { label: "Work", href: "#work" },
    ],
  },
  {
    links: [
      { label: "Automation", href: "#capabilities" },
      { label: "AI agents", href: "#capabilities" },
      { label: "Software", href: "#capabilities" },
    ],
  },
  {
    links: [
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#" },
      { label: "404", href: "#" },
    ],
  },
];

export default function Footer({ arm = "media" }: { arm?: "media" | "labs" }) {
  const isLabs = arm === "labs";
  const name = isLabs ? LABS.name : BRAND;
  const columns = isLabs ? LABS_COLUMNS : FOOTER.columns;
  const tagline = isLabs
    ? "The technology arm of Fastik Media. Automation, AI agents, software and web."
    : FOOTER.tagline;
  const home = isLabs ? "/labs" : "/";
  const crossHref = isLabs ? "/" : "/labs";
  const crossLabel = isLabs ? "Fastik Media" : "Fastik Labs";

  return (
    <footer
      data-nav="dark"
      className="border-t border-dark-line bg-dark-bg pb-10 pt-20"
    >
      <div className="mx-auto w-full max-w-[1080px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <Link href={home} className="flex items-center gap-3">
              <Image
                src="/fastik-icon.png"
                alt={name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-[10px]"
              />
              <span className="text-3xl font-semibold tracking-tight text-white">
                {name}
              </span>
            </Link>
            <p className="mt-5 max-w-[15rem] text-[15px] leading-relaxed text-dark-muted">
              {tagline}
            </p>
            <Link
              href={crossHref}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Also see {crossLabel}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-x-14 gap-y-3">
            {columns.map((col, i) => (
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
            {isLabs
              ? "Software, automation & AI, built to ship."
              : "A creative & technology studio."}
          </p>
        </div>
      </div>
    </footer>
  );
}
