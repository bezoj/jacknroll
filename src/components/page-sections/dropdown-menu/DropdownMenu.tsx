import { FlexColumn } from "../../containers";
import { Link } from "../../typography";
import { IMenuItems } from "./MenuItems";

interface IDropdownMenuProps {
  items: IMenuItems[];
  className?: string;
}

export function DropdownMenu({ items }: IDropdownMenuProps) {
  return (
    <FlexColumn className="sticky top-[100px] left-0 sm:hidden justify-evenly bg-zinc-950  p-4 shadow-bottom items-center ">
      {items.map((item, index) => (
        <Link
          key={`${item.label}-${index}`}
          colorVariant="secondary"
          textVariant="body"
          className="p-2 w-full hover:bg-secondary hover:text-primary text-center"
        >
          {item.label}
        </Link>
      ))}
    </FlexColumn>
  );
}
