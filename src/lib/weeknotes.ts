import { getCollection, type CollectionEntry } from "astro:content";

export type Weeknote = CollectionEntry<"weeknotes"> & {
  year: number;
  week: number;
  // "2026-W47"
  label: string;
  monday: Date;
  sunday: Date;
};

const DAY = 24 * 60 * 60 * 1000;

// ISO weeks: week 1 is the one with jan 4th in it, weeks start on monday
function mondayOf(year: number, week: number) {
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const sinceMonday = (jan4.getUTCDay() + 6) % 7;
  return new Date(jan4.getTime() - sinceMonday * DAY + (week - 1) * 7 * DAY);
}

// every weeknote, newest first, with its week worked out from the file name
export async function getWeeknotes(): Promise<Weeknote[]> {
  const entries = await getCollection(
    "weeknotes",
    ({ data }) => import.meta.env.DEV || !data.draft,
  );

  return entries
    .map((entry) => {
      const match = entry.id.match(/^(\d{4})-w(\d{1,2})$/);
      if (!match) {
        throw new Error(
          `weeknote "${entry.id}" should be named like 2026-w47.md`,
        );
      }
      const year = Number(match[1]);
      const week = Number(match[2]);
      const monday = mondayOf(year, week);
      return {
        ...entry,
        year,
        week,
        label: `${year}-W${String(week).padStart(2, "0")}`,
        monday,
        sunday: new Date(monday.getTime() + 6 * DAY),
      };
    })
    .sort((a, b) => b.monday.getTime() - a.monday.getTime());
}

const short = (date: Date) =>
  date
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    })
    .toLowerCase();

// "nov 16 – nov 22"
export const weekRange = (note: Weeknote) =>
  `${short(note.monday)} – ${short(note.sunday)}`;

export const weeknoteHref = (note: Weeknote) =>
  `/weeknotes/${note.year}/${note.week}`;

// ~200 words a minute, never less than 1
export const readingTime = (note: Weeknote) =>
  Math.max(1, Math.round((note.body ?? "").split(/\s+/).length / 200));
