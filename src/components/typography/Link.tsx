import { Text } from "./Text";

interface ILinkProps {
  children: React.ReactNode;
  textVariant?: "title" | "subtitle" | "body" | "caption";
  colorVariant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function Link({
  children,
  textVariant,
  colorVariant,
  className,
  onClick,
}: ILinkProps) {
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
