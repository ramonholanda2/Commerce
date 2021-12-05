import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem .9rem; 
  background-color: #991a91;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 80px;

  @media screen and (max-width: 750px) {
    height: 60px;
    justify-content: space-between;
  }
`;

export const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 2px;
  gap: 1.5rem;
  padding: 20px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const MenuOptions = styled.a`
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`;

export const LogoSvg = styled.img`
  background-color: #fff;
  border-radius: 100%;
  height: 70px;
  max-height: 70px;

  @media screen and (max-width: 750px) {
    height: 50px;
    position: sticky;
  }
`;

export const NavbarContainer = styled.nav`
  display: none;

  @media screen and (max-width: 750px) {
    display: flex;
    padding-right: 0.5rem;
  }
`;

export const UserLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.5rem;
  max-width: 5rem;
  
  @media screen and (max-width: 750px) {
    display: none;
  }
  `;

export const UserName = styled.h4`
  text-align: center;
  color: #fff;
  font-size: .9rem;
  margin-top: 3px;
  max-width: 5rem;
  text-overflow: ellipsis;
  overflow-x: hidden;
`;
