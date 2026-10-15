import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

const music = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/music" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    duration: z.string(),
    audio: z.string(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    location: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

// one file per /now snapshot, named by date (2026-10-08.md). newest is shown
// as the current one, the rest stay on the page as a log
const now = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/now" }),
  schema: z.object({
    date: z.coerce.date(),
  }),
});

// what changed on the site itself (keepachangelog.com, minus the version
// numbers). one file per day something shipped, named by date, with the body
// split into ## added / ## changed / ## removed / ## fixed — only the ones
// that apply
const changelog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/changelog" }),
  schema: z.object({
    date: z.coerce.date(),
  }),
});

// one file per job for /work. frontmatter is the header (logo, role, dates),
// the body is the write-up — any markdown, as long as it needs to be. `start`
// is only for ordering (newest first); `dates` is what actually shows
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string(),
    dates: z.string(),
    start: z.coerce.date(),
    // lives in public/images/logos/ — trim transparent padding first, then
    // they all fit the same 160×44 box
    logo: z.string(),
  }),
});

// tier lists — one folder per list under content/tierlists, any topic:
//   tierlists/biryani/index.md              title (+ custom tiers) and the intro
//                                           paragraph → /tierlists/biryani
//   tierlists/biryani/paradise/index.md     one entry: frontmatter + write-up,
//   tierlists/biryani/paradise/1.jpg        with its photos sitting next to it
// entries are revealed in `date` order (when you ranked it), so a new one just
// needs today's date
const tierlists = defineCollection({
  loader: glob({
    pattern: "*/index.md",
    base: "./src/content/tierlists",
    generateId: ({ entry }) => entry.split("/")[0],
  }),
  schema: z.object({
    title: z.string(),
    tiers: z.array(z.string()).default(["S", "A", "B", "C", "D", "F"]),
  }),
});

const tieritems = defineCollection({
  loader: glob({
    pattern: "*/*/index.md",
    base: "./src/content/tierlists",
    // "biryani/paradise" — the first segment is the list it belongs to
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tier: z.string(),
      date: z.coerce.date(),
      place: z.string().optional(),
      // what the tile on the board shows — shrunk to tile size, so any
      // resolution is fine
      logo: image().optional(),
      photos: z.array(image()).default([]),
    }),
});

export const collections = {
  blog,
  music,
  now,
  changelog,
  work,
  tierlists,
  tieritems,
};
