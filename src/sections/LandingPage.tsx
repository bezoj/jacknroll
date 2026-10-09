import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { bandPhotoStyle } from "@/lib/band-photo";
import { carouselLandingImages } from "@/stores";

const facts = [
  { value: "2018", label: "od leta" },
  { value: "100+", label: "špilov" },
  { value: "5", label: "članov" },
];

const artists = [
  "Mi2",
  "Big foot mama",
  "Siddharta",
  "Vlado kreslin",
  "Zablujena generacija",
  "Mambo kings",
  "Parni valjak",
  "Prljavo kazalište",
  "Bijelo dugme",
  "Crvena Jabuka",
  "Zabranjeno pušenje",
  "Partibrejkers",
  "Dubioza kolektiv",
  "Guns'n'Roses",
  "AC/DC",
  "Green day",
  "Joe Cocker",
  "Eric Clapton",
];

function ArtistLine() {
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

export function LandingPage() {
  const hero = carouselLandingImages[0];

  return (
    <>
      <section
        id="band"
        className="relative -mt-16 min-h-[100svh] scroll-mt-[-5rem] overflow-hidden lg:-mt-[4.5rem]"
      >
        <img
          src={hero.src}
          alt={hero.alt ?? "Jack 'n' Roll na odru"}
          fetchPriority="high"
          decoding="async"
          style={bandPhotoStyle}
          className="hero-drift absolute inset-0 h-full w-full object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pb-16 pt-16 text-center text-white lg:pt-[4.5rem]">
          <p className="font-condensed text-xs uppercase tracking-[0.42em] text-white/80">
            Ptuj · od 2018
          </p>
          <span className="mt-6 block h-px w-14 bg-white/80" />
          <h1 className="mt-6 font-display text-[clamp(4.6rem,13vw,11.5rem)] leading-[0.78] [text-shadow:0_10px_40px_rgba(0,0,0,0.45)]">
            <span className="sr-only">Jack &apos;n&apos; Roll. </span>
            Klasični
            <span className="mt-1 block">rokenrol</span>
          </h1>
          <span className="mt-6 block h-px w-14 bg-white/80" />
          <p className="mt-6 font-condensed text-sm uppercase tracking-[0.28em] text-white/85 md:text-base">
            Bend iz okolice Ptuja
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/85"
            >
              <a href="#contact">Piši nam</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-black/40 text-white hover:bg-white hover:text-black"
            >
              <Link to="/gallery">Galerija</Link>
            </Button>
          </div>
        </div>
        <a
          href="#members"
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
          aria-label="Naprej na člane"
        >
          <span className="relative block h-12 w-px overflow-hidden bg-white/25">
            <span className="scroll-cue absolute inset-0 bg-white" />
          </span>
        </a>
      </section>

      <div className="border-b border-border">
      <ul className="content-frame grid grid-cols-3">
        {facts.map((fact) => (
          <li
            key={fact.label}
            className="border-r border-border px-4 py-8 last:border-r-0 sm:px-8 md:py-12 lg:px-14"
          >
            <p className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-none">
              {fact.value}
            </p>
            <p className="mt-2 font-condensed text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:text-xs">
              {fact.label}
            </p>
          </li>
        ))}
      </ul>
      </div>

      <div className="overflow-hidden border-b border-border py-4 md:py-5">
        <p className="sr-only">
          Repertoar: {artists.join(", ")}
        </p>
        <div className="band-marquee flex w-max" aria-hidden="true">
          <ArtistLine />
          <ArtistLine />
        </div>
      </div>
    </>
  );
}
