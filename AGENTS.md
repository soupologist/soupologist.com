# soupologist.com

Astro site (content collections + MDX + Tailwind v4). No UI framework — the two
interactive bits (`Navbar.astro`, `BackgroundVideo.astro`) are plain `<script>`
islands, not React. Don't reach for `@astrojs/react` or similar unless a piece
of interactivity actually needs component-level state.
