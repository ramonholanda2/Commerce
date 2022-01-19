import { useEffect, useState } from "react";
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

  useEffect(() => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var data = url.searchParams.get("adicionar"); //pega o value
    data !== null &&
      (data === "true" || data === "false") &&
      setAddNewAddress(data === "true");
  }, []);

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
