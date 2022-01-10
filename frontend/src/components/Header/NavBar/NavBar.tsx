import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useAuthContext } from "../../../contexts/AuthContext";
import {
  NavBarModal,
  NavBarContainer,
  ButtonClose,
  UserLogo,
  UserName,
  MenuContainer,
  MenuOptions,
  LoggoutButton,
} from "./styles";

interface NavBarProps {
  toggleMenuFunction: () => void;
}

const NavBar = ({ toggleMenuFunction }: NavBarProps) => {
  const { user, logout } = useAuthContext();

  return (
    <NavBarModal>
      <NavBarContainer>
        <ButtonClose onClick={toggleMenuFunction}>
          <IoCloseSharp size="2.5rem" color="red" />
        </ButtonClose>

        <UserLogo>
          <FaUserCircle color="white" size="2.5rem" cursor="pointer" />
          <UserName>
            {!user?.name || !user?.surname
              ? ""
              : user?.name + " " + user?.surname}
          </UserName>
        </UserLogo>

        <MenuContainer>
          <MenuOptions href="/">Produtos</MenuOptions>
          <MenuOptions href="/meus-produtos">Meus Produtos</MenuOptions>
          <MenuOptions href="/compras">Compras</MenuOptions>
          <MenuOptions href="/enderecos">Endereços</MenuOptions>
        </MenuContainer>

        <LoggoutButton onClick={logout}>Sair</LoggoutButton>
      </NavBarContainer>
    </NavBarModal>
  );
};

export default NavBar;
