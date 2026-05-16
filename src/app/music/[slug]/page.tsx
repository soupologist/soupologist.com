import { notFound } from "next/navigation";
import { getAllMusicEntries, getMusicEntry } from "@/lib/music";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const entries = getAllMusicEntries();

  return entries.map((entry) => ({
    slug: entry.slug,
  }));
}

export default async function MusicEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getMusicEntry(slug);

  if (!entry) notFound();

  return (
    <main className="px-4 md:px-6">
      <div className="pt-20 md:pt-24" />

      <section className="mx-auto max-w-3xl border border-(--border) bg-(--surface) px-5 py-6 md:px-7 md:py-8">
        {/* Header */}
        <header className="border-b border-(--border) pb-6">
          <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-foreground opacity-60">
            fragment
          </p>

          <h1 className="text-3xl md:text-4xl font-head tracking-tight leading-none">
            {entry.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-(--text) opacity-50">
            <span>{entry.date}</span>
            <span>{entry.duration}</span>
            {entry.location && <span>{entry.location}</span>}
          </div>

          {entry.tags?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {entry.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-[0.18em] opacity-45"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Cover */}
        {entry.cover && (
          <div className="mt-8">
            <img
              src={entry.cover}
              alt={entry.title}
              className="w-full border border-(--border)"
            />
          </div>
        )}

        {/* Audio */}
        <div className="mt-8">
          <audio controls className="w-full">
            <source src={entry.audio} type="audio/mpeg" />
          </audio>
        </div>

        {/* Content */}
        <article className="prose prose-invert mt-10 max-w-none">
          <MDXRemote source={entry.content} components={mdxComponents} />
        </article>
      </section>

      <div className="h-20 md:h-24" />
    </main>
  );
}