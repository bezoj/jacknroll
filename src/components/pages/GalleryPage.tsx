import { useState } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Lightbox } from "@/components/gallery/Lightbox";
import { PhotoButton } from "@/components/gallery/PhotoButton";
import { withAlt } from "@/lib/photos";
import { galleryImages } from "@/stores/galleryImages";
import { cn } from "@/lib/utils";

export function GalleryPage() {
  const photos = withAlt(galleryImages, "Fotografija z nastopa Jack 'n' Roll");
  const [index, setIndex] = useState<number | null>(null);

  return (
    <SiteShell title="Galerija">
      <div className="content-frame px-5 pb-20 pt-12 md:px-10 md:pt-16 lg:px-14">
        <p className="font-condensed text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Fotografije
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h1 className="font-display text-[clamp(4.5rem,12vw,8.5rem)] leading-[0.8]">
            Galerija
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:pb-3 md:text-base">
            Nekaj utrinkov iz različnih špilov, čag, fešt...
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4">
          {photos.map((photo, photoIndex) => {
            const feature = photoIndex % 9 === 0;
            return (
              <PhotoButton
                key={`${photo.src}-${photoIndex}`}
                photo={photo}
                priority={photoIndex < 2}
                onClick={() => setIndex(photoIndex)}
                className={cn(
                  feature ? "col-span-2 aspect-[16/10]" : "aspect-[3/4]"
                )}
              />
            );
          })}
        </div>
      </div>
      <Lightbox images={photos} index={index} onIndexChange={setIndex} />
    </SiteShell>
  );
}
