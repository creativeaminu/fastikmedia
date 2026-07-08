# Fastik Media

The Fastik Media website — a short-form content studio landing page built with
**Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Sections

Navbar (glass) · Hero with a live reel and floating stat pills · Purpose /
Mission · Projects grid · Testimonials carousel · 4-step Process · Pricing ·
Client quote wall · Blog · CTA · Footer.

## Media

Reels are streamed from **Mux** over HLS. Each reel is referenced by its Mux
playback id in `lib/data.ts` (`MUX` array) and rendered by
`components/AutoVideo.tsx`, which attaches `hls.js` in browsers without native
HLS and plays only while on screen. The Mux thumbnail is used as the poster.

Reel identities (`fastikmedia` / `creativeaminu`) and their avatars live in
`lib/data.ts` as `ID_FASTIK` and `ID_AMINU`; profile images are in `public/`.

## Structure

```
app/            # layout (fonts/meta), page, theme css
components/     # one file per section + ui.tsx, icons.tsx,
                # Reveal.tsx (scroll reveal), AutoVideo.tsx (Mux/HLS reels)
lib/data.ts     # all copy, Mux ids, identities, and image URLs
public/         # brand profile images
```
