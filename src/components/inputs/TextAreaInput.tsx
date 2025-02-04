import { Flex } from "../containers";
import { Text } from "../typography";

interface ITextAreaInputProps {
  className?: string;
  name?: string;
  placeholder?: string;
  title?: string;
  required?: boolean;
  containerProps?: string;
  rows?: number;
  cols?: number;
}

export function TextAreaInput({
  className,
  name,
  placeholder,
  title,
  required,
  containerProps,
  rows,
  cols,
}: ITextAreaInputProps) {
  return (
    <div className={`flex flex-col gap-1 ${containerProps}`}>
      <Flex>
        <Text textVariant="body-bold">{title}</Text>
        {required && <Text> * </Text>}
      </Flex>
      <textarea
        name={name}
        cols={cols}
        rows={rows}
        className={`border-b-2 bg-gray-200 border-primary px-2 py-3  ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}
