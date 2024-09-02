import { FlexColumn } from "../containers";

interface ISectionProps {
  children?: React.ReactNode;
  className?: string;
}

export function Section({
  children,
  className,
}: ISectionProps & React.HTMLAttributes<HTMLSpanElement>) {
  return <FlexColumn className={`${className}`}>{children}</FlexColumn>;
}
