import { Text } from "./Text";

interface IImgLinkProps {
  children: React.ReactNode;
  textVariant?: "title" | "subtitle" | "body" | "caption";
  colorVariant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function ImgLink({
  children,
  textVariant,
  colorVariant,
  className,
  onClick,
}: IImgLinkProps) {
  return (
    <Text
      textVariant={textVariant}
      colorVariant={colorVariant}
      className={`cursor-pointer transition hover:text-gray-400 ${className}`}
      onClick={onClick}
    >
      {children}
    </Text>
  );
}
