import styled from "styled-components";

export const ChartContainer = styled.div`
  padding: 1rem 0.8rem;
  @media screen and (max-width: 360px) {
    padding: 0;
  }
`;

export const ProductContainer = styled.div`
  border-bottom: 3px solid purple;
  margin: 0.5rem 1rem;
  max-width: 80vw;
  display: flex;

  :last-child {
    border: none;
  }

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
  
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }

  
`;
export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 360px) {
    padding: 0;
    padding-top: 10;
  }
  
`;

export const ProductTitle = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  @media screen and (max-width: 550px) {
    font-size: 1.1rem;
  }
`;
export const ProductImage = styled.img`
  border: 3px solid purple;
  margin: 10px;
  border-radius: 10%;

  width: 12rem;
  height: 12rem;
  
  @media screen and (max-width: 550px) {
    width: 8rem;
    height: 8rem;
  }
`;
export const ProductPrice = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  padding: 10px;

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const BuyProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  padding: 1rem 2rem;


  @media screen and (max-width: 780px) {
    padding: 1rem 0;
  }
  @media screen and (max-width: 700px) {
    padding: 1rem 0;
    width: 100%;
  }
`;

export const Subtotal = styled.h3`
  font-size: 1.5rem;
  white-space: nowrap;

  @media screen and (max-width: 550px) {
    font-size: large;
  }
  
`;

export const BuyButton = styled.button`
  width: 10rem;
  padding: 5px 0;
  border-radius: 10px;

  font-size: 1.1rem;
  font-weight: 600;
  background-color: #1c1c1c;
  color: #fff;
  cursor: pointer;
  user-select: none;
  
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;
