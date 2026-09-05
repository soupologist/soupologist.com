/**
 * Single choke point for media URLs.
 *
 * Clips and photos currently live in `public/`, so this is close to a no-op.
 * When the footage outgrows the repo (Vercel caps individual files around
 * 100MB, and git does not enjoy mp4s), set NEXT_PUBLIC_MEDIA_BASE_URL to a
 * CDN / bucket origin and every <Clip> and <Gallery> follows — no content
 * files need editing, because they all store repo-relative paths.
 */

const BASE = (process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? "").replace(/\/$/, "");

export function mediaUrl(src: string): string {
  // Already absolute (a CDN URL hardcoded in content) — leave it alone.
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;

  const path = src.startsWith("/") ? src : `/${src}`;
  return `${BASE}${path}`;
}
