import { Link } from "../typography";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "../containers";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { DropdownMenu, menuItems } from "./dropdown-menu";

interface IHeaderProps {
  isMenuOpened: boolean;
  setIsMenuOpened: (opened: boolean) => void;
}

export function Header({ isMenuOpened, setIsMenuOpened }: IHeaderProps) {
  return (
    <>
      <nav className="bg-primary min-h-[100px] flex justify-between items-center px-[30px] sticky top-0 shadow-bottom z-50">
        <Flex>
          <Link>
            <img src={logo} className="max-h-[60px]" alt="Logo" />
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
            className="sm:hidden size-6 cursor-pointer"
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          />
          <Flex className="hidden sm:flex justify-evenly gap-4">
            <Link>
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                className="size-6 cursor-pointer"
              />
            </Link>
            <Link>
              <FontAwesomeIcon
                icon={faFacebook}
                color="white"
                className="size-6 cursor-pointer"
              />
            </Link>
          </Flex>
        </Flex>
      </nav>
      {isMenuOpened && <DropdownMenu items={menuItems} />}
    </>
  );
}
