import { Text } from "../typography";

interface IImageCardProps {
  imageUrl: string;
  height?: string;
  width?: string;
  title?: string;
  subtitle?: string;
}

export function ImageCard({
  imageUrl,
  title,
  subtitle,
  height,
  width,
}: IImageCardProps) {
  return (
    <div
      className={`relative grid h-[400px] w-full max-w-[300px] flex-col items-end justify-center overflow-hidden bg-white bg-clip-border text-center text-gray-700 shadow-custom1`}
      style={{ height, maxWidth: width }}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
      >
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative px-4 py-6 md:px-6 text-center">
        <Text textVariant="subtitle" colorVariant="secondary">
          {title}
        </Text>
        <Text textVariant="caption" colorVariant="secondary">
          {subtitle}
        </Text>
      </div>
    </div>
  );
}
