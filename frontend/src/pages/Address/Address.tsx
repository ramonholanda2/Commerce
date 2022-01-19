import { useState } from "react";
import NewAddress from "./NewAddress/NewAddress";

import {
  AddressContainer,
  AddressTitle,
  Buttons,
  AddressDiv,
  AddAddress,
  EditAddress,
} from "./styles";

const Address = () => {
  const [addNewAddress, setAddNewAddress] = useState<boolean>(false);

  function toggleNewAddress() {
    setAddNewAddress(!addNewAddress)
  }

  return (
    <AddressContainer>
      <AddressTitle>{addNewAddress ? "Adicionar" : "Meus Endereços"}</AddressTitle>
      {addNewAddress ? (
        <NewAddress toggleNewAddress={toggleNewAddress} />
      ) : (
        <AddressDiv>
          <Buttons>
            <AddAddress to="/enderecos?adicionar=true" onClick={toggleNewAddress}>Adicionar</AddAddress>
            <EditAddress>Editar endereço</EditAddress>
          </Buttons>
        </AddressDiv>
      )}
    </AddressContainer>
  );
};

export default Address;
