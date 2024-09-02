interface IFlexProps {
  children: React.ReactNode;
  className?: string;
}

export function Flex({ children, className }: IFlexProps) {
  return <div className={`flex ${className}`}>{children}</div>;
}
