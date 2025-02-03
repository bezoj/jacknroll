import { FlexColumn, IFlexColumnProps } from "../containers";

interface ISectionProps extends IFlexColumnProps {
  children?: React.ReactNode;
  className?: string;
  bgColor?: string;
}

export function Section({
  children,
  className,
  bgColor = "secondary",
  ...rest
}: ISectionProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <FlexColumn className={`bg-${bgColor} p-4 ${className}`} {...rest}>
      {children}
    </FlexColumn>
  );
}
