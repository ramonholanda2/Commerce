import { HeaderContainer, MenuContainer, MenuOptions, LogoSvg } from "./styles";
import LogoMilk from "../../assets/milk.png";
/* import { useAuthContext } from "../../contexts/AuthContext"; */

const Header = () => {
/*   const { user } = useAuthContext(); */

  return (
    <HeaderContainer>
      <LogoSvg src={LogoMilk} />
      <MenuContainer>
        <MenuOptions href="/">Produtos</MenuOptions>
        <MenuOptions href="/meus-produtos" >Meus Produtos</MenuOptions>
        <MenuOptions>Compras</MenuOptions>
        <MenuOptions>Minha conta</MenuOptions>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;

