interface IImageContainerprops {
  imageUrl: string;
  className?: string;
  children?: React.ReactNode;
}

export function ImageContainer({
  imageUrl,
  className,
  children,
}: IImageContainerprops) {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`flex flex-col justify-center items-center bg-landing bg-cover bg-center h-screen ${className}`}
    >
      {children}
    </div>
  );
}
