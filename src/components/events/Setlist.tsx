import { parseSpotify } from "@/lib/spotify";

type Song =
  | string
  | {
      title: string;
      artist?: string;
      /** Spotify URL, URI, or bare ID. */
      spotify?: string;
      /** e.g. "opened with this", "unreleased" */
      note?: string;
    };

type Props = {
  tracks: Song[];
  /** Defaults to "setlist". Use e.g. "what I caught" for a partial list. */
  label?: string;
};

/**
 * A ruled, numbered list of songs. Deliberately link-only — a page with a
 * twenty-song setlist has no business mounting twenty Spotify iframes.
 */
export default function Setlist({ tracks, label = "setlist" }: Props) {
  if (!tracks || tracks.length === 0) return null;

  return (
    <section className="my-10 border border-(--border)">
      <h3 className="border-b border-(--border) px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-(--muted)">
        {label}
      </h3>

      <ol className="divide-y divide-(--border)">
        {tracks.map((entry, index) => {
          const song = typeof entry === "string" ? { title: entry } : entry;
          const ref = parseSpotify(song.spotify);

          return (
            <li
              key={`${song.title}-${index}`}
              className="grid grid-cols-[2rem_1fr_auto] items-baseline gap-3 px-4 py-2.5"
            >
              <span className="font-mono text-[11px] text-(--muted) tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span className="font-mono text-[13px] text-(--foreground)">
                  {song.title}
                </span>
                {song.artist && (
                  <span className="font-mono text-[13px] text-(--muted)">
                    {" "}
                    — {song.artist}
                  </span>
                )}
                {song.note && (
                  <span className="ml-2 font-serif text-[13px] italic text-(--muted)">
                    {song.note}
                  </span>
                )}
              </span>

              {ref && (
                <a
                  href={ref.openUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted) underline decoration-(--border) underline-offset-4 transition-colors hover:text-(--foreground) hover:decoration-(--foreground)"
                >
                  ↗
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
