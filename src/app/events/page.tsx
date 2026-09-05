import type { Metadata } from "next";
import Link from "next/link";
import { formatEventDate, getAllEvents, groupByYear } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description: "Shows I went to, the clips I took, and what was playing.",
};

export default function EventsPage() {
  const events = getAllEvents();
  const years = groupByYear(events);

  return (
    <main className="px-4 md:px-8">
      <div className="pt-24 md:pt-32" />

      <div className="mx-auto max-w-5xl">
        {/* Masthead */}
        <header className="border-b border-(--border) pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-(--muted)">
            live / in person
          </p>

          <h1 className="mt-2 font-humane text-[clamp(5rem,20vw,13rem)] font-bold uppercase leading-[0.8] tracking-[-0.01em] text-(--foreground)">
            Events
          </h1>

          <p className="mt-4 max-w-[56ch] font-mono text-[13px] leading-[1.8] text-(--text)">
            Shows I showed up to. Shaky vertical video, a few photos, and
            whatever the artist was actually playing at that moment — linked so
            you can hear the studio version.
          </p>
        </header>

        {events.length === 0 ? (
          <p className="py-16 font-mono text-[13px] text-(--muted)">
            Nothing written up yet. Copy{" "}
            <code className="text-(--foreground)">
              src/content/events/_template.mdx
            </code>{" "}
            to get started.
          </p>
        ) : (
          years.map(([year, yearEvents]) => (
            <section key={year} className="border-b border-(--border) py-8">
              <div className="grid gap-6 md:grid-cols-[6rem_1fr]">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-(--muted) tabular-nums md:sticky md:top-24 md:self-start">
                  {year}
                </h2>

                <div className="divide-y divide-(--border)">
                  {yearEvents.map((event) => (
                    <Link
                      key={event.slug}
                      href={`/events/${event.slug}`}
                      className="group block py-5 first:pt-0"
                    >
                      <article className="grid gap-x-6 gap-y-2 md:grid-cols-[1fr_auto] md:items-baseline">
                        <div className="min-w-0">
                          <h3 className="text-xl leading-tight text-(--text) transition-colors group-hover:text-(--foreground) md:text-2xl">
                            {event.title}
                          </h3>

                          {event.lineup.length > 0 && (
                            <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-(--muted)">
                              {event.lineup.join(" · ")}
                            </p>
                          )}

                          {event.summary && (
                            <p className="mt-2 max-w-[60ch] font-mono text-[12px] leading-[1.75] text-(--text) opacity-70">
                              {event.summary}
                            </p>
                          )}
                        </div>

                        <div className="text-left md:text-right">
                          <p className="font-mono text-[11px] text-(--muted) tabular-nums">
                            {formatEventDate(event.date)}
                          </p>
                          {(event.venue || event.city) && (
                            <p className="mt-1 font-mono text-[11px] text-(--muted)">
                              {[event.venue, event.city]
                                .filter(Boolean)
                                .join(", ")}
                            </p>
                          )}
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ))
        )}
      </div>

      <div className="h-24 md:h-32" />
    </main>
  );
}
