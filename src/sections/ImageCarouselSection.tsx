import { ImageCarousel } from "../components/containers";
import { Section } from "../components/page-sections";
import { carouselLandingImages } from "../stores";

export function ImageCarouselSection() {
  return (
    <Section bgColor="primary" className="p-0">
      <ImageCarousel items={carouselLandingImages} />
    </Section>
  );
}
