import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { bandPhotoStyle } from "@/lib/band-photo";
import { carouselLandingImages } from "@/stores";
import { slideIntervalMs } from "./consts/landing";

export function HeroSection() {
  const [slide, setSlide] = useState({ current: 0, previous: 0 });

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches || carouselLandingImages.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setSlide((currentSlide) => ({
        previous: currentSlide.current,
        current: (currentSlide.current + 1) % carouselLandingImages.length,
      }));
    }, slideIntervalMs);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="band"
      className="relative -mt-16 min-h-[100svh] scroll-mt-[-5rem] overflow-hidden lg:-mt-[4.5rem]"
    >
      <div className="absolute inset-0 isolate">
        {carouselLandingImages.map((image, index) => {
          const isCurrent = index === slide.current;
          const isVisible = isCurrent || index === slide.previous;

          return (
            <img
              key={image.src}
              src={image.src}
              alt={index === 0 ? (image.alt ?? "Jack 'n' Roll na odru") : ""}
              fetchPriority={index === 0 ? "high" : "low"}
              decoding="async"
              aria-hidden={index !== 0}
              style={{
                ...bandPhotoStyle,
                zIndex: isCurrent ? 1 : 0,
              }}
              className={`hero-drift absolute inset-0 h-full w-full object-cover object-[center_42%] ${
                isVisible ? "opacity-100" : "opacity-0"
              } ${isCurrent ? "transition-opacity duration-500 ease-in-out" : ""}`}
            />
          );
        })}
      </div>
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
  );
}
