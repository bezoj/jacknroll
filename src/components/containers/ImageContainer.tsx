interface IImageContainerprops {
  imageUrl: string;
  className?: string;
  children?: React.ReactNode;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
}

export function ImageContainer({
  imageUrl,
  className,
  children,
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "col",
}: IImageContainerprops) {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`flex flex-${flexDirection} justify-${justifyContent} items-${alignItems} bg-landing bg-cover bg-center h-screen ${className}`}
    >
      {children}
    </div>
  );
}
