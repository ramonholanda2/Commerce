import styled, { IndexProps } from "styled-components";
import { AnimatePurchase } from "./animations";

export const PurchaseContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  width: 100vw;
  max-width: 1100px;
  gap: 1.1rem;
  border: 3px solid purple;
  border-radius: 8px;
  padding: 1rem 0;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AnimatePurchase} none ${({ index }: IndexProps) => (index / 2.5)+"s" } linear;
  }
  
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ProductTitle = styled.h5`
  font-size: 1.1rem;
`;

export const ProductName = styled.h4`
  font-size: 1.1rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

export const ProductQuantity = styled.span`
  font-weight: 500;
`;

export const ProductSubtotal = styled.span`
  font-weight: 550;
  font-size: 1.18rem;
`;

export const ProductImage = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;

  border: 3px solid purple;
  border-radius: 10%;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 750px) {
    display: none;
  }
`; 

export const AddressTitle = styled.h5`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 5rem;
  `;

export const FirstInfoAddress = styled.span `
    font-size: 1.2rem;
    text-align: center;
    font-weight: 500;
    font-family: 'Mochiy Pop One', sans-serif;
    `;

export const AditionalInfoAddress = styled.span `
    font-size: 1.2rem;
    text-align: center;
    font-weight: 500;
    font-family: 'Mochiy Pop One', sans-serif;
    `;

export const AddressIcon = styled.i `
  position: absolute;
  right: 15px;
  top: 15px;
  
  @media screen and (min-width: 750px) {
    display: none;
  }

`;

export const PurchaseQrCode = styled.img`
  width: 10rem;
  height: 10rem;
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.3rem;
`;

export const PaymentTitle = styled.h5`
    font-size: 1.1rem;
`;

export const CopyQrCodeBtn = styled.button`
  border: 3px solid purple;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  padding: 2px 30px;
  font-weight: 550;
  max-width: 8rem;
`;
