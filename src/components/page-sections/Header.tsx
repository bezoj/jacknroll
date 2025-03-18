import { Text } from "../typography";
import { Link as ScrollLink } from "react-scroll";
import { Link, Link as PageLink } from "react-router-dom";
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
          <ScrollLink to="band">
            <Link to="band">
              <img
                src={logo}
                className="max-h-[60px] cursor-pointer"
                alt="Logo"
              />
            </Link>
          </ScrollLink>
        </Flex>
        <Flex className="hidden sm:flex justify-evenly gap-12">
          {menuItems.map((item, index) => (
            <ScrollLink
              spy={true}
              to={item.id}
              duration={200}
              activeClass="active"
              offset={-100}
            >
              <Text
                key={`${item.label}-${index}`}
                colorVariant="secondary"
                textVariant="body"
                className="p-2 transition hover:bg-secondary hover:text-primary cursor-pointer active:border-b-2 active:border-secondary"
              >
                {item.label}
              </Text>
            </ScrollLink>
          ))}
          <PageLink to="gallery">
            <Text
              colorVariant="secondary"
              textVariant="body"
              className="p-2 transition hover:bg-secondary hover:text-primary cursor-pointer active:border-b-2 active:border-secondary"
            >
              Galerija
            </Text>
          </PageLink>
        </Flex>
        <Flex>
          <FontAwesomeIcon
            icon={faBars}
            color="white"
            className="sm:hidden size-6 cursor-pointer"
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          />
          <Flex className="hidden sm:flex justify-evenly gap-4">
            <a href="https://www.instagram.com/_jacknroll_/">
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                className="size-6 cursor-pointer"
              />
            </a>
            <a href="https://www.facebook.com/Jacknroll4">
              <FontAwesomeIcon
                icon={faFacebook}
                color="white"
                className="size-6 cursor-pointer"
              />
            </a>
          </Flex>
        </Flex>
      </nav>
      {isMenuOpened && <DropdownMenu items={menuItems} />}
    </>
  );
}
