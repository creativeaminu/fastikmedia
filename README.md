# Fastik Media

A short-form content agency landing page built with **Next.js 15 (App
Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## What's implemented

- **Hero** — split layout, orange availability badge, social-icon cluster
  embedded in the headline, italic accent line, phone-frame autoplaying reel
  with floating stat pills, avatar + star-rating proof row
- **Purpose / Mission** — alternating rows with overlapping reels and pills
- **Projects** — 3×2 grid of autoplaying reels with verified profile rows
- **Testimonials** — auto-advancing centered carousel with dimmed neighbours,
  per-card stat pills, and dot pagination
- **Process** — dark band, 4 step cards with bespoke visuals (call UI,
  upload dropzone, iMessage-style chat, bar chart)
- **Pricing** — dark 3-card layout with elevated featured plan
- **Quote wall** — two counter-scrolling marquee rows
- **Blog** — dark 2×2 card grid with category pills
- **CTA + Footer** — dark closing section with 3 offset reels

Plus: fixed nav that switches to light-on-dark styling while scrolled over
dark sections, scroll-reveal animations (IntersectionObserver), and reels
that play only while visible.

## Structure

```
app/            # layout (fonts/meta), page, theme css
components/     # one file per section + ui.tsx, icons.tsx,
                # Reveal.tsx (scroll reveal), AutoVideo.tsx (in-view reels)
lib/data.ts     # all copy + media URLs (brand name lives here too)
```

## Notes

- Media (reels/photos) currently hotlinks the demo's CDN assets on
  `framerusercontent.com` as placeholders — replace the URLs in
  `lib/data.ts` with your own footage before going live.
- Brand name is the `BRAND` constant in `lib/data.ts`.
- Independent re-implementation for Fastik Media; not affiliated with Framer
  or the original template author.
