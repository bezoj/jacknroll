import { useState } from "react";
import { Link } from "react-router-dom";
import { Lightbox } from "@/components/gallery/Lightbox";
import { PhotoButton } from "@/components/gallery/PhotoButton";
import { Button } from "@/components/ui/button";
import { withAlt } from "@/lib/photos";
import { galleryPreviewImages } from "@/stores/galleryImages";

const layouts = [
  "sm:col-span-4 sm:row-span-2 min-h-[280px] sm:min-h-full",
  "sm:col-span-2 min-h-[220px]",
  "sm:col-span-2 min-h-[220px]",
  "sm:col-span-2 min-h-[200px]",
  "sm:col-span-2 min-h-[200px]",
  "sm:col-span-2 min-h-[200px]",
];

export function GalleryPreviewSection() {
  const photos = withAlt(galleryPreviewImages, "Utrinek z nastopa Jack 'n' Roll");
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section className="scroll-mt-24 border-t border-border" aria-labelledby="gallery-preview-title">
      <div className="content-frame px-5 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mb-10 flex flex-col justify-between gap-8 md:mb-14 md:flex-row md:items-end">
          <h2
            id="gallery-preview-title"
            className="font-display text-[clamp(3.6rem,8vw,7rem)] leading-[0.82]"
          >
            Na kraju
            <br />
            zločina...
          </h2>
          <div className="max-w-sm md:pb-2">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Nekaj utrinkov iz različnih špilov, čag, fešt...
            </p>
            <Button variant="outline" className="mt-6" asChild>
              <Link to="/gallery">Pojdi na galerijo</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-6 md:gap-3">
          {photos.map((photo, photoIndex) => (
            <PhotoButton
              key={photo.src}
              photo={photo}
              priority={photoIndex === 0}
              onClick={() => setIndex(photoIndex)}
              className={layouts[photoIndex] ?? "min-h-[200px]"}
            />
          ))}
        </div>
      </div>
      <Lightbox images={photos} index={index} onIndexChange={setIndex} />
    </section>
  );
}
