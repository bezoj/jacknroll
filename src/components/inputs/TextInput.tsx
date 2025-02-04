import { forwardRef } from "react";
import { Flex } from "../containers";
import { Text } from "../typography";

interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  title?: string;
  containerProps?: string;
  errors?: string;
  required?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
  ({ className, title, containerProps, errors, required, ...rest }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${containerProps}`}>
        {title && (
          <Flex>
            <Text textVariant="body-bold">{title}</Text>
            {required && <Text className="text-red-500"> * </Text>}
          </Flex>
        )}
        <input
          ref={ref}
          className={`border-b-[3px] font-body bg-gray-200 border-primary px-2 py-3 ${className}`}
          {...rest}
        />
        {errors && <Text className="text-red-500 self-start">{errors}</Text>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput"; // Required for React devtools
