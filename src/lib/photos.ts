import type { IImage } from "@/types/interfaces";
import type { LightboxImage } from "@/components/gallery/Lightbox";

export function withAlt(images: IImage[], label: string): LightboxImage[] {
  return images.map((image, index) => ({
    src: image.src,
    alt: image.alt?.trim() ? image.alt : `${label} ${index + 1}`,
  }));
}
