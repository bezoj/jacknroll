interface ITextProps {
  children: React.ReactNode;
  textVariant?: "title" | "subtitle" | "body" | "caption";
  colorVariant?: "primary" | "secondary";
  className?: string;
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
      return "font-medium text-[18px]";
    }
    case "caption": {
      return "font-medium text-[16px]";
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
}: ITextProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`font-body ${getFontVariant(
        textVariant
      )} ${className} ${getColorVariant(colorVariant)}`}
    >
      {children}
    </span>
  );
}
