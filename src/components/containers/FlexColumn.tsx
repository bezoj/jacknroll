export interface IFlexColumnProps {
  children?: React.ReactNode;
  className?: string;
  gap?: string;
}

export function FlexColumn({
  children,
  className,
  gap,
}: IFlexColumnProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <div className={`flex flex-col gap-[${gap}] ${className}`}>{children}</div>
  );
}
