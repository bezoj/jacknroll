import { ArtistMarquee } from "@/features/artists";
import { BandFacts } from "./BandFacts";
import { HeroSection } from "./HeroSection";

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <BandFacts />
      <ArtistMarquee />
    </>
  );
}
