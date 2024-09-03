interface IImageContainerprops {
  imageUrl: string;
  className?: string;
  children?: React.ReactNode;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  imageOpacity?: "50" | "70" | "40";
}

export function ImageContainer({
  imageUrl,
  className,
  children,
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "col",
  imageOpacity = "50",
}: IImageContainerprops) {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`flex flex-${flexDirection} justify-${justifyContent} items-${alignItems} bg-landing bg-cover bg-center h-screen ${className}`}
    >
      <div
        className={`absolute inset-0 bg-black opacity-${imageOpacity} z-1`}
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
