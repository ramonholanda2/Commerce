import { Link } from "react-router-dom";
import styled from "styled-components";
import { AnimateBtnsAddress, AnimateInputAddress } from "./animations";

export const NewAddressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3.5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 650px) {
    gap: 0rem;
    
  }
  @media screen and (max-width: 400px) {
    margin-top: 1rem;
    
  }

`;

export const InputFieldAddress = styled.input`
  width: 21rem;
  max-width: 21rem;
  outline: none;

  border: 1px solid #e4e4e4;
  border-bottom: 3px solid purple;
  border-radius: 5px;
  padding: 10px;

  font-size: 1.1rem;

  :focus {
    background-color: #6a4b791d;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AnimateInputAddress} none 1s linear;
  }

  @media screen and (max-width: 850px) {
    max-width: 17rem;
  }
  @media screen and (max-width: 650px) {
    max-width: 20rem;
  }
  @media screen and (max-width: 400px) {
    max-width: 16rem;
  }
`;

export const LabelTitle = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: 500;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AnimateInputAddress} none 1s linear;
  }

  @media screen and (max-width: 400px) {
    font-size: large;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 650px) {
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    flex-direction: column;

    :last-child {
      gap: .5rem;
    }
  }

`;

export const DivAux = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonBack: any = styled(Link)`
  text-align: center;
  text-decoration: none;
  padding: 0.5rem 0rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  background-color: #371736;
  color: white;
  font-weight: 550;
  width: 21rem;
  max-width: 21rem;
  cursor: pointer;
  border-radius: 7px;
  border: none;

  :hover {
    filter: brightness(85%);
  }

  @media screen and (max-width: 850px) {
    max-width: 17rem;
  }

  @media screen and (max-width: 650px) {
    max-width: 20rem;
  }

  @media screen and (max-width: 400px) {
    max-width: 16rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AnimateBtnsAddress} none 1s linear;
  }

`;
export const ButtonSave = styled.button`
  padding: 0.5rem 0rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  background-color: #800080;
  color: white;
  font-weight: 550;
  width: 21rem;
  max-width: 21rem;
  cursor: pointer;
  border-radius: 7px;
  border: none;

  :hover {
    filter: brightness(85%);
  }

  @media screen and (max-width: 850px) {
    max-width: 17rem;
  }

  @media screen and (max-width: 650px) {
    max-width: 20rem;
  }

  @media screen and (max-width: 400px) {
    max-width: 16rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AnimateBtnsAddress} none 1s linear;
  }
`;
