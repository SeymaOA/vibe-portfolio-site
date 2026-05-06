# Vibe portfolio site — project context

Use this file so AI assistants (and future you) stay aligned with the **Code Playbook “Vibe Coding Course”** portfolio build ([course playlist](https://www.youtube.com/playlist?list=PLkD4ksZgZ-noUIybdspTAuzbl0QKj5uhC)).

## Stack

- **Framework:** Astro 5 (static output).
- **Styles:** Tailwind CSS v4 (`@tailwindcss/vite`) + `src/styles/global.css` (tokens, typography).
- **Fonts:** Fontshare — Khand (display) + Switzer (body), linked in `src/layouts/BaseLayout.astro`.
- **SEO:** Meta + Open Graph / Twitter in `BaseLayout`; `@astrojs/sitemap` (needs real `site` in `astro.config.mjs`).

## Repo layout (instructor-style root folder)

- **Open `VIBE-PORTFOLIO-SITE` in Cursor** — same idea as the video’s `vibe-portfolio-site` folder (git + `gh` run here).
- The **Astro app** still lives in **`web/`** (source, `astro.config.mjs`, `src/`, etc.).
- From the **repo root**, run **`npm install`** once, then **`npm run dev`** / **`npm run build`** — scripts delegate to Astro in `web/` via `scripts/run-astro.mjs` (works even when PowerShell blocks `npm.ps1`).

### Cloudflare Pages

**Option A — build from repo root (matches “main folder” mental model)**

- **Root directory:** `/` (empty / repository root)  
- **Build command:** `npm install && npm run build`  
- **Output directory:** `web/dist`

**Option B — build only the app folder**

- **Root directory:** `web`  
- **Build command:** `npm install && npm run build`  
- **Output directory:** `dist`

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
| Local preview (`npm run dev` from **repo root**) | You run |
| Git + GitHub | Local repo + `main` branch done — **you** run `gh auth login` + create remote (below) |
| Cloudflare Pages + Git connect | Use dashboard; **Option A or B** above |
| Newsletter wired to API | Set env vars above |
| Image in `public/` + hero | Placeholder SVG + swap path |
| Deploy / live URL | After `site` + hosting |

## Connect GitHub (only you can do this — login required)

An automated assistant **cannot** log into your GitHub account or push without your credentials.

**GitHub CLI** (`gh`) should live at `C:\Program Files\GitHub CLI\gh.exe` if it was installed via Winget.

1. Open **PowerShell** or **Command Prompt** and log in (browser flow):

   ```bash
   gh auth login
   ```

   Choose GitHub.com → HTTPS → authenticate via browser.

2. From the repo root (`VIBE-PORTFOLIO-SITE`, where `.git` lives), create the remote repo and push:

   ```bash
   cd path\to\VIBE-PORTFOLIO-SITE
   gh repo create vibe-portfolio-site --public --source=. --remote=origin --push
   ```

   Use another repo name if `vibe-portfolio-site` is taken. Add `--private` instead of `--public` if you prefer.

3. If the repo already exists on GitHub instead:

   ```bash
   git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
   git push -u origin main
   ```

**Cloudflare Pages** must be connected in the Cloudflare dashboard (import Git repository). No one can do that for your account without your Cloudflare login.

## Scripts (run from `VIBE-PORTFOLIO-SITE`, not `web`)

```bash
npm install
npm run dev
npm run build
npm run preview
```

If PowerShell blocks `npm`, use Command Prompt or:  
`& "C:\Program Files\nodejs\npm.cmd" run dev`
