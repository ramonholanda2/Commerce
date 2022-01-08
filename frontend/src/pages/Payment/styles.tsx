import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  `;

export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 40rem;
  padding: 0rem 1rem;
  gap: 5px;
  `;
export const ButtonNextStep = styled.button`
  width: 9rem;
  padding: 0.3rem 1.5rem;
  border-radius: 7px;
  font-size: 1.1rem;
  border: none;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  background-color: #8257e5;
  color: white;
  text-transform: uppercase;
  
  cursor: pointer;
  `;
export const ButtonBackStep = styled.button`
  text-transform: uppercase;
  width: 9rem;
  padding: 5px 0;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #1c1c1c;
  color: #fff;
  cursor: pointer;
  user-select: none;
`;
