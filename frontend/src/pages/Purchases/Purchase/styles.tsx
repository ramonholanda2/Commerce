import styled from "styled-components";

export const PurchaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  width: 100vw;
  max-width: 1100px;
  gap: 1.1rem;
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

export const ProductPrice = styled.span``;
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
`;

export const AddressTitle = styled.h5`
  font-size: 1.1rem;
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

export const PaymentTitle = styled.h5``;

export const CopyQrCodeBtn = styled.button`
  border: 3px solid purple;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  padding: 2px 2px;
  font-weight: 550;
  max-width: 8rem;
`;
