interface IButtonProps {
  className?: string;
  type?: "submit" | "reset" | "button";
  title: string;
}

export function Button({ className, title, type = "button" }: IButtonProps) {
  return (
    <button
      title={title}
      type={type}
      className={`border-[3px] border-primary hover:bg-primary hover:text-secondary  duration-300 py-2 px-10 font-body ${className}`}
    >
      {title}
    </button>
  );
}
