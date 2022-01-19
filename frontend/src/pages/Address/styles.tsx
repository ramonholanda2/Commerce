import styled from "styled-components";
import { Link } from "react-router-dom";

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-y: hidden;
`;

export const AddressTitle = styled.h5`
  font-size: 1.8rem;
`;

export const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Buttons = styled.div`
  gap: 3rem;
  display: flex;
  margin-top: 1.5rem;
`;

export const AddAddress: any = styled(Link)`
  text-align: center;
  text-decoration: none;
  padding: 0.3rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  background-color: #401c2a;
  color: white;
  font-weight: 550;
  width: 12rem;
  cursor: pointer;
  border-radius: 7px;
  border: none;
`;
export const EditAddress = styled.button`
  padding: 0.3rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  background-color: #dce4f7;
  width: 12rem;
  font-weight: 550;
  cursor: pointer;
  border-radius: 7px;
  border: none;
`;

export const AdressesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2rem;
`;

export const Adresses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid purple;
  max-width: 30rem;
  gap: .5rem;
  padding: 5px 30px;
  border-radius: 5px;
  cursor: pointer;

`;

export const AddressInfo = styled.h4`
  font-size: 1.5rem;
  cursor: pointer;
  font-family: "Mochiy Pop One", sans-serif;
  font-weight: 500;

  @media screen and (max-width: 450px) {
    font-size: 1.2rem;
  }
`;

export const Div = styled.nav`
  display: flex;
`;
