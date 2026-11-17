# Clay on Campus

Landing page for **Clay on Campus** — UT Austin's first-ever GTM Ambassador Club, powered by [Clay](https://clay.com).

A single-page, fully responsive marketing site built with Next.js 14, TypeScript, and Tailwind CSS. Warm paper background, Bricolage Grotesque display type, and a live Clay-style enrichment table in the hero, using Clay's palette with a UT burnt-orange accent.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Bricolage Grotesque** + **IBM Plex Mono** via `next/font` (self-hosted, no layout shift)
- Scroll-reveal animations via a lightweight `IntersectionObserver` component (no animation library — keeps the bundle small for a 95+ Lighthouse score)

## Getting started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx      Root layout, metadata, fonts
  page.tsx        All page sections (single-page scroll)
  globals.css     Tailwind layers + scroll-reveal + reduced-motion
  icon.svg        Favicon (colored arch)
components/
  Nav.tsx         Sticky nav (wordmark, section links, Apply CTA)
  EnrichTable.tsx Hero visual: Clay-style table that enriches row by row (CSS only)
  Logo.tsx        Arch mark
  Arches.tsx      Stacked arches (SVG), used in the apply section
  Reveal.tsx      Scroll fade-in wrapper (IntersectionObserver)
tailwind.config.ts  Brand palette, shadows, animations
```

## Brand palette

| Token        | Hex       | Usage                              |
| ------------ | --------- | ---------------------------------- |
| `clay-paper` | `#F6F4EF` | Page background                    |
| `clay-bg`    | `#E8EEFB` | Light-blue section background      |
| `clay-sky`   | `#5FC3E7` | Sky blue                           |
| `clay-coral` | `#F26D6D` | Coral accent                       |
| `clay-coral-ink` | `#CC3D3D` | CTA buttons (AA contrast on white text) |
| `clay-yellow`| `#FFD84D` | Warm yellow                        |
| `clay-ut`    | `#BF5700` | UT burnt orange (used sparingly)   |
| `clay-ink`   | `#17150F` | Near-black text                    |

## Links & what still needs swapping

Links are defined as constants at the top of `app/page.tsx`.

Wired up:

- **Interest form**: every Apply button (nav, hero, final CTA) opens the live Google Form.
- **Instagram** — footer icon links to `https://www.instagram.com/texas.clay`.
- **Email** — `clayoncampusut@gmail.com`.

Still a placeholder:

- **LinkedIn** (`LINKEDIN_URL`) is empty, so the footer link stays hidden. Set it to show the link.

## Deployment (Vercel)

The site deploys to Vercel with zero configuration.

```bash
# from the project root, first time (links / creates the project)
vercel

# deploy to production
vercel --prod
```

When prompted, name the project **`clay-on-campus`**. Vercel auto-detects Next.js — no build settings needed.

You can also connect the Git repo in the Vercel dashboard for automatic deploys on every push.

## Accessibility & performance

- Semantic landmarks (`header`, `main`, `footer`, `nav`), a single `h1`, and ordered heading hierarchy.
- `aria-label` on the primary nav; decorative SVGs marked `aria-hidden`.
- Visible focus rings on every interactive element.
- `prefers-reduced-motion` disables scroll reveals and the table animation.
- Smooth scroll with `scroll-padding-top` so anchored sections clear the sticky nav.
