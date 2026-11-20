import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

// every post, newest first. drafts only exist in dev
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection(
    "blog",
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return posts.sort((a, b) => b.data.date.localeCompare(a.data.date));
}

const parse = (post: Post) => new Date(`${post.data.date}T00:00:00Z`);

// "20 november 2026"
export const longDate = (post: Post) =>
  parse(post)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    })
    .toLowerCase();

// "20 nov"
export const shortDate = (post: Post) =>
  parse(post)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      timeZone: "UTC",
    })
    .toLowerCase();

export const year = (post: Post) => parse(post).getUTCFullYear();

// ~200 words a minute, never less than 1
export const readingTime = (post: Post) =>
  Math.max(1, Math.round((post.body ?? "").split(/\s+/).length / 200));
