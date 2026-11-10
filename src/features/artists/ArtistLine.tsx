import { artists } from "./consts";

export function ArtistLine() {
  return (
    <span className="flex shrink-0 items-center">
      {artists.map((name) => (
        <span key={name} className="flex items-center">
          <span className="px-5 font-display text-[clamp(1.8rem,3.6vw,3.2rem)] leading-none tracking-wide md:px-7">
            {name}
          </span>
          <span aria-hidden="true" className="text-foreground/35">
            ·
          </span>
        </span>
      ))}
    </span>
  );
}
