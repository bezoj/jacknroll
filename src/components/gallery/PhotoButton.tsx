import { bandPhotoStyle } from "@/lib/band-photo";
import { cn } from "@/lib/utils";
import type { LightboxImage } from "./Lightbox";

interface PhotoButtonProps {
  photo: LightboxImage;
  onClick: () => void;
  className?: string;
  priority?: boolean;
}

export function PhotoButton({
  photo,
  onClick,
  className,
  priority = false,
}: PhotoButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={photo.alt}
      className={cn(
        "group relative block cursor-zoom-in overflow-hidden border-0 bg-neutral-950 p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={bandPhotoStyle}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] group-focus-visible:scale-[1.045]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center bg-black font-display text-2xl leading-none text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        +
      </span>
    </button>
  );
}
