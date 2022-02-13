import styled, { IndexProps } from "styled-components";
import { Link } from "react-router-dom";
import { AnimateAddress } from "./animations";

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

export const AddressTitle = styled.h5`
  font-size: 1.8rem;
`;

export const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const Buttons = styled.div`
  gap: 3rem;
  display: flex;
  margin-top: 1.5rem;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 1rem;
  }
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
  transition: filter .3s ease-in-out;
  
  :hover {
    filter: brightness(80%) 
  }

`;

export const AdressesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2rem;

  @media screen and (max-width: 600px) {
    gap: 0.5rem;
  }
`;

export const Adresses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid purple;
  width: 35rem;
  min-height: 5rem;
  max-width: 35rem;
  gap: 0.5rem;
  padding: 5px 10px;
  outline: 2px solid #32008f;
  border: 2px solid #eb1beb;
  border-radius: 5px;
  overflow: hidden;
  text-wrap: wrap;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AnimateAddress} none ${({ index }: IndexProps) => (index / 1.5)+"s" } linear;
  }

  @media screen and (max-width: 650px) {
    max-width: 30rem;
  }

  @media screen and (max-width: 550px) {
    max-width: 25rem;
  }

  @media screen and (max-width: 450px) {
    max-width: 18rem;
  }
`;

export const AddressInfo = styled.h4`
  text-align: center;
  font-size: 1.5rem;
  font-family: "Mochiy Pop One", sans-serif;
  font-weight: 500;

  @media screen and (max-width: 450px) {
    font-size: 1.2rem;
  }
`;

export const Div = styled.nav`
  display: flex;
`;

export const EditAddressBtn: any = styled(Link)``;
