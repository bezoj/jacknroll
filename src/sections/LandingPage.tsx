import { LandingBanner } from "../assets";
import { FlexColumn } from "../components/containers";
import { ImageContainer } from "../components/containers/ImageContainer";
import { Text } from "../components/typography";

export function LandingPage() {
  return (
    <ImageContainer elementId="band" imageUrl={LandingBanner}>
      <FlexColumn className="items-center justify-center text-center gap-[20px]">
        <Text colorVariant="secondary" textVariant="title">
          Pozdravljeni na naši spletni strani!
        </Text>
        <Text colorVariant="secondary" textVariant="subtitle">
          Smo skupina Jack'n'roll!
        </Text>
      </FlexColumn>
    </ImageContainer>
  );
}
