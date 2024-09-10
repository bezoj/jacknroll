import { FlexColumn, IFlexColumnProps } from "../containers";

interface ISectionProps extends IFlexColumnProps {
  children?: React.ReactNode;
  className?: string;
}

export function Section({
  children,
  className,
  ...rest
}: ISectionProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <FlexColumn className={`bg-secondary p-4 ${className}`} {...rest}>
      {children}
    </FlexColumn>
  );
}
