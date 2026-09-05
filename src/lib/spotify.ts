/**
 * Spotify link handling — embed only, no API credentials required.
 *
 * Everything downstream works off a parsed { kind, id } pair rather than a raw
 * iframe URL, so if we ever add the Web API (Client Credentials, to pull album
 * art and durations at build time) it slots in here without touching content.
 */

export type SpotifyKind =
  | "track"
  | "album"
  | "playlist"
  | "artist"
  | "episode"
  | "show";

export type SpotifyRef = {
  kind: SpotifyKind;
  id: string;
  /** Opens the Spotify app / web player. */
  openUrl: string;
  /** iframe src for the official embed widget. */
  embedUrl: string;
};

const KINDS: SpotifyKind[] = [
  "track",
  "album",
  "playlist",
  "artist",
  "episode",
  "show",
];

/** Spotify IDs are base62, always 22 characters. */
const ID = /^[A-Za-z0-9]{22}$/;

/**
 * Accepts any of:
 *   3n3Ppam7vgaVa1iaRUc9Lp                              (bare id → track)
 *   spotify:track:3n3Ppam7vgaVa1iaRUc9Lp
 *   https://open.spotify.com/track/3n3Ppam...?si=abc
 *   https://open.spotify.com/intl-de/track/3n3Ppam...    (localised path)
 *
 * Returns null on anything unrecognised so a typo in frontmatter degrades to
 * "no track shown" instead of a broken iframe.
 */
export function parseSpotify(input: string | undefined | null): SpotifyRef | null {
  if (!input) return null;

  const raw = input.trim();
  if (!raw) return null;

  let kind: SpotifyKind | null = null;
  let id: string | null = null;

  if (ID.test(raw)) {
    kind = "track";
    id = raw;
  } else if (raw.startsWith("spotify:")) {
    const parts = raw.split(":");
    const maybeKind = parts[1] as SpotifyKind;
    if (KINDS.includes(maybeKind) && ID.test(parts[2] ?? "")) {
      kind = maybeKind;
      id = parts[2];
    }
  } else if (raw.includes("open.spotify.com")) {
    let url: URL;
    try {
      url = new URL(raw);
    } catch {
      return null;
    }
    // Drop any leading locale segment such as `intl-de`.
    const segments = url.pathname.split("/").filter(Boolean);
    const start = segments[0]?.startsWith("intl-") ? 1 : 0;
    const maybeKind = segments[start] as SpotifyKind;
    const maybeId = segments[start + 1];
    if (KINDS.includes(maybeKind) && ID.test(maybeId ?? "")) {
      kind = maybeKind;
      id = maybeId;
    }
  }

  if (!kind || !id) return null;

  return {
    kind,
    id,
    openUrl: `https://open.spotify.com/${kind}/${id}`,
    // theme=0 is the dark widget, which is the only one that sits well on #0d0d0d.
    embedUrl: `https://open.spotify.com/embed/${kind}/${id}?utm_source=generator&theme=0`,
  };
}

/** Compact embeds (80px tall) only exist for tracks and episodes. */
export function embedHeight(kind: SpotifyKind): number {
  return kind === "track" || kind === "episode" ? 80 : 152;
}
