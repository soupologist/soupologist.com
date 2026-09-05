"use client";

import { useEffect, useRef } from "react";
import { mediaUrl } from "@/lib/media";
import SpotifyTrack from "./SpotifyTrack";

type Orientation = "portrait" | "landscape" | "square";

type Props = {
  /** Repo-relative path (`/videos/events/…`) or absolute CDN URL. */
  src: string;
  /** Poster frame. Strongly recommended — without one the player is a black box until it buffers. */
  poster?: string;
  caption?: string;
  /** Phone footage is almost always portrait, so that's the default. */
  orientation?: Orientation;
  /** Spotify URL, URI, or bare ID for the song being played in the clip. */
  track?: string;
  trackTitle?: string;
  trackArtist?: string;
  /** Set when the clip has no meaningful audio, e.g. a silent pan of the crowd. */
  silent?: boolean;
};

const ASPECT: Record<Orientation, string> = {
  portrait: "aspect-9/16 max-w-[360px]",
  landscape: "aspect-video w-full",
  square: "aspect-square max-w-[520px]",
};

/**
 * Every mounted clip on the page. Concert clips are loud; two playing at once
 * is the fastest way to make someone close the tab.
 */
const players = new Set<HTMLVideoElement>();

export default function Clip({
  src,
  poster,
  caption,
  orientation = "portrait",
  track,
  trackTitle,
  trackArtist,
  silent = false,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    players.add(el);
    return () => {
      players.delete(el);
    };
  }, []);

  const pauseOthers = () => {
    for (const other of players) {
      if (other !== videoRef.current) other.pause();
    }
  };

  return (
    <figure className="my-10">
      <div className={`${ASPECT[orientation]} relative border border-(--border) bg-black`}>
        <video
          ref={videoRef}
          onPlay={pauseOthers}
          className="h-full w-full object-cover"
          src={mediaUrl(src)}
          poster={poster ? mediaUrl(poster) : undefined}
          controls
          // Fetch dimensions + first frame only; the file itself waits for a click.
          preload="metadata"
          playsInline
          muted={silent}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <figcaption className="mt-3 max-w-[52ch]">
        {caption && (
          <p className="font-mono text-[12px] leading-[1.7] text-(--text)">
            {caption}
          </p>
        )}

        <SpotifyTrack url={track} title={trackTitle} artist={trackArtist} />
      </figcaption>
    </figure>
  );
}
