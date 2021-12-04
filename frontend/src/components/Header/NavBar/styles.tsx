import styled from "styled-components";

export const NavBarModal = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #000000ca;
  z-index: 1;

  @media screen and (min-width: 750px) {
    display: none;
  }
`;

export const NavBarContainer = styled.nav`
  border-radius: 7px;
  position: relative;
  height: 100%;
  width: 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;
  background-color: #500050e1;
`;

export const ButtonClose = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  left: -50px;
`;

export const UserLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 8rem;
`;

export const UserName = styled.h5`
  text-align: center;
  color: #fff;
  font-size: 0.9rem;
  margin-top: 10px;
  max-width: 8rem;
  text-overflow: ellipsis;
  overflow-x: hidden;
`;

export const MenuContainer = styled.ul`
  margin-top: 1rem;
  list-style: none;
  display: flex;
  padding: 2px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  padding-bottom: 2rem;
`;

export const MenuOptions = styled.a`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

export const LoggoutButton = styled.button `

  color: red;
  font-size: 1.2rem;
  font-weight: 600;
  width: 8rem;
  border-radius: 10px;
  border: none;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  padding: .2rem 0rem;
  background-color: #fff;
`;