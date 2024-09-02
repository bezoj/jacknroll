import Landing from "../assets/landing-banner.jpg";
import { FlexColumn } from "../components/containers";
import { ImageContainer } from "../components/containers/ImageContainer";
import { Text } from "../components/typography";

export function LandingPage() {
  return (
    <ImageContainer imageUrl={Landing}>
      <FlexColumn className="items-center justify-center">
        <Text colorVariant="secondary">bla bla</Text>
      </FlexColumn>
    </ImageContainer>
  );
}
