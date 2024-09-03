interface IFlexColumnProps {
  children: React.ReactNode;
  className?: string;
}

export function FlexColumn({
  children,
  className,
}: IFlexColumnProps & React.HTMLAttributes<HTMLSpanElement>) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}
