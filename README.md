# soupologist

A personal portfolio and creative archive built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and MDX-powered blog content.

## Project overview

- Fullscreen landing experience with a background video at `/`.
- Custom local font loading using `next/font/local` and a typography-first design system.
- Dark, neon-inspired theme driven by CSS variables in `src/app/globals.css`.
- Responsive navigation including desktop and mobile menu states.
- MDX blog support using `next-mdx-remote` and `gray-matter` for frontmatter parsing.
- Static blog page generation from `src/content/blog/*.mdx`.

## Key pages

- `/` — homepage with video background and site title.
- `/about` — personal introduction and archive concept.
- `/blog` — list of blog posts generated from MDX files.
- `/blog/[slug]` — individual MDX-powered blog post pages.
- `/design` — design section placeholder.
- `/work` — current work / internship summary.

The app also includes a navigation bar with links for `Proj`, `Music`, `Film`, and `Books`, which can be extended later.

## Architecture

- `src/app/layout.tsx` — root layout with local fonts and `Navbar`.
- `src/app/page.tsx` — landing page.
- `src/components/Navbar.tsx` — responsive header and mobile menu.
- `src/lib/posts.ts` — blog post loader using filesystem-based MDX.
- `src/content/blog/` — source MDX files for blog posts.
- `public/videos/bg.mp4` — homepage background video.
- `public/fonts/` — local font assets.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
npm run format
npm run format:check
npm run escape-quotes
```

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser.

## Build and deploy

Build for production:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## Notes

- Blog content is sourced from `src/content/blog/*.mdx`.
- `src/lib/posts.ts` reads MDX files with frontmatter metadata.
- `next-mdx-remote` renders MDX content on the blog post pages.

## Dependencies

- `next` 16.2.1
- `react` 19.2.4
- `react-dom` 19.2.4
- `next-mdx-remote` for MDX rendering
- `gray-matter` for parsing frontmatter
- `tailwindcss` v4 for styling

## Development notes

This repo is structured as a creative hub for code, design, music, and writing. The current implementation focuses on a polished landing experience, typed MDX blog posts, and a flexible layout driven by custom fonts and theme variables.
