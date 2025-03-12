interface IDownloadButtonProps {
  className?: string;
  type?: "submit" | "reset" | "button";
  variant?: "black" | "white";
  title: string;
  disabled?: boolean;
  href: string;
}

export function DownloadButton({
  className,
  title,
  type = "button",
  variant = "white",
  disabled,
  href,
}: IDownloadButtonProps) {
  function getButtonVariant(variant: string | undefined): string | undefined {
    switch (variant) {
      case "black": {
        return "border-[3px] border-secondary text-secondary hover:bg-secondary hover:text-primary ";
      }
      case "white": {
        return "border-[3px] border-primary text-primary hover:bg-primary hover:text-secondary";
      }
    }
  }

  return (
    <a href={href} download>
      <button
        title={title}
        type={type}
        disabled={disabled}
        className={`${getButtonVariant(
          variant
        )} duration-300 py-2 px-10 font-body ${
          disabled && "border-gray-400 text-gray-600"
        } ${className}`}
      >
        {title}
      </button>
    </a>
  );
}
