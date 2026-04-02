# Portfolio Website

Personal portfolio website for Mithun Chakladar, built with Vite and TypeScript.

It highlights projects, open-source work, design work, achievements, and contact details in a sharp editorial layout. The hero section now includes a live GitHub activity panel that refreshes automatically from GitHub's public events API while the page is open.

## Stack

- Vite
- TypeScript
- Vanilla DOM rendering
- CSS with a custom design system

## Features

- Responsive single-page portfolio
- Project showcase with GitHub and live preview links
- Open-source contribution highlights
- Creative work gallery
- Live GitHub hero card with:
  - contribution graph
  - latest public GitHub events
  - auto-refresh every 5 minutes while the tab is active
  - graceful retry messaging if the GitHub API is unavailable

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL shown by Vite to view the site.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Customization

Most portfolio content lives in [`src/main.ts`](./src/main.ts):

- `PROJECTS`
- `OPENSOURCE`
- `SKILLS`
- `CONTACTS`
- `IG_POSTS`

Branding and metadata live in [`index.html`](./index.html), and the main visual system lives in [`src/style.css`](./src/style.css).

Static images are stored in [`public/assets`](./public/assets).

## GitHub Activity Notes

The hero activity panel uses GitHub's public API for live event data. That means:

- only public activity is shown
- new pushes and GitHub events appear automatically on refresh cycles
- contribution graphs can still lag slightly because GitHub processes contribution data separately

The GitHub username is configured in [`src/main.ts`](./src/main.ts) through the `GITHUB_USERNAME` constant.

## Build

```bash
npm run build
```

The production output is generated in `dist/`.
