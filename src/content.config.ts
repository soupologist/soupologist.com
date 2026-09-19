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

export const collections = { blog, music };
