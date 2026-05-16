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

## Growth & SEO Strategy

**Context:** Domain is live at humblelearningco.com (Vercel). Google already surfaces the Google Business Profile and website when searching "HUMBLE Learning Co." The immediate problem is no inbound leads — the site has no organic search presence yet because it's a new domain with no technical SEO and a React SPA that serves one `<title>` for all pages.

### Honest pipeline assessment

| Step | Verdict |
| --- | --- |
| 1. Website | Done. Good quality. Has SEO gaps. |
| 2. SEO | In progress. Most impactful quick wins are **off-site** (Google Business Profile, Nextdoor, Thumbtack) not in code. Website fixes matter but take 3–6 months to rank. |
| 3. Paid ads | Don't wait for SEO to mature — run both in parallel. Ads give immediate reach but cost money; SEO compounds over time. |

**The single highest-impact action that isn't a code change:** Ensure the Google Business Profile is 100% complete — services listed, hours, description, 10+ photos (including from `public/photos/`), and the Q&A section populated. GBP is how parents find local tutors, not the website's organic ranking.

---

### Technical SEO checklist (code-side, ordered by impact)

**Priority 1 — Per-page `<title>` and `<meta description>`**
- This is the most critical technical gap. The entire site currently shares one title from `index.html`.
- Solution: Add `react-helmet-async`. Each page component renders its own `<Helmet>` with a unique title + description targeting local keywords.
- Target title format: `[Service] in [Neighborhood], LA | HUMBLE Learning Co.`
- Example: Home → "Private Tutoring in Los Angeles | HUMBLE Learning Co."
- Example: Services → "Tutoring Services — Math, Reading, Science, Test Prep | HUMBLE Learning Co."
- Example: Contact → "Book a Free Intro Call | HUMBLE Learning Co."

**Priority 2 — LocalBusiness JSON-LD structured data**
- Add JSON-LD on the homepage (and ideally all pages) so Google can extract business info for rich results.
- Include: `@type: LocalBusiness`, name, url, telephone, email, address (LA), areaServed (LA neighborhoods), priceRange, aggregateRating (5 stars, 23 reviews).
- This is what populates the Knowledge Panel and "People also search" cards.

**Priority 3 — `sitemap.xml` and `robots.txt`**
- Add `/public/sitemap.xml` listing all 5 routes with `lastmod` and `priority`.
- Add `/public/robots.txt` allowing all crawlers and pointing to the sitemap.
- Submit sitemap to Google Search Console immediately after deployment.

**Priority 4 — Google Search Console + Analytics**
- Verify the domain in Google Search Console (add a `<meta name="google-site-verification">` tag or DNS TXT record).
- Add Google Analytics 4 (or simpler: Plausible/Fathom). Without tracking, there's no way to know what's working.
- Search Console will surface crawl errors, index coverage, and which queries are driving clicks.

**Priority 5 — Image optimization**
- Photos are PNG at ~1–2 MB each. This tanks Core Web Vitals (LCP in particular).
- Convert to WebP at ~1600px wide. A one-shot `sharp` script can batch all 7 photos.
- Add explicit `width` and `height` attributes to `<img>` tags in `PhotoStrip.tsx` to prevent layout shift (CLS).

**Priority 6 — Open Graph image**
- `index.html` has OG tags but no `og:image`. Without one, link shares on social/text/email show a blank preview.
- Create a 1200×630 branded image (navy bg + gold "H" + tagline) and add `<meta property="og:image">`.

---

### Off-site / non-code SEO checklist (owner action required)

These are not code tasks — they require Tiana to take action. They are listed here so Claude Code knows the full picture.

| Action | Why it matters |
| --- | --- |
| **Google Business Profile (GBP)** — fill in all fields, add 10+ photos, list every service, populate Q&A | Single highest-impact action. GBP powers the local map pack and "near me" queries. |
| **Ask recent clients for Google reviews** — get to 30+ reviews with recent dates | Review recency matters. A surge of new reviews signals active business. |
| **Nextdoor listing** | Neighborhood parents trust Nextdoor recommendations heavily. Free. High conversion. |
| **Thumbtack profile** | Parents actively searching for tutors use Thumbtack. Lead gen marketplace. |
| **Yelp listing** | Claim and populate. Secondary to GBP but builds NAP citation consistency. |
| **NAP consistency** — same Name, Address, Phone everywhere | Google cross-references citations. Inconsistencies hurt local ranking. |
| **Instagram (humblelearningco)** — post session photos, student wins, tip videos | Already have the handle. Social signals help. Reels/TikTok can go viral in a neighborhood. |

---

### Content SEO (medium-term, 1–3 months out)

- **Neighborhood landing pages** — Individual pages for high-value service areas: Encino, Tarzana, Sherman Oaks, Studio City, Bel Air, Beverly Hills, Valley Village. Each page targets "[neighborhood] tutor" queries. Template: same services + reviews, copy personalized to that neighborhood.
- **FAQ page** — Answers to "how much does a tutor cost in LA?", "what subjects does HUMBLE cover?", "does Tiana tutor students with ADHD?" — these are zero-click-opportunity queries.
- **Blog (optional, long-term)** — "How to help a kid who hates reading", "SAT vs ACT: which is right for your student?" — builds topical authority. Only pursue if Tiana has time to write or has budget for content.

---

### Target keywords to rank for (local intent)

Primary:
- "tutor in Los Angeles" / "LA tutor"
- "private tutor [neighborhood]" — Encino, Tarzana, Sherman Oaks, Studio City, Beverly Hills
- "math tutor Los Angeles"
- "SAT tutor Los Angeles"
- "ADHD tutor Los Angeles"

Secondary:
- "one on one tutoring LA"
- "homework help [neighborhood]"
- "reading tutor Los Angeles elementary"
- "college prep tutor LA"

---

### Execution order (what Claude Code works on first)

1. `react-helmet-async` — per-page titles/descriptions (code change, high impact)
2. LocalBusiness JSON-LD on homepage (code change, high impact)
3. `sitemap.xml` + `robots.txt` (static files in `/public/`, quick)
4. Image optimization script (one-shot `sharp` conversion, owner approval needed)
5. OG image (design + `index.html` update)
6. Google Search Console verification tag (once owner provides the code)

Off-site actions are Tiana's responsibility; Claude Code cannot do them.

---

## When making changes

- Match the surrounding code's idiom: server-style React components with TS interfaces above each component, `React.forwardRef` for primitives, `cn(...)` for class merging, `cva` for variants.
- Keep copy short, specific, and parent-friendly. Avoid marketing fluff like "world-class" / "transformative" / "elite". The reviews page does the bragging.
- Keep components text-balance / text-pretty where it improves headline wrapping (utilities defined in `index.css`).
- If you change `lib/site.ts` schema, update the `Site` type and the few places that read it (`Header`, `Footer`, `Hero`, `Contact`, `Reviews`).
- New pages go through `Layout` automatically — just register them in `App.tsx` under the `<Route element={<Layout />}>` parent.
- After non-trivial changes, run `npm run lint && npm test && npm run build` before declaring done.
