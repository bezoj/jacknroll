import { ImageCard } from "../components/cards";
import { Flex, FlexColumn } from "../components/containers";
import { Section } from "../components/page-sections";
import { Text } from "../components/typography";
import {
  BezoBanner,
  KatBanner,
  LukiBanner,
  StefBanner,
  TimcBanner,
} from "../assets";

export function MembersPage() {
  return (
    <Section className="text-center gap-[20px] py-[100px]">
      <Text textVariant="title" colorVariant="primary">
        Zasedba
      </Text>
      <FlexColumn>
        <Flex
          gap="20px"
          className="flex-col md:flex-row flex-wrap items-center justify-evenly"
        >
          <ImageCard
            imageUrl={BezoBanner}
            title="Jernej Bezjak"
            subtitle="Kitara, Vokal"
          />
          <ImageCard
            imageUrl={KatBanner}
            title="Katarina Vaupotič"
            subtitle="Sax, Vokal"
          />
          <ImageCard
            imageUrl={LukiBanner}
            title="Luka Gašparič"
            subtitle="Kitara"
          />
          <ImageCard
            imageUrl={StefBanner}
            title="Štefan Jakob Štrucl"
            subtitle="Bobni"
          />
          <ImageCard
            imageUrl={TimcBanner}
            title="Timotej Bezjak"
            subtitle="Bas, Tehnika"
          />
        </Flex>
      </FlexColumn>
    </Section>
  );
}
