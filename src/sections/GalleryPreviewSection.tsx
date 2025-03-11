import { GalleryContainer } from "../components/containers";
import { Section } from "../components/page-sections";
import { Text } from "../components/typography";
import { galleryPreviewImages } from "../stores/galleryImages";

export function GalleryPreviewSection() {
  return (
    <Section className="text-center p-[30px] md:p-[100px]" bgColor="primary">
      <Text textVariant="title" colorVariant="secondary">
        V elementu
      </Text>
      <GalleryContainer>
        {galleryPreviewImages.map((img) => (
          <div className="w-full">
            <img
              className="object-cover h-full max-w-full"
              src={img.src}
              alt=""
            />
          </div>
        ))}
      </GalleryContainer>
    </Section>
  );
}
