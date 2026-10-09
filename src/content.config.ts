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

// tier lists — one folder per list under content/tiers, any topic:
//   tiers/biryani/list.json             title, blurb, tier names → /tiers/biryani
//   tiers/biryani/paradise/index.md     one entry: frontmatter + write-up,
//   tiers/biryani/paradise/1.jpg        with its photos sitting next to it
// entries are revealed in `date` order (when you ranked it), so a new one just
// needs today's date
const tierlists = defineCollection({
  loader: glob({
    pattern: "*/list.json",
    base: "./src/content/tiers",
    generateId: ({ entry }) => entry.split("/")[0],
  }),
  schema: z.object({
    title: z.string(),
    blurb: z.string().optional(),
    tiers: z.array(z.string()).default(["S", "A", "B", "C", "D", "F"]),
  }),
});

const tieritems = defineCollection({
  loader: glob({
    pattern: "*/*/index.md",
    base: "./src/content/tiers",
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

export const collections = { blog, music, now, tierlists, tieritems };
