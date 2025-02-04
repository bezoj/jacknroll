import { Flex } from "../containers";
import { Text } from "../typography";

interface ITextInputProps {
  className?: string;
  name?: string;
  placeholder?: string;
  title?: string;
  required?: boolean;
  containerProps?: string;
}

export function TextInput({
  className,
  name,
  placeholder,
  title,
  required,
  containerProps,
}: ITextInputProps) {
  return (
    <div className={`flex flex-col gap-1 ${containerProps}`}>
      <Flex>
        <Text textVariant="body-bold">{title}</Text>
        {required && <Text className="text-red-500"> * </Text>}
      </Flex>
      <input
        name={name}
        className={`border-b-2 bg-gray-200 border-primary px-2 py-3  ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}
