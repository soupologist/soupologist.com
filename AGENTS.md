# soupologist.com

Astro site (content collections + MDX + Tailwind v4). No UI framework — the
interactive bits (e.g. `BackgroundVideo.astro`) are plain `<script>` islands,
not React. The navbar lives in `components/Navbar.astro` and is rendered once by
`BaseLayout.astro`; pages shouldn't add their own. Don't reach for `@astrojs/react` or similar unless a piece
of interactivity actually needs component-level state.
