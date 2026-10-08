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

export const collections = { blog, music, now };
