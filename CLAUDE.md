# CLAUDE.md

Guidance for Claude Code working in this repo. Read this first before making changes.

## What this is

The marketing website for **HUMBLE Learning Co.**, a one-on-one tutoring company in Los Angeles. Founder is **Tiana**. Production domain is **humblelearningco.com** (already owned, not yet deployed). The site is static — no backend.

The owner originally prototyped on Lovable; this codebase is the production rebuild on the stack the owner specified, designed to feel like a "premium academic / private-academy" brand rather than a generic tutoring service.

## Business context (don't re-derive)

- **Founder:** Tiana. Solo tutor. Real reviews call her by name. Most copy is written in first-person ("I started HUMBLE…") on `/about` and brand-voice ("we") elsewhere.
- **Location:** Los Angeles — in-person around LA plus online.
- **Students:** elementary through college, plus the occasional adult learner. Reviews mention ADHD-friendly approach.
- **Social proof:** 23 five-star Google reviews shipped verbatim in `src/lib/reviews.ts`. All `stars: 5`. Some have `truncated: true` (Google cut them off with "… More") — keep that flag if you re-import.
- **Source assets:** 7 landscape photos of Tiana with students, originally in `assets/` (kept), copied into `public/photos/tutoring-01.png` … `tutoring-07.png` for serving. Original `reviews.txt` is the raw scrape of the Google reviews — kept at repo root for reference.

## Brand voice — important

The owner asked to be marketed as well-rounded across many subjects **without sounding arrogant**. Specifically:

- **Never** use the phrase "super tutor" or similar self-aggrandizing language.
- Phrasing like "tutoring across every subject your student is taking", "one tutor, almost every subject", "well-rounded", "patient", "personalized" is on-brand.
- Lead with the student's situation, not the tutor's credentials. Reviews are the credentials.
- Acknowledge struggle ("students who freeze on the page", "felt discouraged before we started") — don't paper over it.
- "The first call is free" is a recurring CTA — keep it.

## Design tokens — Premium Academic palette

Defined as HSL CSS variables in `src/index.css` and mirrored in `tailwind.config.ts`. **Don't introduce raw hex anywhere in components** — always use semantic tokens (`bg-primary`, `text-accent`, `text-muted-foreground`, etc.).

| Token | Hex | HSL | Role |
| --- | --- | --- | --- |
| `background` | `#F8F7F4` | `40 19% 96%` | Warm off-white page background |
| `foreground` | `#222222` | `0 0% 13%` | Body text |
| `primary` | `#1E2A38` | `212 30% 17%` | Deep navy — headings, CTAs, footer |
| `accent` | `#C8A96B` | `38 47% 60%` | Muted gold — emphasis, hairlines, prose underlines |
| `secondary` | — | `40 14% 91%` | Tinted section backgrounds |
| `card` | `#FFFFFF` | `0 0% 100%` | Card surfaces (clean white on warm bg) |
| `muted` / `muted-foreground` | — | `40 12% 90%` / `0 0% 35%` | De-emphasized surfaces / secondary copy |

Typography: **Cormorant Garamond** (display serif, headings; loaded via Google Fonts in `index.html`) + **Inter** (body sans). Headings are `font-serif` automatically via base layer. Don't ship new font families without asking.

Visual signatures to preserve when adding sections:
- Gold hairline divider (`bg-accent/50` or accent borders) at section transitions where appropriate.
- `bg-paper` utility (defined in `index.css`) is the page-level paper grain — applied on `Layout`. Don't re-apply on inner sections.
- Cards: white surface, `border-border`, `shadow-sm`, generous padding (`p-6`+).
- Eyebrow labels are `text-xs uppercase tracking-[0.22em] text-accent font-medium`.

## Stack

- **Vite 5 + React 18 + TypeScript 5** (strict mode, `noUnusedLocals`).
- **React Router v6** — multi-page (`/`, `/about`, `/services`, `/reviews`, `/contact`, `*`).
- **Tailwind CSS v3** with `tailwindcss-animate` and `class-variance-authority`.
- **shadcn/ui-style primitives** hand-rolled in `src/components/ui/` (Button, Card, Input, Textarea, Label, Badge). Radix primitives only where used (`@radix-ui/react-label`, `@radix-ui/react-slot`).
- **TanStack Query** wired in `main.tsx` (no queries yet — provider is there for when a backend lands).
- **React Hook Form + Zod** drives the contact form. Schema: `contactSchema` in `src/components/ContactForm.tsx`.
- **Sonner** toasts (`<Toaster>` in `main.tsx`).
- **lucide-react** for icons (don't add a second icon library).
- **Vitest + Testing Library + jsdom** for tests.
- **ESLint flat config** (`eslint.config.js`) with `typescript-eslint` + react-hooks + react-refresh.
- **Path alias:** `@/*` → `src/*` (set in both `tsconfig.app.json` and `vite.config.ts`).

Package manager: **npm** (the owner mentioned Bun/npm; this machine has only npm). Don't generate a `bun.lockb`.

## Project layout

```
src/
├── App.tsx                  # Routes
├── main.tsx                 # Providers: QueryClient, BrowserRouter, Toaster
├── index.css                # Tailwind layers + HSL design tokens + paper grain
├── components/
│   ├── ui/                  # shadcn-style primitives
│   ├── Layout.tsx           # Header + <Outlet/> + Footer + scroll-to-top + skip link
│   ├── Header.tsx           # Sticky nav, mobile drawer
│   ├── Footer.tsx           # Navy footer with contact channels
│   ├── Hero.tsx             # Home hero (used only on Home)
│   ├── SectionHeading.tsx   # Eyebrow + h1/h2 + description; reused across pages
│   ├── ReviewCard.tsx       # Single Google review tile (initials avatar)
│   ├── ServiceGrid.tsx      # Renders services in slim or `detailed` mode
│   ├── PhotoStrip.tsx       # Gallery row from /public/photos
│   ├── StarRating.tsx       # Gold filled-star display
│   └── ContactForm.tsx      # RHF+Zod form → mailto:; exports buildMailtoHref
├── pages/
│   ├── Home.tsx             # /
│   ├── About.tsx            # /about
│   ├── Services.tsx         # /services
│   ├── Reviews.tsx          # /reviews — all 23 reviews
│   ├── Contact.tsx          # /contact
│   └── NotFound.tsx         # *
├── lib/
│   ├── site.ts              # **Single source of truth** for contact info, branding
│   ├── reviews.ts           # 23 verbatim reviews + featuredReviewIndexes
│   ├── services.ts          # 8-service catalogue with icons + topic lists
│   ├── photos.ts            # Photo manifest (paths + alt text)
│   └── utils.ts             # cn() = clsx + tailwind-merge
└── test/
    ├── setup.ts             # jsdom polyfills (scrollTo, matchMedia)
    ├── buildMailtoHref.test.ts
    ├── reviews.test.ts
    └── Home.test.tsx        # Route smoke tests

public/
├── favicon.svg              # Gold "H" on navy
└── photos/                  # tutoring-01.png … tutoring-07.png

assets/                      # ORIGINAL source photos (do not delete; kept as backup)
reviews.txt                  # Raw Google-reviews scrape (do not delete; kept for re-import)
```

## Conventions / gotchas

- **`src/lib/site.ts` is the single source of truth** for contact info, social links, founder name, location, rating count. Don't hardcode email/phone/etc. in components — read from `site.contact.*`. Currently contains `TODO(owner)` placeholders that the owner will replace before launch (email, phone, booking URL, social URLs). Keep them as `TODO(owner)` until the owner provides real values.
- **`reviews.ts` is verbatim from Google.** Don't paraphrase, fix typos beyond what's already corrected (a few obvious ones were tidied during import, e.g. "phenomal" → "phenomenal"; smart quotes preserved). When Google truncated a review with "… More", set `truncated: true` and let `ReviewCard` render the trailing ellipsis.
- **`tailwind.config.ts` extends `colors` to point at the CSS variables.** New tokens go in *both* `index.css` (`--whatever`) and `tailwind.config.ts` (`whatever: "hsl(var(--whatever))"`).
- **`vite.config.ts` has `/// <reference types="vitest" />`** at the top so the `test` field type-checks. Don't remove it; build will break.
- **`Layout` calls `window.scrollTo` on route change.** `src/test/setup.ts` stubs it for jsdom — keep that stub if you add tests.
- **The contact form has no backend.** `onSubmit` builds a `mailto:` and sets `window.location.href`. `buildMailtoHref` is exported and unit-tested in `src/test/buildMailtoHref.test.ts`. When a backend is eventually added, swap the `onSubmit` body and keep the schema.
- **All routes must return to `index.html` on the host.** Vercel/Netlify/Cloudflare Pages handle this automatically; nginx needs `try_files $uri /index.html;`. Noted in README.
- **shadcn fast-refresh lint warnings (4 of them) are expected** — `cva`/variants colocated with components is idiomatic shadcn. Don't split unless the file has grown large for other reasons.
- **Photos are PNG, ~1–2 MB each.** Acceptable for now. If page-load becomes a concern, convert to optimized JPEG/WebP at ~1600px wide via a build step or one-shot `sharp` script — but check with the owner first since the originals live in `assets/`.

## Commands

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build → dist/
npm run preview    # serve dist/
npm run lint       # ESLint flat config
npm test           # vitest run (14 tests)
npm run test:watch
```

CI hasn't been wired up. If you add it, run `lint`, `test`, and `build` in that order on PRs.

## What this conversation already decided (so you don't re-ask)

1. **Multi-page** site with React Router — not single-page-with-sections.
2. **Subjects positioned as comprehensive but not boastful.** All eight services in `lib/services.ts` are intentional: K-12 math, college math, reading & writing, science, test prep, homework help, study skills/organization (incl. ADHD), college coursework, enrichment. The owner explicitly said: market as well-rounded *without* literally writing "super tutor."
3. **Contact via mailto-prefilled form.** No Formspree/Web3Forms/backend yet. Form lives at `/contact`; form schema + mailto builder unit-tested.
4. **Contact info is placeholder.** The owner will replace `TODO(owner)` values in `src/lib/site.ts` before launch.
5. **Premium Academic palette** (warm off-white / deep navy / muted gold / charcoal) is locked. Don't propose alternatives.
6. **Cormorant Garamond + Inter** is the type pairing. Don't propose alternatives without being asked.

## When making changes

- Match the surrounding code's idiom: server-style React components with TS interfaces above each component, `React.forwardRef` for primitives, `cn(...)` for class merging, `cva` for variants.
- Keep copy short, specific, and parent-friendly. Avoid marketing fluff like "world-class" / "transformative" / "elite". The reviews page does the bragging.
- Keep components text-balance / text-pretty where it improves headline wrapping (utilities defined in `index.css`).
- If you change `lib/site.ts` schema, update the `Site` type and the few places that read it (`Header`, `Footer`, `Hero`, `Contact`, `Reviews`).
- New pages go through `Layout` automatically — just register them in `App.tsx` under the `<Route element={<Layout />}>` parent.
- After non-trivial changes, run `npm run lint && npm test && npm run build` before declaring done.
