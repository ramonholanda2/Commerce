import styled from "styled-components";

export const NewAddressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 3px solid red;
  gap: 3rem;
  margin-top: 2.5rem;
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
      background-color: #fffc;
    }
    
    @media screen and (max-width: 400px) {
        max-width: 14rem;
        font-size: medium;
    }
    `;

export const LabelTitle = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  
  @media screen and (max-width: 400px) {
      margin-right: 10rem;
      font-size: large;
    }
    `;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  `;

export const DivAux = styled.div`
  display: flex;
  flex-direction: column;
  `;
