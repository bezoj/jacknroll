export interface IFlexColumnProps {
  children?: React.ReactNode;
  className?: string;
  gap?: string;
  elementId?: string;
}

export function FlexColumn({
  children,
  className,
  gap,
  elementId,
}: IFlexColumnProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <div id={elementId} className={`flex flex-col gap-[${gap}] ${className}`}>
      {children}
    </div>
  );
}
