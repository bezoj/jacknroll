import { ArtistLine } from "./ArtistLine";
import { artists } from "./consts";

export function ArtistMarquee() {
  return (
    <div className="overflow-hidden border-b border-border py-4 md:py-5">
      <p className="sr-only">Repertoar: {artists.join(", ")}</p>
      <div className="band-marquee flex w-max" aria-hidden="true">
        <ArtistLine />
        <ArtistLine />
      </div>
    </div>
  );
}
