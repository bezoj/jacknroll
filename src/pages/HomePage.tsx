import { SiteShell } from "@/layout/SiteShell";
import {
  AboutUsPage,
  ContactUsPage,
  GalleryPreviewSection,
  LandingPage,
  MembersPage,
} from "@/sections";

export function HomePage() {
  return (
    <SiteShell>
      <LandingPage />
      <MembersPage />
      <AboutUsPage />
      <GalleryPreviewSection />
      <ContactUsPage />
    </SiteShell>
  );
}
