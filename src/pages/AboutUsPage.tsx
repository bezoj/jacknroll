import { Flex, FlexColumn, ImageCarousel } from "../components/containers";
import { Section } from "../components/page-sections";
import { Text } from "../components/typography";

export function AboutUspage() {
  return (
    <Section className="text-center gap-[80px] p-[50px]" bgColor="primary">
      <Text textVariant="title" colorVariant="secondary">
        O nas
      </Text>
      <Flex className="justify-between items-start w-full gap-[100px]">
        <FlexColumn className="flex-1 w-1/2 gap-[40px]">
          <Text textVariant="subtitle" colorVariant="secondary">
            O Bendu?
          </Text>
          <Text textVariant="body-bold" colorVariant="secondary">
            "... Smo klasični rokenrol bend iz okolice Ptuja, ki jih združuje
            ljubezen do glasbe."
          </Text>
          <Text textVariant="body" colorVariant="secondary">
            Smo slovenska glasbena rock skupina, ki na prizorišče prinese vsem
            znano slovensko, yugo in angleško glasbo ter zabava publiko do
            jutranjih ur. Skupina je primerna za nastopanje tako na večjih
            odprtih prizoriščih kot na rojstnodnevnih, barskih, klubskih oziroma
            zasebnih manjših dogodkih. Za posebne priložnosti oziroma po
            dogovoru pa ponujajo tudi...
          </Text>
        </FlexColumn>

        {/* Move Divider Down */}
        <FlexColumn className="self-stretch flex items-center">
          <hr className="border border-secondary h-full w-[2px]" />
        </FlexColumn>

        <FlexColumn className="flex-1 w-1/2 gap-[40px]">
          <Text textVariant="subtitle" colorVariant="secondary">
            Ke špilamo?
          </Text>
          <FlexColumn className="gap-[10px]">
            <Text textVariant="body-bold" colorVariant="secondary">
              Slovenska muzika:
            </Text>
            <Text textVariant="body" colorVariant="secondary">
              Mi2, Big foot mama, Siddharta, Vlado kreslin, Zablujena
              generacija, Mambo kings, ...
            </Text>
            <Text textVariant="body-bold" colorVariant="secondary">
              Yugo muzika:
            </Text>
            <Text textVariant="body" colorVariant="secondary">
              Parni valjak, Prljavo kazalište, Bijelo dugme, Crvena Jabuka,
              Zabranjeno pušenje, Partibrejkers, ...
            </Text>
            <Text textVariant="body-bold" colorVariant="secondary">
              Tuja muzika:
            </Text>
            <Text textVariant="body" colorVariant="secondary">
              Guns'n'Roses, AC/DC, Green day, Joe Cocker, Eric Clapton, ...
            </Text>
          </FlexColumn>
        </FlexColumn>
      </Flex>

      <ImageCarousel />
    </Section>
  );
}
