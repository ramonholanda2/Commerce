import styled, { IsAlterQuantity } from "styled-components";

declare module "styled-components" {
  export interface IsAlterQuantity {
    isAlterableQuantity: boolean;
  }
}

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;

  @media screen and (max-width: 550px) {
      padding: 0;
  }
`;

export const PlusAndMinus = styled.div`
  border-radius: 9999999px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const QuantityInput = styled.input`
  margin: 0 0.8rem;
  padding: 5px;
  border-radius: 10px;
  font-size: 1.1rem;
  width: 6rem;
  height: 35px;
  
  @media screen and (max-width: 550px) {
      padding: 4px;
      width: 3rem;
      margin: 0 .3rem;
  }

`;

export const ButtonSaveNewQuantity = styled.button`
  transition: all 0.2s ease-in;
  filter: ${({ isAlterableQuantity }: IsAlterQuantity) =>
    isAlterableQuantity ? "opacity(1)" : "opacity(0)"};
  width: 10rem;
  max-width: 7rem;
  padding: 3px 0px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 10px;
  background-color: #1c1c1c;
  color: #fff;
  margin-top: 1rem;
  user-select: none;
  cursor: ${({ isAlterableQuantity }: IsAlterQuantity) =>
    isAlterableQuantity ? "pointer" : "default"};

@media screen and (max-width: 550px) {
    width: 5rem;
    font-size: medium;
  }
`;

export const ItemController = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  height: 100%;
`;
