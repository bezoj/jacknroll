import { FlexColumn } from "../containers";

interface IDividerProps {
  className?: string;
  borderColorVariant?: "primary" | "secondary";
}

export function ColumnDivider({
  className,
  borderColorVariant,
}: IDividerProps & React.HTMLAttributes<HTMLSpanElement>) {
  function getBorderColorVariant(
    borderColorVariant: string | undefined
  ): string {
    switch (borderColorVariant) {
      case "primary": {
        return "border-primary";
      }
      case "secondary": {
        return "border-secondary";
      }
      default:
        return "text-primary";
    }
  }

  return (
    <FlexColumn
      className={`hidden md:self-stretch md:flex md:items-center md:justify-center ${className}`}
    >
      <hr
        className={`${getBorderColorVariant(
          borderColorVariant
        )} border-[2px] h-full`}
      />
    </FlexColumn>
  );
}
