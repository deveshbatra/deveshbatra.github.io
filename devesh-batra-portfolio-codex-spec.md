# Codex Brief: Devesh Batra GitHub Pages Website

Last updated: 2026-05-03

This is a product/design/build brief for Codex to create a personal GitHub Pages website for **Devesh Batra**.

Important assumption: this brief targets the public profile associated with GitHub username `deveshbatra`, LinkedIn `batradevesh`, Google Scholar profile `0sQlRv0AAAAJ`, NatWest AI research, and Oxford DPhil work. There are multiple people named Devesh Batra online. Do **not** invent facts. Treat all public-profile text as draft copy for Devesh to approve before publishing.

---

## 0. Codex handoff

Place `AGENTS.md` at the repository root and use it as the procedural instruction file for Codex. The product/design source of truth is this brief.

Recommended handoff files for Codex:

```text
AGENTS.md
devesh-batra-portfolio-codex-spec.md
assets/devesh-profile-picture.png
assets/devesh-terminal-portrait.png
README.md
```

---

## 1. Goal

Build a stylish, minimal, slightly funky personal website that works as:

- a professional AI / ML / data science profile
- a research and publications hub
- a blog / notes space
- a project showcase, including small casual web apps
- a contact page with LinkedIn, GitHub, Google Scholar, and other public links

The tone should combine:

- `designby.cc`-inspired editorial minimalism
- terminal / monospace technical energy
- serious AI research profile polish
- a little personal weirdness, especially through side projects such as badminton tools

The site should be useful for recruiters, research collaborators, conference attendees, journalists, technical readers, and friends who just want the right link quickly.

---

## 2. First-party image assets

Devesh has provided a real professional portrait and wants a **terminal-style version** of it on the site.

Use only these local image assets. Do **not** scrape or reuse a profile photo from LinkedIn, Google Images, GitHub, or any other public source.

Source assets in this handoff package:

```text
assets/devesh-profile-picture.png       # original professional portrait provided by Devesh
assets/devesh-terminal-portrait.png     # generated terminal/green-phosphor version
```

Copy them into the site as:

```text
public/images/devesh-profile-picture.png
public/images/devesh-terminal-portrait.png
```

Use `devesh-terminal-portrait.png` as the main hero/profile visual. Keep the original portrait available as an optional secondary image on `/about`, but do not make the homepage feel like a generic corporate headshot.

### Terminal portrait treatment

Create a component named `ProfileTerminalPortrait` or equivalent:

```tsx
<ProfileTerminalPortrait
  src="/images/devesh-terminal-portrait.png"
  alt="Terminal-style portrait of Devesh Batra"
  caption="~/portrait --mode terminal"
/>
```

Visual requirements:

- display the image inside a thin terminal-window frame
- keep a square or near-square crop
- use rounded corners and a low-opacity border
- dark background with green phosphor / ANSI / CRT feel
- optional subtle glow or scanline overlay, but avoid reducing readability
- no employer marks, fake badges, fake logos, or extra text inside the image
- respect `prefers-reduced-motion`

Accessibility requirements:

- use meaningful `alt` text
- do not put critical text inside the image
- do not use the portrait as the only way to identify the site owner

---

## 3. Public profile links

Put these links in editable data, e.g. `src/data/profile.ts`.

```ts
export const profile = {
  name: "Devesh Batra",
  title: "Lead AI Scientist and Researcher",
  affiliation: "NatWest",
  location: "London / Oxford",
  tagline:
    "AI research, applied machine learning, LLMs in finance, safety, governance, and decision systems.",
  links: {
    linkedin: "https://uk.linkedin.com/in/batradevesh",
    github: "https://github.com/deveshbatra",
    googleScholar: "https://scholar.google.com/citations?hl=en&user=0sQlRv0AAAAJ",
    oldHomepage: "https://deveshbatra.github.io/",
    researchGate: "https://www.researchgate.net/profile/Devesh-Batra",
    ssrnAuthorSearch:
      "https://papers.ssrn.com/sol3/results.cfm?RequestTimeout=50000000&sort=0&txtKey_Words=Devesh%20Batra",
    arxivAuthorSearch:
      "https://arxiv.org/search/?query=Devesh+Batra&searchtype=author"
  }
};
```

Suggested short bio draft:

> Devesh Batra is an AI researcher and data scientist working on applied machine learning, LLM systems, AI governance, and decision-making under uncertainty. His public research spans LLM agents in finance, compliance-critical LLM systems, conformal prediction, machine unlearning, model bias, and risk-taking behaviour.

Suggested personal bio line:

> I like building things that are both useful and rigorous: research papers, production AI systems, quick side projects, and the occasional tool for organising badminton matches.

Do not expose a personal email unless Devesh explicitly provides one.

---

## 4. Design direction

Use `designby.cc` as a reference for tone, not as a template to copy.

Reinterpret these cues:

- slash/path identity such as `/deveshbatra/`
- minimal editorial layout
- compact navigation with arrows
- local-time detail such as `London HH:MM:SS`
- large typography
- sparse copy
- deliberate whitespace
- monochrome palette with one sharp accent
- subtle motion on hover

Blend this with a terminal/editor aesthetic:

- terminal status panels
- command-like labels, e.g. `$ whoami`, `$ focus --now`
- small ASCII separators such as `---`, `::`, `~/papers`
- hover effects that look like terminal selection or text inversion
- optional command palette triggered with `/`, `⌘K`, or `Ctrl+K`

### Suggested visual system

Default to a dark “Night Lab” palette:

```css
--bg: #080808;
--fg: #f2f2ea;
--muted: #8e8e83;
--line: #2b2b2b;
--accent: #c8ff00;
--accent-2: #7aa2ff;
```

Optional light “Paper Terminal” palette if implemented as a theme toggle:

```css
--bg: #f5f1e8;
--fg: #111111;
--muted: #77736b;
--line: #1b1b1b;
--accent: #00a36c;
--accent-2: #243bff;
```

Typography:

- mono: `JetBrains Mono`, `IBM Plex Mono`, `Geist Mono`, or system monospace
- sans/display: `Inter`, `Geist`, `Space Grotesk`, or system UI
- keep body text highly readable; do not make the whole site tiny terminal text


---

## 4.1 Codex handoff convention

Use a single procedural project-guidance file named `AGENTS.md` at the repository root. Do not add duplicate project-guidance files with other names.

`AGENTS.md` should tell Codex how to build, verify, and deploy this GitHub Pages site, while this file remains the product/design/content brief.

---

## 5. Technical stack

Primary target: **GitHub Pages** personal site.

Assumed repository:

```text
deveshbatra.github.io
```

Recommended stack for a new repo:

- Astro
- TypeScript
- Tailwind CSS or clean CSS modules
- MDX for blog posts
- RSS and sitemap support
- GitHub Actions deployment to GitHub Pages

Why Astro is preferred here:

- the site is mostly static content
- GitHub Pages hosts static files well
- Astro works well for MDX, RSS, sitemap, and content collections
- interactive pieces can be small client-side islands: live clock, command palette, filters

Acceptable alternative:

- Next.js App Router only if configured for static export with no server-only features, no API routes, no middleware, and no runtime image optimization. If using Next.js static export, set `images: { unoptimized: true }`.

Do not add:

- backend server
- database
- authentication
- serverless functions
- private API keys
- analytics that require cookies unless Devesh explicitly asks

---

## 6. GitHub Pages deployment requirements

Create a GitHub Actions workflow at:

```text
.github/workflows/pages.yml
```

Requirements:

- run on pushes to `main`
- install dependencies
- run check/lint/build commands
- build static output, normally `dist/` for Astro
- upload the static artifact
- deploy to GitHub Pages

Use production URL:

```text
https://deveshbatra.github.io
```

If the repo is exactly `deveshbatra.github.io`, use:

```ts
site: "https://deveshbatra.github.io"
```

and no project `base` path.

If the repo is a project repo, e.g. `portfolio`, set:

```ts
site: "https://deveshbatra.github.io"
base: "/portfolio"
```

Also add:

```text
public/.nojekyll
```

so GitHub Pages does not try to process the static site as Jekyll.

---

## 7. Site architecture

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

Header nav:

```text
/deveshbatra/    Home → Papers → Blog → Projects → Speaking → About → Contact → LinkedIn ↗
London HH:MM:SS
```

Footer nav:

```text
GitHub ↗ | Google Scholar ↗ | LinkedIn ↗ | SSRN ↗ | arXiv ↗ | RSS
```

Mobile:

- collapse navigation cleanly
- keep `/deveshbatra/` visible
- keep the site usable without command palette

---

## 8. Home page

Hero layout:

- left: `/deveshbatra/`, headline, short bio, CTAs
- right: terminal portrait card and small terminal status panel

Example hero copy:

```text
/deveshbatra/
Lead AI Scientist & Researcher

I work on applied AI systems: LLMs in finance, responsible deployment,
model behaviour, uncertainty, and decision-making under risk.

Currently: NatWest AI Research · MSc, DPhil Oxford
```

Primary CTAs:

```text
Read papers →
Read blog →
LinkedIn ↗
Google Scholar ↗
```

Terminal status panel:

```text
$ whoami
Devesh Batra

$ focus --now
LLM systems · AI governance · financial AI · uncertainty · model behaviour

$ links
scholar | github | linkedin | papers | blog

$ timezone
London 13:42:08
```

Homepage sections:

1. Selected papers: 4–6 highlighted papers
2. Latest notes: 3 blog posts or draft placeholders
3. What I work on: 4 research themes
4. Build log / side quests: badminton scheduling tools, AI demos, small webapps
5. Manifesto block

Suggested manifesto block:

```text
I like small, legible systems.

Research should be understandable.
Software should be useful.
AI systems should be measured where they are actually used.
And side projects should be allowed to be weird.
```

---

## 9. Pages in detail

### `/about`

Sections:

- About Devesh
- Research themes
- Background
- Things I build for fun
- Colophon/design note teaser
- Disclaimer

Suggested disclaimer:

```text
Views are my own. This site is a personal homepage and does not represent my employer.
```

### `/papers`

Build a data-driven publications page.

Required fields:

```ts
export type Paper = {
  title: string;
  year: number;
  type: string;
  venue: string;
  authors: string[];
  summary: string;
  tags: string[];
  links: {
    paper?: string;
    pdf?: string;
    doi?: string;
    code?: string;
    workshop?: string;
    thesis?: string;
    slides?: string;
  };
  featured?: boolean;
};
```

Features:

- sort newest first
- filter by tag and year
- include tags such as `LLMs`, `Finance`, `Responsible AI`, `Conformal Prediction`, `Machine Unlearning`, `Healthcare`, `Human-AI Interaction`, `Bias`, `Risk`
- each paper card should have external link buttons: `paper ↗`, `code ↗`, `doi ↗`, `slides ↗`
- include a prominent Google Scholar link
- include note: `Publication list is curated; see Google Scholar for the full/current list.`

### `/blog`

Use MDX.

Categories:

- `research-notes`
- `ai-in-practice`
- `coding-notes`
- `side-projects`
- `badminton-tools`
- `papers-i-liked`

Starter draft posts:

1. `why-a-personal-website.md` — why keep a personal research homepage in the age of LinkedIn and Scholar
2. `notes-on-llm-agents-in-finance.md` — practical notes on LLM agents, governance, and deployment
3. `building-small-tools-for-real-communities.md` — lightweight webapps for badminton club match lists, rotas, or tournament pairings

Frontmatter:

```md
---
title: "Notes on LLM agents in finance"
date: "2026-05-03"
description: "A short note on what makes LLM agents useful, risky, and deployable in financial services."
tags: ["LLMs", "finance", "governance"]
draft: true
---
```

Hide drafts in production unless `PUBLIC_SHOW_DRAFTS=true`.

### `/projects`

Project buckets:

- Research code
- AI / data demos
- Casual webapps
- Open source / GitHub

Include at least one side-project placeholder:

```ts
{
  title: "Badminton Match List Generator",
  slug: "badminton-match-list-generator",
  status: "idea",
  description:
    "A small webapp for creating accessible match lists, rotations, or doubles pairings for a badminton club.",
  tags: ["side project", "club tools", "webapp"],
  links: {}
}
```

### `/speaking`

Include publicly surfaced talks/workshops where verified.

Seed entries:

```ts
export const talks = [
  {
    title: "LLMs Meet Industry: Insights on Human-AI Collaboration",
    event: "Human-Algorithm Interaction Workshop, University of Oxford",
    date: "2025-07",
    description:
      "Presentation at Oxford HAI Workshop; public programme lists Devesh Batra from NatWest.",
    links: {
      programme:
        "https://www.sbs.ox.ac.uk/sites/default/files/2025-07/HAI2025programme_0.pdf"
    }
  }
];
```

Allow `slides`, `video`, `poster`, and `programme` link buttons.

### `/now`

Sections:

- Reading
- Building
- Researching
- Side quests
- Last updated

This page should make the site feel alive.

### `/contact`

Use:

- LinkedIn button
- GitHub button
- Google Scholar button
- ResearchGate button if kept
- optional email placeholder disabled by default

Suggested copy:

```text
The best way to reach me professionally is LinkedIn. For code and public projects, GitHub is the easiest starting point.
```

---

## 10. Paper seed data

Use this as editable seed data. Verify before publishing.

```ts
export const papers: Paper[] = [
  {
    title: "Operationalising LLMs for Compliance-Critical Letter Writing in Financial Services",
    year: 2025,
    type: "Workshop paper",
    venue: "NeurIPS 2025 Workshop on Generative AI in Finance",
    authors: [
      "Devesh Batra",
      "Alexandros Anatolakis",
      "John Hartley",
      "Jude King",
      "Greig A Cowan",
      "Raad Khraishi"
    ],
    summary:
      "A production-focused paper on LLM-assisted drafting for compliance-critical financial-services letters.",
    tags: ["LLMs", "Finance", "Responsible AI", "Production AI"],
    links: {
      workshop:
        "https://sites.google.com/view/neurips-25-gen-ai-in-finance/accepted-papers"
    },
    featured: true
  },
  {
    title: "A Review of LLM Agent Applications in Finance and Banking",
    year: 2025,
    type: "SSRN preprint",
    venue: "SSRN",
    authors: [
      "Devesh Batra",
      "Conor Hamill",
      "John Hartley",
      "Ramin Okhrati",
      "Dale Seddon",
      "Harvey Miller",
      "Raad Khraishi",
      "Greig Cowan"
    ],
    summary:
      "A survey of LLM agent applications in finance and banking, organised around simulation, acting, analysis, and advising.",
    tags: ["LLMs", "Agents", "Finance", "Banking"],
    links: {
      paper: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5381584"
    },
    featured: true
  },
  {
    title: "How Personality Traits Shape LLM Risk-Taking Behaviour",
    year: 2025,
    type: "Conference paper",
    venue: "Findings of ACL 2025",
    authors: [
      "John Hartley",
      "Conor Brian Hamill",
      "Dale Seddon",
      "Devesh Batra",
      "Ramin Okhrati",
      "Raad Khraishi"
    ],
    summary:
      "Studies how LLM personality traits relate to risk propensity using Cumulative Prospect Theory and Big Five framing.",
    tags: ["LLMs", "Risk", "Behaviour", "Finance"],
    links: {
      paper: "https://aclanthology.org/2025.findings-acl.1085/",
      doi: "https://doi.org/10.18653/v1/2025.findings-acl.1085"
    },
    featured: true
  },
  {
    title: "Obscured but Not Erased: Evaluating Nationality Bias in LLMs via Name-Based Bias Benchmarks",
    year: 2025,
    type: "arXiv preprint",
    venue: "arXiv",
    authors: [
      "Giulio Pelosio",
      "Devesh Batra",
      "Noémie Bovey",
      "Robert Hankache",
      "Cristovao Iglesias",
      "Greig Cowan",
      "Raad Khraishi"
    ],
    summary:
      "Evaluates latent nationality bias in LLMs when explicit demographic labels are replaced by culturally indicative names.",
    tags: ["LLMs", "Bias", "Evaluation", "Responsible AI"],
    links: {
      paper: "https://arxiv.org/abs/2507.16989",
      doi: "https://doi.org/10.48550/arXiv.2507.16989"
    },
    featured: true
  },
  {
    title: "Conformal Predictions for Longitudinal Data",
    year: 2023,
    type: "arXiv preprint",
    venue: "arXiv",
    authors: ["Devesh Batra", "Salvatore Mercuri", "Raad Khraishi"],
    summary:
      "Introduces Longitudinal Predictive Conformal Inference for finite-width prediction intervals with longitudinal and cross-sectional coverage goals.",
    tags: ["Conformal Prediction", "Uncertainty", "Time Series", "Finance"],
    links: {
      paper: "https://arxiv.org/abs/2310.02863",
      code: "https://github.com/EconAIorg/LPCI",
      doi: "https://doi.org/10.48550/arXiv.2310.02863"
    },
    featured: true
  },
  {
    title: "An Introduction to Machine Unlearning",
    year: 2022,
    type: "arXiv preprint",
    venue: "arXiv",
    authors: [
      "Salvatore Mercuri",
      "Raad Khraishi",
      "Ramin Okhrati",
      "Devesh Batra",
      "Conor Hamill",
      "Taha Ghasempour",
      "Andrew Nowlan"
    ],
    summary:
      "A survey-style introduction to machine unlearning, covering definitions, algorithms, evaluation, and implementation challenges.",
    tags: ["Machine Unlearning", "Privacy", "Responsible AI"],
    links: {
      paper: "https://arxiv.org/abs/2209.00939",
      doi: "https://doi.org/10.48550/arXiv.2209.00939"
    }
  },
  {
    title:
      "Interference effects from machine learning matched confusable object pairs in memory assessment tasks",
    year: 2022,
    type: "DPhil thesis",
    venue: "University of Oxford / Oxford University Research Archive",
    authors: ["Devesh Batra"],
    summary:
      "Oxford DPhil thesis on machine-learning-matched confusable object pairs in memory assessment tasks for early detection of neurodegeneration.",
    tags: ["Machine Learning", "Healthcare", "Digital Biomarkers", "Computer Vision"],
    links: {
      thesis:
        "https://ora.ox.ac.uk/objects/uuid:b83a1212-d366-4c6e-8c1c-e4af273c9719",
      doi: "https://doi.org/10.5287/ora-4rp1yvyp5"
    }
  }
];
```

---

## 11. Components to build

Suggested components:

```text
src/components/
  CommandPalette.*
  CursorText.*
  ExternalLink.*
  Footer.*
  Header.*
  LiveClock.*
  ManifestoBlock.*
  PaperCard.*
  ProfileTerminalPortrait.*
  ProjectCard.*
  SectionLabel.*
  TagPill.*
  TerminalPanel.*
  ThemeToggle.*
```

Component notes:

- `LiveClock` should show London time and tick every second.
- `CommandPalette` can be minimal: open with `/`, `Cmd+K`, or `Ctrl+K`; list routes and external links.
- `ThemeToggle` is optional. Dark mode should be default.
- All external links open in a new tab with `rel="noreferrer"`.

---

## 12. Extra features people like Devesh should have

Beyond Blog, Papers, and LinkedIn, include or scaffold:

1. **Selected projects with demos** — especially small deployed tools such as badminton match planner, pair generator, attendance tool.
2. **Research explainers** — short accessible writeups translating papers into “problem, method, why it matters.”
3. **Talks / speaking page** — useful for industry researchers and conference visitors.
4. **Now page** — current focus, reading, building, side quests.
5. **CV / résumé page** — optional PDF in `/public/cv.pdf`; hide link if file does not exist.
6. **Code and reproducibility links** — link papers to code where available.
7. **Resources / reading list** — around LLM evaluation, conformal prediction, AI in finance, and applied responsible AI.
8. **Personal side-project corner** — makes the site memorable.
9. **RSS feed** — low effort and high signal for technical readers.
10. **Colophon** — fonts, stack, hosting, design inspiration, source repository.
11. **Personal operating manual** — how to collaborate, preferred working style, good reasons to get in touch.
12. **Media kit** — 50-word bio, 100-word bio, profile links, and portrait assets.

---

## 13. Accessibility and UX requirements

- Fully responsive: mobile, tablet, desktop.
- Do not hide important content behind terminal commands only.
- Terminal aesthetic must be decorative, not a UX barrier.
- Keyboard navigable.
- Visible focus states.
- Respect `prefers-reduced-motion`.
- Semantic HTML: `header`, `main`, `section`, `footer`.
- Contrast should pass WCAG AA.
- Use descriptive link labels, not only “click here.”
- No text smaller than `14px` on mobile.

---

## 14. SEO requirements

Use metadata like:

```ts
const siteMetadata = {
  title: "Devesh Batra — AI Scientist & Researcher",
  description:
    "Personal website of Devesh Batra: AI research, papers, projects, and writing on LLMs, uncertainty, responsible AI, and applied machine learning.",
  url: "https://deveshbatra.github.io"
};
```

Add:

- Open Graph image using the terminal/editor visual system
- `robots.txt`
- `sitemap.xml`
- RSS feed for blog posts
- JSON-LD `Person` schema with sameAs links to LinkedIn, GitHub, Google Scholar, ResearchGate, SSRN/arXiv search if used

---

## 15. Implementation steps for Codex

1. Create or update a static GitHub Pages-ready website.
2. Prefer Astro + TypeScript + MDX + Tailwind. Use Next.js only if static export is configured correctly.
3. Copy supplied assets into `public/images/`:
   - `devesh-profile-picture.png`
   - `devesh-terminal-portrait.png`
4. Add editable data files for profile, papers, projects, talks, navigation, and site metadata.
5. Build global layout with header, footer, local clock, and dark terminal/editor theme.
6. Build homepage with hero, terminal portrait, terminal status panel, selected papers, latest notes, and side quests.
7. Build `/papers` with filterable paper cards from seed data.
8. Build `/blog` with MDX post rendering and starter draft posts.
9. Build `/projects`, `/speaking`, `/about`, `/now`, `/contact`, and `/colophon`.
10. Add command palette.
11. Add SEO metadata, sitemap, RSS, robots, and OG image placeholder.
12. Add `.github/workflows/pages.yml` for GitHub Pages deployment.
13. Add `public/.nojekyll`.
14. Run lint/check/build and fix errors.
15. Leave concise publishing instructions in `README.md`.

---

## 16. Acceptance criteria

The finished site should:

- include the requested options: Blog, Papers, LinkedIn
- include Projects, Speaking, About, Now, Contact, and Colophon
- feel inspired by `designby.cc` and terminal/editor culture without copying any site exactly
- include the supplied terminal-style portrait as the primary hero/profile visual
- remain easy to use for non-technical visitors
- use public profile and paper links without inventing facts
- make papers easy to browse and link to source pages
- support future blog posts via MDX
- include side-project placeholders, especially badminton tools
- deploy cleanly to GitHub Pages
- pass `npm run build`
- pass any lint/check command configured by the chosen stack
- have no console errors
- publish no private email, keys, tokens, or scraped images

---

## 17. Single prompt to give Codex

```md
Build a GitHub Pages personal website for Devesh Batra using the attached brief and assets.

Primary target: repository `deveshbatra.github.io`, deployed at `https://deveshbatra.github.io`.

Prefer Astro + TypeScript + MDX + Tailwind. If using another stack, it must produce a static export suitable for GitHub Pages and require no server runtime.

Use the design direction inspired by designby.cc: minimal editorial layout, slash/path identity, compact navigation, local London clock, large typography, and subtle motion. Blend that with a terminal/editor aesthetic. Do not copy designby.cc exactly.

Use these routes: /, /about, /papers, /blog, /blog/[slug], /projects, /speaking, /now, /contact, /colophon.

Copy the supplied assets into public/images/: devesh-profile-picture.png and devesh-terminal-portrait.png. Use the terminal portrait as the main homepage visual in a terminal-window style frame. Do not use scraped photos or stock images.

Implement content files for profile links, papers, projects, talks, and blog metadata. Include the paper seed data from the brief, but structure it so it is easy to edit. Build a filterable /papers page by tag and year. Build /blog using MDX with starter draft posts. Build /projects with placeholders for research code and casual badminton web apps.

Add accessibility basics: keyboard-friendly nav, visible focus states, reduced motion support, strong contrast, semantic HTML. Add metadata, RSS, sitemap, robots.txt, and Person JSON-LD. Add .github/workflows/pages.yml for GitHub Pages deployment and public/.nojekyll.

Run build/check commands and fix errors. Leave a README with publishing instructions.
```

---

## 18. Public sources consulted

Re-check sources before publishing. Keep public facts editable.

Design inspiration:

- https://www.designby.cc/

Public profiles:

- https://github.com/deveshbatra
- https://uk.linkedin.com/in/batradevesh
- https://scholar.google.com/citations?hl=en&user=0sQlRv0AAAAJ
- https://www.researchgate.net/profile/Devesh-Batra

Research / publication pages:

- https://nwg.ai/discover-our-ai-research-fdcdd666c5af
- https://nwg.ai/discover-our-talks-and-presentations-83b6bc9844eb
- https://ora.ox.ac.uk/objects/uuid:b83a1212-d366-4c6e-8c1c-e4af273c9719
- https://arxiv.org/abs/2310.02863
- https://github.com/EconAIorg/LPCI
- https://arxiv.org/abs/2209.00939
- https://aclanthology.org/2025.findings-acl.1085/
- https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5381584
- https://arxiv.org/abs/2507.16989
- https://sites.google.com/view/neurips-25-gen-ai-in-finance/accepted-papers
- https://www.sbs.ox.ac.uk/sites/default/files/2025-07/HAI2025programme_0.pdf

GitHub Pages / Codex references:

- https://docs.github.com/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://developers.openai.com/codex/guides/agents-md

---

## 19. Final instruction to Codex

Build the GitHub Pages-ready website now. Keep the implementation clean, static, and maintainable. Use the content above as seed data, use the provided terminal portrait asset, and structure everything so Devesh can easily edit titles, descriptions, paper links, project entries, image assets, and blog posts without changing components.

