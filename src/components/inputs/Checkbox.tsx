import { forwardRef } from "react";
import { Flex, FlexColumn } from "../containers";
import { Text } from "../typography";

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  errors?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ id, name, label, errors, className, ...rest }, ref) => {
    return (
      <FlexColumn>
        <Flex className="gap-2 cursor-pointer">
          <input
            type="checkbox"
            className={`cursor-pointer ${className ?? ""}`}
            id={id}
            name={name}
            ref={ref}
            {...rest}
          />
          <label htmlFor={id}>
            <Text className="cursor-pointer">{label}</Text>
          </label>
        </Flex>
        {errors && <Text className="text-red-500 self-start">{errors}</Text>}
      </FlexColumn>
    );
  }
);

Checkbox.displayName = "Checkbox";
