import { DownloadButton } from "../components/buttons";
import { Flex, FlexColumn } from "../components/containers";
import { Rider } from "../assets/files";
import { Section } from "../components/page-sections";
import { Text } from "../components/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { ColumnDivider } from "../components/dividers";
import { ContactUsForm } from "../features/forms";

export function ContactUsPage() {
  return (
    <Section
      className="text-center gap-[50px] p-[30px] md:p-[50px] items-center"
      bgColor="secondary"
      elementId="contact"
    >
      <Text textVariant="title" colorVariant="primary">
        Kontakt
      </Text>
      <Flex className="flex-col gap-[60px] md:flex-row md:justify-between md:w-full ">
        <FlexColumn className="md:flex-1 md:w-1/2 md:py-[200px] md:justify-center items-center gap-10 md:gap-[100px]">
          <FlexColumn className="justify-around items-center gap-4">
            <Text textVariant="subtitle">
              Piši nam če želiš pravo dozo rokenrola in mainstream muzike!
            </Text>
            <Text>
              Izpolni obrazec tukaj, ali pa nam piši ter sledi na socialnih
              omrežjih
            </Text>
            <Flex className="gap-4">
              <a href="https://www.instagram.com/_jacknroll_/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="black"
                  className="size-[40px] cursor-pointer"
                />
              </a>
              <a href="https://www.facebook.com/Jacknroll4">
                <FontAwesomeIcon
                  icon={faFacebook}
                  color="black"
                  className="size-[38px] cursor-pointer"
                />
              </a>
            </Flex>
          </FlexColumn>
          <FlexColumn className="gap-4">
            <Text textVariant="subtitle">Dokumenti za organizatorje</Text>
            <Text>Prenesi si tehnične in hospitality zahteve skupine</Text>
            <Flex className="gap-[20px] justify-center">
              {/* <DownloadButton title="Setlista" href={Setlist} /> */}
              <DownloadButton title="Rider" href={Rider} />
            </Flex>
          </FlexColumn>
        </FlexColumn>
        <ColumnDivider borderColorVariant="primary" />
        <ContactUsForm />
      </Flex>
    </Section>
  );
}
