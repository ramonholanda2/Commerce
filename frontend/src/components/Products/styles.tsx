import { Link } from "react-router-dom";
import styled, { IndexProps } from "styled-components";
import { ViewProduct } from "./animations";

declare module "styled-components" {
  export interface IndexProps {
    index: number;
  }
}

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 8rem);
  position: relative;
  padding-bottom: 3rem;
`;

export const AddNewProduct: any = styled(Link)`
  position: absolute;
  left: 20px;
  top: 0px;
  cursor: pointer;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${ViewProduct} none ${({ index }: IndexProps) => (index * 0.2)+"s" } linear;
  }

  @media screen and (max-width: 975px) {
    padding: 15px;
  }

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

export const ProductName = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
`;

export const ProductImage = styled.img`
  border: 3px solid purple;
  margin: 10px;
  border-radius: 10%;
  object-fit: cover;

  width: 15rem;
  height: 15rem;
`;

export const ProductPrice = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  padding: 10px;
`;

export const AddButton = styled.button`
  font-family: "Poppins", sans-serif;
  padding: 0.1rem 0;
  font-size: 1.06rem;
  font-weight: 600;

  border-radius: 6px;
  border: 2px solid purple;
  background-color: #e05fd549;
  cursor: pointer;
  margin-bottom: 5px;

  width: 100%;
  max-width: 230px;
  transition: all 0.3s ease-out;

  :hover {
    filter: brightness(0.7);
  }
`;

export const BuyButton = styled.button`
  font-family: "Poppins", sans-serif;
  padding: 0.1rem 0;
  font-size: 1.06rem;
  font-weight: 600;

  border-radius: 6px;
  cursor: pointer;

  width: 100%;
  max-width: 230px;
  transition: all 0.3s ease-out;

  border: 3px solid purple;
  transition: all 0.3s;
  background-color: #ffffff;
  color: #9b009b;

  :hover {
    filter: brightness(0.9);
  }
`;
