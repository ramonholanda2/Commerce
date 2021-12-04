import {
  HeaderContainer,
  MenuContainer,
  MenuOptions,
  LogoSvg,
  NavbarContainer,
  UserLogo,
  UserName,
} from "./styles";
import { FaUserCircle } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";
import LogoMilk from "../../assets/milk.png";
import { useState } from "react";
import NavBar from "./NavBar/NavBar";
import Loggout from "./Loggout/Loggout";

const Header = () => {
  const [toggleNavBar, setToggleNavBar] = useState<boolean>(false);
  const [toggleLoggout, setToggleLoggout] = useState<boolean>(false);

  function toggleMenu() {
    setToggleNavBar(!toggleNavBar);
  }

  return (
    <HeaderContainer>
      <LogoSvg src={LogoMilk} />
      <MenuContainer>
        <MenuOptions href="/">Produtos</MenuOptions>
        <MenuOptions href="/meus-produtos">Meus Produtos</MenuOptions>
        <MenuOptions>Compras</MenuOptions>
        <MenuOptions>Minha conta</MenuOptions>
      </MenuContainer>

      <UserLogo>
        <FaUserCircle
          onClick={() => setToggleLoggout(!toggleLoggout)}
          color="white"
          size="2.5rem"
          cursor="pointer"
        />
        <UserName>{localStorage.getItem("Name")?.split(" ")[0]}</UserName>
        {toggleLoggout && <Loggout />}
      </UserLogo>

      {toggleNavBar ? (
        <NavBar toggleMenuFunction={toggleMenu} />
      ) : (
        <NavbarContainer onClick={toggleMenu}>
          <RiMenu5Line color="white" size="2rem" />
        </NavbarContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
