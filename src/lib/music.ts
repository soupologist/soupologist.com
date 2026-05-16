import fs from "fs";
import path from "path";
import matter from "gray-matter";

const musicDirectory = path.join(process.cwd(), "src/content/music");

export type MusicEntry = {
  title: string;
  slug: string;
  date: string;
  duration: string;
  audio: string;
  cover?: string;
  tags: string[];
  location?: string;
  published: boolean;
};

export function getAllMusicEntries(): MusicEntry[] {
  const fileNames = fs.readdirSync(musicDirectory);

  return fileNames
    .filter((file) => file.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(musicDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        duration: data.duration,
        audio: data.audio,
        cover: data.cover || undefined,
        tags: data.tags || [],
        location: data.location || undefined,
        published: data.published ?? true,
      } as MusicEntry;
    })
    .filter((entry) => entry.published)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getMusicEntry(slug: string) {
  const fullPath = path.join(musicDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
    slug,
  };
}