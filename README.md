# HUMBLE Learning Co. — Website

Marketing site for **HUMBLE Learning Co.**, a one-on-one tutoring company in Los Angeles. Tiana, the founder, works with K-12 and college students across math, reading & writing, science, test prep, and study skills.

Production domain: **[humblelearningco.com](https://humblelearningco.com)**.

## Stack

- **Vite 5** + **React 18** + **TypeScript 5**
- **React Router** for multi-page navigation
- **Tailwind CSS v3** with HSL semantic design tokens, `tailwindcss-animate`, `class-variance-authority`
- **shadcn/ui-style** primitives (Radix UI under the hood) hand-rolled in `src/components/ui/`
- **TanStack Query** wired into the root provider
- **React Hook Form** + **Zod** for the contact form (with a Vitest-tested mailto builder)
- **Lucide-react** icons, **Sonner** toasts
- **Vitest** + **Testing Library** + **jsdom** for tests

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
npm run lint
npm test
```

## Project layout

```
src/
├── App.tsx              # routes
├── main.tsx             # bootstraps providers (Query, Router, Toaster)
├── index.css            # Tailwind + HSL design tokens
├── components/
│   ├── ui/              # shadcn-style primitives (button, card, input, …)
│   ├── Layout.tsx       # header + outlet + footer + scroll-reset
│   ├── Header.tsx       # responsive nav with mobile drawer
│   ├── Footer.tsx
│   ├── Hero.tsx         # home hero
│   ├── ReviewCard.tsx   # single review tile
│   ├── ServiceGrid.tsx  # services as cards (slim or detailed)
│   ├── ContactForm.tsx  # RHF + Zod, opens mailto:
│   └── …
├── pages/
│   ├── Home.tsx         # /
│   ├── About.tsx        # /about
│   ├── Services.tsx     # /services
│   ├── Reviews.tsx      # /reviews
│   ├── Contact.tsx      # /contact
│   └── NotFound.tsx
├── lib/
│   ├── site.ts          # contact info, branding (TODO placeholders here)
│   ├── reviews.ts       # 23 verbatim Google reviews
│   ├── services.ts      # service catalogue
│   ├── photos.ts        # gallery manifest (served from /public/photos)
│   └── utils.ts         # cn() helper
└── test/                # vitest + setup + integration smoke tests

public/
├── favicon.svg          # gold "H" on navy
└── photos/              # 7 client photos (tutoring-01 … tutoring-07)
```

## Brand & design tokens

The "Premium Academic" palette lives in `src/index.css` as HSL variables and is mirrored in `tailwind.config.ts` so utilities like `bg-primary` and `text-accent` work as expected.

| Token         | Hex       | HSL              | Used for                                |
| ------------- | --------- | ---------------- | --------------------------------------- |
| `background`  | `#F8F7F4` | `40 19% 96%`     | Page background (warm off-white, paper) |
| `foreground`  | `#222222` | `0 0% 13%`       | Body text                               |
| `primary`     | `#1E2A38` | `212 30% 17%`    | Deep navy — headings, buttons, footer   |
| `accent`      | `#C8A96B` | `38 47% 60%`     | Muted gold — emphasis, links, CTAs      |
| `secondary`   | `#EBE9E2` | `40 14% 91%`     | Section backgrounds                     |
| `card`        | `#FFFFFF` | `0 0% 100%`      | Card surfaces (clean white on warm bg)  |
| `muted-fg`    | `#595959` | `0 0% 35%`       | Secondary copy                          |

Typography pairs **Cormorant Garamond** (display serif, headings) with **Inter** (body sans).

## Things to fill in before launch

Search for `TODO(owner)` — currently in `src/lib/site.ts`:

1. Real email (`hello@humblelearningco.com` is a placeholder).
2. Real phone number.
3. Booking link if you set one up (Calendly / Cal.com).
4. Social URLs (Instagram, TikTok, Facebook, Google reviews link).

The contact form opens the visitor's mail client with a prefilled `mailto:` to whatever email is in `site.contact.email`. There is **no backend** — when you're ready for one, swap the `onSubmit` in `src/components/ContactForm.tsx` to POST to Formspree / Web3Forms / a Cloudflare Worker.

## Deployment

Static build (`npm run build` → `dist/`). Drop it on Vercel, Netlify, or Cloudflare Pages — point the DNS for `humblelearningco.com` at whichever one you choose. No env vars required for the current build.

If you self-host the static files, configure a **SPA fallback** so all routes (`/about`, `/contact`, etc.) resolve to `index.html`. Vercel/Netlify/Cloudflare Pages do this automatically; for plain nginx use `try_files $uri /index.html;`.
