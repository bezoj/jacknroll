interface IButtonProps {
  className?: string;
  type?: "submit" | "reset" | "button";
  title: string;
  disabled?: boolean;
}

export function Button({
  className,
  title,
  type = "button",
  disabled,
}: IButtonProps) {
  return (
    <button
      title={title}
      type={type}
      disabled={disabled}
      className={`border-[3px] border-primary ${
        !disabled && "hover:bg-primary hover:text-secondary"
      }  duration-300 py-2 px-10 font-body ${
        disabled && "border-gray-400 text-gray-600"
      } ${className}`}
    >
      {title}
    </button>
  );
}
