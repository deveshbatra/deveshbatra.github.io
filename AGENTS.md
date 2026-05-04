# AGENTS.md — Devesh Batra GitHub Pages site

This is the repository-level instruction file for Codex. Follow the procedure below and use `devesh-batra-portfolio-codex-spec.md` as the product/design source of truth.

## 1. Mission

Build a static personal GitHub Pages website for Devesh Batra.

The site should be:

- a research/profile site for AI, ML, LLMs, finance, governance, and decision systems
- a publications hub
- a blog/notes space
- a project showcase, including casual tools such as badminton match/list generators
- minimal, editorial, and slightly funky
- terminal/editor themed without sacrificing readability
- deployable from `deveshbatra/deveshbatra.github.io` to `https://deveshbatra.github.io`

Read this file first, then read:

```text
devesh-batra-portfolio-codex-spec.md
```

## 2. Non-negotiables

Do not:

- invent biographical facts, employers, papers, talks, awards, or contact details
- scrape or reuse images from LinkedIn, Google Images, GitHub, or other public sites
- add a personal email address unless Devesh provides it directly
- create a backend, database, auth system, API route, middleware, or serverless function
- add analytics, tracking cookies, newsletter vendors, or third-party scripts unless explicitly requested
- make terminal commands the only way to navigate the site
- set a GitHub Pages project `base` path for the user-site repo
- delete existing meaningful repo content without a clear reason

Do:

- keep navigation visible, clickable, keyboard-accessible, and mobile-friendly
- keep copy concise and editable
- keep content data-driven where practical
- preserve accessibility and responsive layout
- respect `prefers-reduced-motion`
- run build/check commands before finishing

## 3. Target repository and URL

Target user-site repo:

```text
deveshbatra/deveshbatra.github.io
```

Target URL:

```text
https://deveshbatra.github.io
```

Use `main` as the default branch.

If the username changes, update every occurrence of:

- repository name
- site URL
- canonical URLs
- Open Graph URLs
- sitemap URLs
- JSON-LD URLs
- GitHub profile links

Do not try to create a new GitHub.com account. If GitHub CLI is authenticated and the repository does not exist, repository creation/configuration is acceptable. Otherwise, leave manual publishing commands in the README.

## 4. Input assets

Use these first-party assets when present:

```text
assets/devesh-profile-picture.png
assets/devesh-terminal-portrait.png
```

Copy them into:

```text
public/images/devesh-profile-picture.png
public/images/devesh-terminal-portrait.png
```

Use `devesh-terminal-portrait.png` as the primary homepage/hero image, framed like a terminal window.

Use `devesh-profile-picture.png` only as an optional secondary image on `/about`, `/colophon`, or media-kit-style content.

Required alt text:

```text
Portrait of Devesh Batra
Terminal-style portrait of Devesh Batra
```

## 5. Preferred stack

Use Astro unless the existing repository already clearly uses another static stack.

Preferred stack:

- Astro
- TypeScript
- MDX
- Tailwind CSS or clean CSS modules/plain CSS
- Astro content collections if useful
- RSS feed
- sitemap
- GitHub Actions deployment to GitHub Pages

Next.js is acceptable only as a static export with no server-only behavior.

## 6. Procedure

### Step 1 — Inspect the repo

Run:

```bash
pwd
ls -la
find . -maxdepth 2 -type f | sed 's#^./##' | sort | head -200
```

Classify the repo as:

1. empty/new,
2. existing website,
3. handoff folder that should be copied into a new repo.

Preserve meaningful existing files unless replacing a fresh scaffold.

### Step 2 — Scaffold or adapt

For an empty repo, create an Astro project in the current directory.

Suggested commands:

```bash
npm create astro@latest . -- --template minimal --typescript strict --no-install
npm install
npm install @astrojs/mdx @astrojs/sitemap @astrojs/rss
```

Add or confirm scripts in `package.json`:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "check": "astro check"
  }
}
```

If `astro check` requires a package, add the required Astro check dependency.

### Step 3 — Configure GitHub Pages

For `deveshbatra.github.io`, configure Astro without a project base path:

```ts
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://deveshbatra.github.io",
  integrations: [mdx(), sitemap()],
});
```

Create:

```text
public/.nojekyll
```

If this becomes a project repository rather than a user-site repository, add the correct `base` value and update all URLs.

### Step 4 — Copy image assets

Run:

```bash
mkdir -p public/images
cp assets/devesh-profile-picture.png public/images/devesh-profile-picture.png
cp assets/devesh-terminal-portrait.png public/images/devesh-terminal-portrait.png
```

Create a component such as:

```text
src/components/ProfileTerminalPortrait.astro
```

Component requirements:

- square or near-square image treatment
- thin terminal-window frame
- rounded corners
- low-opacity border
- dark background
- subtle green phosphor / ANSI / CRT styling
- optional scanline/glow effect only if subtle
- no essential text inside the image
- accessible alt text
- reduced-motion-safe behavior

### Step 5 — Create editable data

Create editable data files, for example:

```text
src/data/profile.ts
src/data/papers.ts
src/data/projects.ts
src/data/talks.ts
src/data/navigation.ts
```

Use the public-profile links, paper seed data, and draft copy from the brief. Keep all facts easy to edit.

Profile links to include:

```text
LinkedIn: https://uk.linkedin.com/in/batradevesh
GitHub: https://github.com/deveshbatra
Google Scholar: https://scholar.google.com/citations?hl=en&user=0sQlRv0AAAAJ
ResearchGate: https://www.researchgate.net/profile/Devesh-Batra
SSRN author search
arXiv author search
```

Do not add unpublished details or unverifiable claims.

### Step 6 — Implement visual system

Use `designby.cc` as tone inspiration, not as a template to copy.

Default palette:

```css
:root {
  --bg: #080808;
  --fg: #f2f2ea;
  --muted: #8e8e83;
  --line: #2b2b2b;
  --accent: #c8ff00;
  --accent-2: #7aa2ff;
}
```

Design cues:

- slash/path identity such as `/deveshbatra/`
- compact clickable navigation
- large readable typography
- editorial whitespace
- terminal status panels such as `$ whoami` and `$ focus --now`
- live London clock in the header or status bar
- subtle hover states that feel like terminal selection
- terminal-window frame around the terminal portrait

Keep terminal commands decorative. Important content must be visible, clickable, and usable without typing commands.

### Step 7 — Build required routes

Create these routes:

```text
/                  Home
/about             Bio, research interests, background
/papers            Research and publications
/blog              Blog index
/blog/[slug]       Individual MDX blog posts
/projects          Selected projects, demos, experiments
/speaking          Talks, workshops, posters, appearances
/now               Current focus, reading, building, side quests
/contact           Links and contact options
/colophon          Fonts, stack, design note, source repo
```

Header navigation:

```text
/deveshbatra/    Home → Papers → Blog → Projects → Speaking → About → Contact → LinkedIn ↗
London HH:MM:SS
```

Footer navigation:

```text
GitHub ↗ | Google Scholar ↗ | LinkedIn ↗ | SSRN ↗ | arXiv ↗ | RSS
```

### Step 8 — Page requirements

Home page must include:

- Devesh's name
- short research/professional tagline
- terminal portrait
- primary links to Papers, Blog, LinkedIn, GitHub, and Google Scholar
- short `$ whoami` panel
- short `$ focus --now` panel
- selected papers or projects

Papers page must include:

- paper cards
- year/date
- topic tags
- links to public sources where available
- no fabricated publication metadata

Blog page must include:

- MDX blog index
- at least one draft/example post clearly marked as draft or placeholder
- RSS support

Projects page must include:

- selected research/code projects
- casual tools and side quests
- a place for badminton club webapps, match generators, lists, or rotas

Now page must include:

- current research interests
- current building/learning items
- optional reading list
- optional badminton or side-project line

Contact page must include:

- LinkedIn
- GitHub
- Google Scholar
- optional contact note
- no email unless supplied directly

Colophon must include:

- stack
- fonts
- design inspiration note
- source repository link
- note that the terminal portrait is based on a first-party supplied portrait

### Step 9 — Add metadata and static-site infrastructure

Configure:

```text
site URL: https://deveshbatra.github.io
site name: Devesh Batra
canonical URLs
Open Graph metadata
social metadata where straightforward
Person JSON-LD
sitemap
robots.txt
RSS feed
404 page
```

### Step 10 — Add GitHub Pages deployment

Create:

```text
.github/workflows/pages.yml
```

The workflow should:

- run on pushes to `main`
- install dependencies reproducibly
- build the static site
- upload the built artifact
- deploy to GitHub Pages

Use these permissions:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

Use `actions/upload-pages-artifact` and `actions/deploy-pages` unless the repo already has a working equivalent.

### Step 11 — Write README instructions

Create or update `README.md` with:

- what the site is
- local development command
- build command
- where profile/paper/project/talk/blog data live
- how to replace portrait assets
- how to publish to GitHub Pages
- what to check before publishing

If GitHub CLI is not authenticated, include manual commands such as:

```bash
git init
git add .
git commit -m "Build personal GitHub Pages site"
git branch -M main
git remote add origin git@github.com:deveshbatra/deveshbatra.github.io.git
git push -u origin main
```

### Step 12 — Verify

Run:

```bash
npm run build
```

Also run these if configured:

```bash
npm run check
npm run lint
npm test
```

Fix build errors before stopping. If a check cannot run because dependencies are unavailable, state the exact reason and leave the command for Devesh.

## 7. Acceptance checklist

Before finishing, verify:

- the site builds with `npm run build`
- the homepage displays `/images/devesh-terminal-portrait.png`
- every required route exists
- Blog, Papers, LinkedIn, GitHub, Google Scholar, Projects, Speaking, About, Now, Contact, and RSS are available
- all external links are editable in one data file or a small data module
- navigation works without typing commands
- no invented facts are introduced
- no scraped images are used
- GitHub Pages workflow exists
- `public/.nojekyll` exists
- sitemap and RSS are generated if dependencies are installed
- mobile layout is usable
- keyboard focus states are visible
- reduced-motion preferences are respected

## 8. Final response format for Codex

When done, summarize:

1. what was built,
2. files changed,
3. commands run,
4. any manual GitHub Pages steps still needed,
5. any factual placeholders Devesh should approve.
