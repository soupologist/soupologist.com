import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import { eventComponents } from "@/components/events";
import { formatEventDate, getAllEvents, getEvent } from "@/lib/events";
import { mediaUrl } from "@/lib/media";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllEvents().map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) return { title: "Not found" };

  return {
    title: event.title,
    description:
      event.summary ??
      [event.lineup.join(", "), event.venue, event.city]
        .filter(Boolean)
        .join(" · "),
    openGraph: event.cover
      ? { images: [{ url: mediaUrl(event.cover) }] }
      : undefined,
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) notFound();

  const meta: [string, string][] = [
    ["date", formatEventDate(event.date)],
    ["venue", event.venue ?? ""],
    ["city", event.city ?? ""],
    ["lineup", event.lineup.join(", ")],
  ].filter((pair): pair is [string, string] => Boolean(pair[1]));

  return (
    <main className="px-4 md:px-8">
      <div className="pt-24 md:pt-32" />

      <article className="mx-auto max-w-3xl">
        <Link
          href="/events"
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-(--muted) transition-colors hover:text-(--foreground)"
        >
          ← events
        </Link>

        <header className="mt-6 border-b border-(--border) pb-6">
          <h1 className="font-humane text-[clamp(3.5rem,14vw,9rem)] font-bold uppercase leading-[0.82] tracking-[-0.01em] text-(--foreground)">
            {event.title}
          </h1>

          {/* Ruled metadata table — reads like a ticket stub. */}
          <dl className="mt-6 grid gap-px border border-(--border) bg-(--border) sm:grid-cols-2">
            {meta.map(([key, value]) => (
              <div key={key} className="bg-(--bg) px-3 py-2">
                <dt className="font-mono text-[9px] uppercase tracking-[0.25em] text-(--muted)">
                  {key}
                </dt>
                <dd className="mt-0.5 font-mono text-[12px] text-(--foreground)">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          {event.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted)"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {event.cover && (
          <div className="relative mt-8 aspect-3/2 border border-(--border)">
            <Image
              src={mediaUrl(event.cover)}
              alt={event.coverAlt ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              // The cover is the LCP element. `priority` is deprecated in
              // Next 16, and the docs prefer these two over `preload`.
              loading="eager"
              fetchPriority="high"
            />
          </div>
        )}

        <div className="mt-10">
          <MDXRemote
            source={event.content}
            components={{ ...mdxComponents, ...eventComponents }}
            options={{
              // next-mdx-remote v6 defaults to blockJS: true, which strips
              // every expression-valued JSX attribute — that would silently
              // drop `images={[...]}` and `tracks={[...]}`. These .mdx files
              // are first-party content in this repo, not untrusted remote
              // input, so expressions are fine. blockDangerousJS stays on by
              // default and still refuses eval/Function/process/require.
              blockJS: false,
            }}
          />
        </div>
      </article>

      <div className="h-24 md:h-32" />
    </main>
  );
}
