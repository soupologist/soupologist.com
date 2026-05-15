import Link from "next/link";
import { getAllMusicEntries } from "@/lib/music";

export default function MusicPage() {
  const entries = getAllMusicEntries();

  return (
    <main className="px-4 md:px-6">
      <div className="pt-20 md:pt-24" />

      <section className="mx-auto max-w-3xl border border-(--border) bg-(--surface) px-5 py-6 md:px-7 md:py-8">
        {/* Header */}
        <div className="mb-8 border-b border-(--border) pb-4">
          <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-foreground opacity-60">
            archive
          </p>

          <h1 className="text-2xl md:text-3xl font-head tracking-widest leading-none">
            music
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-(--text) opacity-55">
            I want to be more accountable in terms of my consistency in music production. So this place is an area for me to put the tracks and snippets I make along with some background.
          </p>
        </div>

        {/* Entries */}
        <div className="divide-y divide-(--border)">
          {entries.map((entry, index) => (
            <Link key={entry.slug} href={`/music/${entry.slug}`}>
              <article className="group grid grid-cols-[28px_1fr_auto] gap-4 py-5 transition-all duration-200 hover:translate-x-0.5">
                {/* Number */}
                <div className="pt-0.5 text-xs text-foreground opacity-35 group-hover:opacity-80 transition-opacity">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Main */}
                <div>
                  <h2 className="text-lg md:text-xl tracking-tight text-(--text) transition-colors group-hover:text-foreground">
                    {entry.title}
                  </h2>

                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-(--text) opacity-45">
                    <span>{entry.date}</span>
                    {entry.location && <span>{entry.location}</span>}
                    {entry.tags?.length > 0 && (
                      <span>{entry.tags.join(", ")}</span>
                    )}
                  </div>
                </div>

                {/* Duration */}
                <div className="pt-1 text-xs text-(--text) opacity-45 tabular-nums">
                  {entry.duration}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <div className="h-20 md:h-24" />
    </main>
  );
}