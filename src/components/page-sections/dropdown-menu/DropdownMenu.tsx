import { Link } from "react-scroll";
import { FlexColumn } from "../../containers";
import { Text } from "../../typography";
import { IMenuItems } from "./MenuItems";
import { Link as PageLink } from "react-router-dom";

interface IDropdownMenuProps {
  items: IMenuItems[];
  onMenuItemClick?: () => void;
}

export function DropdownMenu({ items, onMenuItemClick }: IDropdownMenuProps) {
  return (
    <FlexColumn className="z-50 sticky w-full top-[100px] left-0 sm:hidden justify-evenly bg-zinc-950  p-4 shadow-bottom items-center ">
      {items.map((item, index) => (
        <>
          <Link
            to={item.id}
            spy={true}
            offset={-100}
            duration={200}
            onClick={onMenuItemClick}
          >
            <Text
              key={`${item.label}-${index}`}
              colorVariant="secondary"
              textVariant="body"
              className="p-2 w-full hover:bg-secondary hover:text-primary text-center"
            >
              {item.label}
            </Text>
          </Link>
        </>
      ))}
      <PageLink to="gallery">
        <Text
          colorVariant="secondary"
          textVariant="body"
          className="p-2 hover:bg-secondary w-full hover:text-primary cursor-pointer active:border-b-2 active:border-secondary"
        >
          Galerija
        </Text>
      </PageLink>
    </FlexColumn>
  );
}
