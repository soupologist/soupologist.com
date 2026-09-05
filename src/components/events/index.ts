import Clip from "./Clip";
import Gallery from "./Gallery";
import Pull from "./Pull";
import Setlist from "./Setlist";
import SpotifyTrack from "./SpotifyTrack";

/**
 * Components available inside event .mdx files without importing them.
 * Merged with the shared prose components in the event page route.
 */
export const eventComponents = {
  Clip,
  Gallery,
  Pull,
  Setlist,
  SpotifyTrack,
};

export { Clip, Gallery, Pull, Setlist, SpotifyTrack };
