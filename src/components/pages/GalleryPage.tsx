import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, GalleryContainer } from "../containers";
import { Section } from "../page-sections";
import { Text } from "../typography";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { galleryImages } from "../../stores/galleryImages";
import { useEffect } from "react";

export function GalleryPage() {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Section
      bgColor="primary"
      className="justify-center items-center p-[30px] gap-[30px]"
    >
      <Flex className="bg-primary min-h-[150px] justify-between items-center sticky top-0 w-full m-auto">
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
      </Flex>
      <div>
        <GalleryContainer>
          {galleryImages.map((img) => (
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={img.src}
                alt=""
              />
            </div>
          ))}
        </GalleryContainer>
      </div>
    </Section>
  );
}
