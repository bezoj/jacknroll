import { forwardRef } from "react";
import { Flex } from "../containers";
import { Text } from "../typography";

interface ITextAreaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  title?: string;
  containerProps?: string;
  errors?: string;
}

export const TextAreaInput = forwardRef<
  HTMLTextAreaElement,
  ITextAreaInputProps
>(({ className, title, containerProps, errors, ...rest }, ref) => {
  return (
    <div className={`flex flex-col gap-1 ${containerProps}`}>
      {title && (
        <Flex>
          <Text textVariant="body-bold">{title}</Text>
        </Flex>
      )}
      <textarea
        ref={ref}
        className={`border-b-[3px] font-body bg-gray-200 border-primary px-2 py-3 ${className}`}
        {...rest}
      />
      {errors && <Text className="text-red-500 self-start">{errors}</Text>}
    </div>
  );
});

TextAreaInput.displayName = "TextAreaInput";
