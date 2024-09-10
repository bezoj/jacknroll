interface IFlexProps {
  children: React.ReactNode;
  className?: string;
  gap?: string;
}

export function Flex({
  children,
  className,
  gap,
}: IFlexProps & React.HTMLAttributes<HTMLSpanElement>) {
  return <div className={`flex gap-[${gap}] ${className}`}>{children}</div>;
}
