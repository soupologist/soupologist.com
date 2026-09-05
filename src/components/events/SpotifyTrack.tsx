"use client";

import { useState } from "react";
import { embedHeight, parseSpotify } from "@/lib/spotify";

type Props = {
  /** Spotify URL, URI, or bare 22-char ID. */
  url?: string;
  /** Shown before the embed is loaded. Falls back to the Spotify widget's own text. */
  title?: string;
  artist?: string;
};

/**
 * A track credit that stays in the site's palette until you ask for the player.
 *
 * Spotify's iframe is ~1MB of third-party JS and paints its own green chrome,
 * so mounting one per clip would wreck both load time and the look of the page.
 * Collapsed, this is just ruled mono text; the widget mounts on click.
 */
export default function SpotifyTrack({ url, title, artist }: Props) {
  const [open, setOpen] = useState(false);
  const ref = parseSpotify(url);

  // Unparseable or absent link — still show the credit if we have one.
  if (!ref) {
    if (!title && !artist) return null;
    return (
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-(--muted)">
        {[title, artist].filter(Boolean).join(" / ")}
      </p>
    );
  }

  return (
    <div className="mt-3 border-t border-(--border) pt-3">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-(--muted)">
            {ref.kind === "track" ? "the song" : ref.kind}
          </p>

          {(title || artist) && (
            <p className="mt-1 truncate font-mono text-[13px] text-(--foreground)">
              {title}
              {title && artist && (
                <span className="text-(--muted)"> — {artist}</span>
              )}
              {!title && artist}
            </p>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="cursor-pointer font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted) underline decoration-(--border) underline-offset-4 transition-colors hover:text-(--foreground) hover:decoration-(--foreground)"
          >
            {open ? "hide player" : "play here"}
          </button>

          <a
            href={ref.openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted) underline decoration-(--border) underline-offset-4 transition-colors hover:text-(--foreground) hover:decoration-(--foreground)"
          >
            spotify ↗
          </a>
        </div>
      </div>

      {open && (
        <div className="mt-3">
          <iframe
            src={ref.embedUrl}
            title={
              title ? `Spotify player: ${title}` : "Spotify player"
            }
            height={embedHeight(ref.kind)}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="w-full border border-(--border)"
          />
        </div>
      )}
    </div>
  );
}
