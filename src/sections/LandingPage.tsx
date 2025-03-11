import { FlexColumn, ImageCarousel } from "../components/containers";
import { Text } from "../components/typography";
import { carouselLandingImages } from "../stores";

export function LandingPage() {
  return (
    <ImageCarousel
      elementId="band"
      className="items-center justify-center"
      items={carouselLandingImages}
    >
      <FlexColumn className="items-center justify-center text-center gap-[20px]">
        <Text colorVariant="secondary" textVariant="title">
          Pozdravljeni na naši spletni strani!
        </Text>
        <Text colorVariant="secondary" textVariant="subtitle">
          Smo skupina Jack'n'roll!
        </Text>
      </FlexColumn>
    </ImageCarousel>
  );
}
