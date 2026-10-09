import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bandPhotoStyle } from "@/lib/band-photo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
}

export function Lightbox({ images, index, onIndexChange }: LightboxProps) {
  const image = index !== null ? images[index] : undefined;

  useEffect(() => {
    if (index === null || images.length === 0) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onIndexChange((index + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onIndexChange((index - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, index, onIndexChange]);

  const showPrevious = () => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
  };

  return (
    <Dialog
      open={index !== null}
      onOpenChange={(open) => {
        if (!open) onIndexChange(null);
      }}
    >
      <DialogContent className="left-0 top-0 flex h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 flex-col items-center justify-center gap-6 border-0 bg-black p-4 sm:p-8">
        <DialogTitle className="sr-only">
          {image?.alt ?? "Fotografija"}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {index !== null
            ? `Fotografija ${index + 1} od ${images.length}. Uporabi puščici levo in desno za premikanje.`
            : "Galerija fotografij"}
        </DialogDescription>
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            style={bandPhotoStyle}
            className="max-h-[74vh] w-auto max-w-full object-contain"
          />
        ) : null}
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={showPrevious}
            aria-label="Prejšnja fotografija"
          >
            <ChevronLeft />
          </Button>
          <p className="min-w-16 text-center font-condensed text-xs uppercase tracking-[0.2em]">
            {index !== null ? `${index + 1} / ${images.length}` : ""}
          </p>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={showNext}
            aria-label="Naslednja fotografija"
          >
            <ChevronRight />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
