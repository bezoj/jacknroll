import {
  BezoBanner,
  KatBanner,
  LukiBanner,
  StefBanner,
  TimcBanner,
} from "@/assets";
import { bandPhotoStyle } from "@/lib/band-photo";

const members = [
  {
    name: "Jernej Bezjak",
    role: "Kitara, Vokal",
    image: BezoBanner,
    alt: "Jernej Bezjak, kitara in vokal",
  },
  {
    name: "Katarina Bezjak",
    role: "Sax, Vokal",
    image: KatBanner,
    alt: "Katarina Bezjak, saksofon in vokal",
  },
  {
    name: "Luka Gašparič",
    role: "Kitara",
    image: LukiBanner,
    alt: "Luka Gašparič, kitara",
  },
  {
    name: "Štefan Jakob Štrucl",
    role: "Bobni",
    image: StefBanner,
    alt: "Štefan Jakob Štrucl, bobni",
  },
  {
    name: "Timotej Bezjak",
    role: "Bas, Tehnika",
    image: TimcBanner,
    alt: "Timotej Bezjak, bas in tehnika",
  },
];

export function MembersPage() {
  return (
    <section id="members" className="scroll-mt-24 border-t border-border">
      <div className="content-frame px-5 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <p className="font-condensed text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Zasedba
            </p>
            <h2 className="mt-3 font-display text-[clamp(4.2rem,9vw,7.5rem)] leading-[0.8]">
              Člani
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:text-right">
            Danes skupina šteje 5 članov.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-5">
          {members.map((member, index) => (
            <li key={member.name} className="group">
              <figure>
                <div className="overflow-hidden bg-neutral-950">
                  <img
                    src={member.image}
                    alt={member.alt}
                    loading="lazy"
                    decoding="async"
                    style={bandPhotoStyle}
                    className="aspect-[3/4] w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />
                </div>
                <figcaption className="mt-4 border-t border-border pt-3">
                  <p className="font-condensed text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-display text-[clamp(1.8rem,2vw,2.35rem)] leading-none">
                    {member.name}
                  </p>
                  <p className="mt-2 font-condensed text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {member.role}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
