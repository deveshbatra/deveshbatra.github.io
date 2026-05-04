# Devesh Batra Personal Website

Static personal GitHub Pages site for `deveshbatra.github.io`, built with Astro, TypeScript, MDX, RSS, sitemap, and GitHub Actions.

## Develop

```bash
npm install
npm run dev
```

## Check And Build

```bash
npm run check
npm run build
```

`npm run build` runs `astro check` before `astro build`. The generated site is written to `dist/`.

Draft blog posts are hidden by default. To include drafts locally:

```bash
PUBLIC_SHOW_DRAFTS=true npm run dev
```

## Content

- Profile links and bio: `src/data/profile.ts`
- Papers: `src/data/papers.ts`
- Projects and tools: `src/data/projects.ts`
- Talks: `src/data/talks.ts`
- Blog posts: `src/content/blog/*.mdx`
- Site metadata: `src/data/site.ts`

Images are first-party local assets in `public/images/`.

## Deploy

Push to `main`. The workflow in `.github/workflows/pages.yml` installs dependencies, runs `npm run build`, uploads `dist/`, and deploys to GitHub Pages.

For this user-site repository, Astro is configured with:

```ts
site: "https://deveshbatra.github.io"
```

There is no project `base` path.
