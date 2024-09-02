import { Link } from "../typography";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "../containers";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { DropdownMenu } from "./dropdown-menu";

export function Header() {
  return (
    <header className="bg-primary min-h-[100px] flex justify-between items-center px-[30px]">
      <Flex>
        <Link>
          <img src={logo} className="max-h-[60px]" />
        </Link>
      </Flex>
      <Flex className="hidden sm:flex justify-evenly gap-12">
        <DropdownMenu />
      </Flex>
      <Flex>
        <FontAwesomeIcon
          icon={faBars}
          color="white"
          className="sm:hidden size-6"
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
    </header>
  );
}
