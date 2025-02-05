interface IImageContainerprops {
  imageUrl: string;
  className?: string;
  children?: React.ReactNode;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  imageOpacity?: "50" | "70" | "40";
  height?: string;
  width?: string;
  elementId?: string;
}

export function ImageContainer({
  imageUrl,
  className,
  children,
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "col",
  elementId,
}: IImageContainerprops) {
  return (
    <div
      id={elementId}
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`flex flex-${flexDirection} justify-${justifyContent} items-${alignItems} bg-landing bg-cover bg-center h-screen ${className}`}
    >
      {children}
    </div>
  );
}
