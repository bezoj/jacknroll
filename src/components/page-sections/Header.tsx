import { Text, ImgLink } from "../typography";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "../containers";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { DropdownMenu, menuItems } from "./dropdown-menu";
import { useEffect } from "react";

interface IHeaderProps {
  isMenuOpened: boolean;
  setIsMenuOpened: (opened: boolean) => void;
}

export function Header({ isMenuOpened, setIsMenuOpened }: IHeaderProps) {
  useEffect(() => {
    console.log(document.getElementById("about-us"));
  }, []);
  return (
    <>
      <nav className="bg-primary min-h-[100px] flex justify-between items-center px-[30px] sticky top-0 shadow-bottom z-50">
        <Flex>
          <ImgLink>
            <img src={logo} className="max-h-[60px]" alt="Logo" />
          </ImgLink>
        </Flex>
        <Flex className="hidden sm:flex justify-evenly gap-12">
          {menuItems.map((item, index) => (
            <Link to={item.id} duration={200} offset={-100}>
              <Text
                key={`${item.label}-${index}`}
                colorVariant="secondary"
                textVariant="body"
                className="p-2 hover:bg-secondary hover:text-primary cursor-pointer"
              >
                {item.label}
              </Text>
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
            <ImgLink>
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                className="size-6 cursor-pointer"
              />
            </ImgLink>
            <ImgLink>
              <FontAwesomeIcon
                icon={faFacebook}
                color="white"
                className="size-6 cursor-pointer"
              />
            </ImgLink>
          </Flex>
        </Flex>
      </nav>
      {isMenuOpened && <DropdownMenu items={menuItems} />}
    </>
  );
}
