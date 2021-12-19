import styled from "styled-components";

export const AddProductGrid = styled.div``;

export const PreviewImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

export const NameProduct = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const PriceProduct = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 10px;
`;

export const ImageProduct = styled.img`
  border: 3px solid purple;
  margin: 10px;
  border-radius: 10%;
  object-fit: cover;

  width: 13rem;
  height: 13rem;
`;

export const ProductData = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  margin-top: 1.5rem;

  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

  }
`;

export const SelectFile = styled.input``;
export const InputDataProduct = styled.input`
  border: 1px solid #e4e4e4;
  border-bottom: 3px solid purple;
  border-radius: 5px;
  padding: 9px;
  font-size: 1.1rem;
  width: 100%;

  :focus {
    background-color: #fffc;
  }

  @media screen and (max-width: 500px) {
    max-width: 20rem;
    width: 100%;
    font-size: medium;
  }

  @media screen and (max-width: 400px) {
    max-width: 16rem;
  }
`;

export const LabelTitle = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  

  @media screen and (max-width: 400px) {
    font-size: medium;
  }
`;

export const LabelFile = styled.label`
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
  background-color: #271c27;
  color: #fff;
  text-align: center;
  width: 100%;
  
`;

export const ButtonSend = styled.button`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;

  padding: 6px; 
  width: 100%;
  cursor: pointer;
  background-color: #80008013;
  border: 3px solid purple;
  border-radius: 7px;
  font-weight: 550;
`;

