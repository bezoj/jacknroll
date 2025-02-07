import { Link } from "react-scroll";
import { Flex, FlexColumn } from "../containers";
import { ColumnDivider } from "../dividers";
import { Text } from "../typography";
import { menuItems } from "./dropdown-menu";
import { Section } from "./Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <Section className="py-[100px]" bgColor="primary">
      <Flex className="justify-evenly">
        <FlexColumn className="gap-[30px]">
          <Text textVariant="subtitle" colorVariant="secondary">
            Strani
          </Text>
          <FlexColumn className="gap-3">
            {menuItems.map((item, index) => (
              <Link
                spy={true}
                to={item.id}
                duration={200}
                activeClass="active"
                offset={-100}
              >
                <Text
                  key={`${item.label}-${index}`}
                  colorVariant="secondary"
                  textVariant="body"
                  className="hover:bg-secondary hover:text-primary cursor-pointer active:border-b-2 active:border-secondary"
                >
                  {item.label}
                </Text>
              </Link>
            ))}
          </FlexColumn>
        </FlexColumn>
        <ColumnDivider />
        <FlexColumn className="gap-[30px]">
          <Text textVariant="subtitle" colorVariant="secondary">
            Strani
          </Text>
          <FlexColumn className="gap-3">
            {menuItems.map((item, index) => (
              <Link
                spy={true}
                to={item.id}
                duration={200}
                activeClass="active"
                offset={-100}
              >
                <Text
                  key={`${item.label}-${index}`}
                  colorVariant="secondary"
                  textVariant="body"
                  className="hover:bg-secondary hover:text-primary cursor-pointer active:border-b-2 active:border-secondary"
                >
                  {item.label}
                </Text>
              </Link>
            ))}
          </FlexColumn>
        </FlexColumn>
        <ColumnDivider />
        <FlexColumn className="gap-[30px]">
          <Text colorVariant="secondary" textVariant="subtitle">
            Kontakt
          </Text>
          <FlexColumn className="gap-3">
            <Flex className="gap-3 items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-secondary self-center "
              />
              <Text colorVariant="secondary">068678248</Text>
            </Flex>
            <Flex className="gap-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-secondary self-center"
              />
              <Text colorVariant="secondary">jackroll@gmail.com</Text>
            </Flex>
            <Flex className="justify-start gap-3">
              <a href="https://www.instagram.com/_jacknroll_/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="white"
                  className="size-8 cursor-pointer"
                />
              </a>
              <a href="https://www.facebook.com/Jacknroll4">
                <FontAwesomeIcon
                  icon={faFacebook}
                  color="white"
                  className="size-8 cursor-pointer"
                />
              </a>
            </Flex>
          </FlexColumn>
        </FlexColumn>
      </Flex>
    </Section>
  );
}
