import { Link } from "react-scroll";
import { FlexColumn } from "../../containers";
import { Text } from "../../typography";
import { IMenuItems } from "./MenuItems";

interface IDropdownMenuProps {
  items: IMenuItems[];
  className?: string;
}

export function DropdownMenu({ items }: IDropdownMenuProps) {
  return (
    <FlexColumn className="z-50 sticky top-[100px] left-0 sm:hidden justify-evenly bg-zinc-950  p-4 shadow-bottom items-center ">
      {items.map((item, index) => (
        <Link to={item.id} spy={true} offset={-100} duration={200}>
          <Text
            key={`${item.label}-${index}`}
            colorVariant="secondary"
            textVariant="body"
            className="p-2 w-full hover:bg-secondary hover:text-primary text-center"
          >
            {item.label}
          </Text>
        </Link>
      ))}
    </FlexColumn>
  );
}
