import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { NavBarModal, NavBarContainer, ButtonClose, UserLogo, UserName, MenuContainer, MenuOptions } from "./styles";

interface NavBarProps {
  toggleMenuFunction: () => void;
}

const NavBar = ({ toggleMenuFunction }: NavBarProps) => {
  return (
    <NavBarModal>
      <NavBarContainer>
        <ButtonClose onClick={toggleMenuFunction}>
          <IoCloseSharp size="2.5rem" color="red" />
        </ButtonClose>

        <UserLogo>
          <FaUserCircle
            color="white"
            size="2.5rem"
            cursor="pointer"
          />
          <UserName>{localStorage.getItem("Name")}</UserName>
        </UserLogo>
        
        <MenuContainer>
            <MenuOptions href="/" >Produtos</MenuOptions>
            <MenuOptions href="/meus-produtos">Meus Produtos</MenuOptions>
            <MenuOptions href="">Compras</MenuOptions>
            <MenuOptions href="">Minha Conta</MenuOptions>
        </MenuContainer>

      </NavBarContainer>
    </NavBarModal>
  );
};

export default NavBar;
