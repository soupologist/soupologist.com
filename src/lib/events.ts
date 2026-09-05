import fs from "fs";
import path from "path";
import matter from "gray-matter";

const eventsDirectory = path.join(process.cwd(), "src/content/events");

export type EventMeta = {
  slug: string;
  title: string;
  /** ISO date (YYYY-MM-DD) — sortable, formatted for display at render time. */
  date: string;
  venue?: string;
  city?: string;
  /** Who played. First entry is treated as the headliner. */
  lineup: string[];
  cover?: string;
  coverAlt?: string;
  /** One or two lines shown on the index page. */
  summary?: string;
  tags: string[];
  published: boolean;
};

export type EventPost = EventMeta & { content: string };

function toMeta(slug: string, data: Record<string, unknown>): EventMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    venue: (data.venue as string) || undefined,
    city: (data.city as string) || undefined,
    lineup: (data.lineup as string[]) ?? [],
    cover: (data.cover as string) || undefined,
    coverAlt: (data.coverAlt as string) || undefined,
    summary: (data.summary as string) || undefined,
    tags: (data.tags as string[]) ?? [],
    published: (data.published as boolean) ?? true,
  };
}

function eventFiles(): string[] {
  if (!fs.existsSync(eventsDirectory)) return [];

  return fs
    .readdirSync(eventsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    // `_`-prefixed files are scaffolding (e.g. _template.mdx), never routes.
    .filter((file) => !file.startsWith("_"));
}

export function getAllEvents(): EventMeta[] {
  return eventFiles()
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fileContents = fs.readFileSync(
        path.join(eventsDirectory, fileName),
        "utf8",
      );
      const { data } = matter(fileContents);
      return toMeta(slug, data);
    })
    .filter((event) => event.published)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getEvent(slug: string): EventPost | null {
  const fullPath = path.join(eventsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

  return { ...toMeta(slug, data), content };
}

/** "2026-08-22" → "22 Aug 2026". Stable across locales so SSR and client agree. */
export function formatEventDate(iso: string): string {
  if (!iso) return "";

  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

/** Groups events by year for the index page's ruled-column layout. */
export function groupByYear(events: EventMeta[]): [string, EventMeta[]][] {
  const buckets = new Map<string, EventMeta[]>();

  for (const event of events) {
    const year = event.date.slice(0, 4) || "undated";
    const bucket = buckets.get(year);
    if (bucket) bucket.push(event);
    else buckets.set(year, [event]);
  }

  return [...buckets.entries()].sort((a, b) => b[0].localeCompare(a[0]));
}
