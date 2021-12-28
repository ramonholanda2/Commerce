import styled from "styled-components";

export const DeliveryAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 3px solid red;
  max-width: 40rem;
  gap: 1.5rem;
`;

export const DeliveryAddressTitle = styled.h2`
  font-size: 1.8rem;
`;

export const AddressContainer = styled.div`
  border: 3px solid red;
  padding: 5px;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

export const OptionAddress = styled.input`
  cursor: pointer;
  width: 15px;
  height: 20px;
  cursor: pointer;
`;
export const OptionAddressLabel = styled.label`
  font-size: 1.3rem;
  cursor: pointer;
  font-family: "Mochiy Pop One", sans-serif;
  `;

export const InfoAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px;
  cursor: pointer;
  margin-left: 0.5rem;
  width: 37rem;
`;
