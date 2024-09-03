import { Link } from "../typography";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "../containers";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { DropdownMenu, menuItems } from "./dropdown-menu";
import { useState } from "react";

export function Header() {
  const [IsMenuOpened, setIsMenuOpened] = useState(true);
  return (
    <>
      <nav className="bg-primary min-h-[100px] flex justify-between items-center px-[30px] sticky top-0 shadow-bottom">
        <Flex>
          <Link>
            <img src={logo} className="max-h-[60px]" />
          </Link>
        </Flex>
        <Flex className="hidden sm:flex justify-evenly gap-12">
          {menuItems.map((item, index) => (
            <Link
              key={`${item.label}-${index}`}
              colorVariant="secondary"
              textVariant="body"
              className="p-2 hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </Flex>
        <Flex>
          <FontAwesomeIcon
            icon={faBars}
            color="white"
            className="sm:hidden size-6"
            onClick={() => {
              setIsMenuOpened(!IsMenuOpened);
            }}
          />
          <Flex className="hidden sm:flex justify-evenly gap-4">
            <Link>
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                className="size-6"
              />
            </Link>
            <Link>
              <FontAwesomeIcon
                icon={faFacebook}
                color="white"
                className="size-6"
              />
            </Link>
          </Flex>
        </Flex>
      </nav>
      {IsMenuOpened && <DropdownMenu items={menuItems} />}
    </>
  );
}
