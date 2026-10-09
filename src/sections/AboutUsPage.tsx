import { bandPhotoStyle } from "@/lib/band-photo";
import { carouselLandingImages } from "@/stores";

const repertoire = [
  {
    title: "Slovenska muzika",
    artists:
      "Mi2, Big foot mama, Siddharta, Vlado kreslin, Zablujena generacija, Mambo kings, ...",
  },
  {
    title: "Yugo muzika",
    artists:
      "Parni valjak, Prljavo kazalište, Bijelo dugme, Crvena Jabuka, Zabranjeno pušenje, Partibrejkers, Dubioza kolektiv ...",
  },
  {
    title: "Tuja muzika",
    artists: "Guns'n'Roses, AC/DC, Green day, Joe Cocker, Eric Clapton, ...",
  },
];

export function AboutUsPage() {
  const liveShot = carouselLandingImages[1];
  const groupShot = carouselLandingImages[2];

  return (
    <section id="about-us" className="scroll-mt-24 border-t border-border">
      <div className="content-frame grid lg:grid-cols-12">
        <div className="px-5 py-16 md:px-10 lg:col-span-4 lg:px-14 lg:py-24">
          <p className="font-condensed text-xs uppercase tracking-[0.28em] text-muted-foreground">
            O nas
          </p>
          <h2 className="mt-4 font-display text-[clamp(4rem,7vw,6.75rem)] leading-[0.82]">
            Nekaj
            <br />
            o nas
          </h2>
          <p className="mt-8 font-condensed text-lg tracking-wide">O Bendu?</p>
        </div>

        <div className="space-y-6 px-5 pb-16 md:px-10 lg:col-span-8 lg:px-14 lg:py-24">
          <p className="max-w-3xl text-2xl font-medium italic leading-snug md:text-3xl">
            &ldquo;... Smo klasični rokenrol bend iz okolice Ptuja, katere
            združuje ljubezen do glasbe...&rdquo;
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/85 md:text-lg">
            Smo slovenska glasbena rock skupina, ki na prizorišče prinese vsem
            znano slovensko, yugo in angleško glasbo ter zabava publiko do
            jutranjih ur. Nastopamo tako na večjih odprtih prizoriščih kot na
            rojstnodnevnih, barskih, klubskih oziroma zasebnih manjših dogodkih.
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/85 md:text-lg">
            Skupina deluje že od leta 2018. Skozi ta leta so odigrali že več kot
            100 različnih špilov, prav tako pa se je v teh letih spreminjala
            tudi podoba benda. Zaradi vse večje želje po širjenju repertuarja na
            druge glasbene zvrsti se je bendu leta 2020 pridružila Katarina
            Bezjak na saksofonu. Prav tako so se menjali nekateri člani skupine
            in danes skupina šteje 5 članov, ki radi preigravajo vsem znane
            slovenske ter tuje rock, hard rock ter pop-rock hite, seveda pa se
            na repertoarju znajdejo tudi kakšni alternativni komadi.
          </p>
        </div>
      </div>

      <div className="grid border-t border-border md:grid-cols-5">
        <figure className="group overflow-hidden md:col-span-3">
          <img
            src={liveShot.src}
            alt={liveShot.alt}
            loading="lazy"
            decoding="async"
            style={bandPhotoStyle}
            className="h-[42vh] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] md:h-[58vh]"
          />
        </figure>
        <figure className="group overflow-hidden border-t border-border md:col-span-2 md:border-l md:border-t-0">
          <img
            src={groupShot.src}
            alt={groupShot.alt}
            loading="lazy"
            decoding="async"
            style={bandPhotoStyle}
            className="h-[42vh] w-full object-cover object-[center_40%] transition-transform duration-700 ease-out group-hover:scale-[1.04] md:h-[58vh]"
          />
        </figure>
      </div>

      <div className="border-t border-border">
        <div className="content-frame">
        <div className="px-5 py-12 md:px-10 lg:px-14">
          <h3 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none">
            Ke špilamo?
          </h3>
        </div>
        <div className="grid border-t border-border md:grid-cols-3">
          {repertoire.map((group) => (
            <div
              key={group.title}
              className="border-b border-border px-5 py-10 last:border-b-0 md:border-b-0 md:border-r md:px-10 md:py-14 md:last:border-r-0 lg:px-14"
            >
              <h4 className="font-condensed text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {group.title}
              </h4>
              <p className="mt-4 text-lg leading-relaxed">{group.artists}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
