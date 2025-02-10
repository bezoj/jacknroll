import { ImageCarousel } from "../components/containers";
import { Section } from "../components/page-sections";

export function ImageCarouselSection() {
  return (
    <Section bgColor="primary" className="p-0">
      <ImageCarousel />
    </Section>
  );
}
