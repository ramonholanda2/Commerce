import styled from "styled-components";

export const MethodPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 40rem;
  gap: 1.5rem;
`;

export const MethodPaymentTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
`;

export const MethodPaymentDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  border: 3px solid purple;
  padding: 5px 10px; 
  border-radius: 30px;
  background-color: #dcbdff1a; 
  `;

export const OptionPayment = styled.input`
  cursor: pointer;
  width: 15px;
  height: 20px;
  `;
export const OptionPaymentLabel = styled.label`
  font-size: 1.3rem;
  cursor: pointer;
  font-family: "Mochiy Pop One", sans-serif;
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
