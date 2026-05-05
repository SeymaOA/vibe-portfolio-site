# Vibe portfolio site — project context

Use this file so AI assistants (and future you) stay aligned with the **Code Playbook “Vibe Coding Course”** portfolio build ([course playlist](https://www.youtube.com/playlist?list=PLkD4ksZgZ-noUIybdspTAuzbl0QKj5uhC)).

## Stack

- **Framework:** Astro 5 (static output).
- **Styles:** Tailwind CSS v4 (`@tailwindcss/vite`) + `src/styles/global.css` (tokens, typography).
- **Fonts:** Fontshare — Khand (display) + Switzer (body), linked in `src/layouts/BaseLayout.astro`.
- **SEO:** Meta + Open Graph / Twitter in `BaseLayout`; `@astrojs/sitemap` (needs real `site` in `astro.config.mjs`).

## Repo layout

- Astro app lives in **`web/`** (not the repo root). On **Cloudflare Pages**, set **Root directory** to `web`, **Build command** `npm run build`, **Output** `dist`.

## What you must configure

1. **`astro.config.mjs` → `site`** — Set to your live URL (`https://….pages.dev` or custom domain). Required for correct canonical URLs, OG URLs, and sitemap.
2. **Newsletter API** — Copy `web/.env.example` → `web/.env` for local dev:
   - `PUBLIC_NEWSLETTER_ENDPOINT` — HTTPS endpoint that accepts `POST` JSON `{ "email": "..." , "listId": "..." }` (optional `listId`).
   - `PUBLIC_NEWSLETTER_LIST_ID` — If your worker/API expects a list/audience id.
   - On Cloudflare Pages, add the same variables under **Settings → Environment variables** (use `PUBLIC_` names so they are exposed to the client script).
3. **Hero image** — Replace `public/hero.svg` with your photo (e.g. `hero.jpg`) and update `heroImage` in `src/pages/index.astro`.

## Video checklist (Course 3 style)

| Step | Status |
|------|--------|
| Astro + pages (Home, About, Projects) | Done |
| Tailwind installed | Done |
| Local preview (`npm run dev`) | You run |
| Git + GitHub | Run `git init` / push from repo root (see parent folder) |
| Cloudflare Pages + Git connect | Use dashboard; root `web`, output `dist` |
| Newsletter wired to API | Set env vars above |
| Image in `public/` + hero | Placeholder SVG + swap path |
| Deploy / live URL | After `site` + hosting |

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```
