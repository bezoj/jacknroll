import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, GalleryContainer } from "../containers";
import { Section } from "../page-sections";
import { Text } from "../typography";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function GalleryPage() {
  return (
    <Section
      bgColor="primary"
      className="justify-center items-center p-[50px] gap-[50px]"
    >
      <Flex className="bg-primary min-h-[100px] justify-between items-center sticky top-0 w-full m-auto">
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeft}
            color="white"
            className="text-2xl"
          />
        </Link>
        <Text
          textVariant="title"
          colorVariant="secondary"
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          Galerija
        </Text>
        <div className="w-6"></div>
      </Flex>
      <div>
        <GalleryContainer />
      </div>
    </Section>
  );
}
