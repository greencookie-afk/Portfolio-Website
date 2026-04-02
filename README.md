# Portfolio Website

Personal portfolio website for Mithun Chakladar, built with Vite and TypeScript.

It highlights projects, open-source work, design work, achievements, and contact details in a sharp editorial layout with a cleaner responsive experience across desktop and mobile.

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

## Build

```bash
npm run build
```

The production output is generated in `dist/`.
