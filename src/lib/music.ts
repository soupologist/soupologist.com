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