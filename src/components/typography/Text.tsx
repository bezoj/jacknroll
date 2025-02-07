interface ITextProps {
  children: React.ReactNode;
  textVariant?: "title" | "subtitle" | "body" | "caption" | "body-bold";
  colorVariant?: "primary" | "secondary";
  className?: string;
  underlinedText?: boolean;
}

function getFontVariant(textVariant: string | undefined) {
  switch (textVariant) {
    case "title": {
      return "font-bold text-[50px]";
    }
    case "subtitle": {
      return "font-semibold text-[32px]";
    }
    case "body": {
      return "text-[18px]";
    }
    case "caption": {
      return "font-medium text-[16px]";
    }
    case "body-bold": {
      return "font-semibold text-[18px]";
    }
    default:
      return "font-normal";
  }
}

function getColorVariant(colorVariant: string | undefined) {
  switch (colorVariant) {
    case "primary": {
      return "text-primary";
    }
    case "secondary": {
      return "text-secondary";
    }
    default:
      return "text-primary";
  }
}

export function Text({
  children,
  textVariant,
  colorVariant,
  className,
  underlinedText,
}: ITextProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`font-body block ${
        underlinedText && "border-b-[4px]"
      } ${getFontVariant(textVariant)} ${className} ${getColorVariant(
        colorVariant
      )}`}
    >
      {children}
    </span>
  );
}
