import styled from "styled-components";

export const AddressContainer = styled.div`
  border: 3px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0;
`;

export const AddressTitle = styled.h5`
  font-size: 1.8rem;
`;

export const AddressDiv = styled.div``;

export const Buttons = styled.div`
  gap: 3rem;
  display: flex;
  margin-top: 1.5rem;
`;

export const AddAddress = styled.button`
  padding: 0.3rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  background-color: #401c2a;
  color: white;
  font-weight: 550;
  width: 12rem;
  cursor: pointer;
  border-radius: 7px;
  border: none;
`;
export const EditAddress = styled.button`
  padding: 0.3rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  background-color: #dce4f7;
  width: 12rem;
  font-weight: 550;
  cursor: pointer;
  border-radius: 7px;
  border: none;
`;