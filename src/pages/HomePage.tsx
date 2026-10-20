import { ArtistMarquee } from "@/features/artists";
import { SiteShell } from "@/layout/SiteShell";
import {
  AboutUsPage,
  ContactUsPage,
  GalleryPreviewSection,
  MembersPage,
} from "@/sections";
import { BandFacts } from "@/sections/BandFacts";
import { HeroSection } from "@/sections/HeroSection";

export function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <BandFacts />
      <ArtistMarquee />
      <MembersPage />
      <AboutUsPage />
      <GalleryPreviewSection />
      <ContactUsPage />
    </SiteShell>
  );
}
