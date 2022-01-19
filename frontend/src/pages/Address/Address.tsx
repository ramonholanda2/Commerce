import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import NewAddress from "./NewAddress/NewAddress";


import {
  AddressContainer,
  AddressTitle,
  Buttons,
  AddressDiv,
  AddAddress,
  EditAddress,
  AdressesContainer,
  Adresses,
  AddressInfo,
} from "./styles";

const Address = () => {
  const [addNewAddress, setAddNewAddress] = useState<boolean>(false);
  const [adresses, setAdresses] = useState();

  const { user } = useAuthContext();

  function toggleNewAddress() {
    setAddNewAddress(!addNewAddress);
  }

  const { search } = useLocation();

  useEffect(() => {
      const findAdicionar = search.search("adicionar=true");
      setAddNewAddress(Boolean(findAdicionar + 1))
  }, [search]);

  return (
    <AddressContainer>
      <AddressTitle>
        {addNewAddress ? "Adicionar" : "Meus Endereços"}
      </AddressTitle>
      {addNewAddress ? (
        <NewAddress toggleNewAddress={toggleNewAddress} />
      ) : (
        <AddressDiv>
          <Buttons>
            <AddAddress
              to="/enderecos?adicionar=true"
              onClick={toggleNewAddress}
            >
              Adicionar
            </AddAddress>
            <EditAddress>Editar endereço</EditAddress>
          </Buttons>

          <AdressesContainer>
              {user?.address?.map(dress => (
                <Adresses>
                    <AddressInfo>{dress.district} - {dress.street}, {dress.number}</AddressInfo>
                    <AddressInfo>{dress.city} - {dress.cep}</AddressInfo>
                    <AddressInfo>{dress.complement}</AddressInfo>
                </Adresses>
              ))}
          </AdressesContainer>

        </AddressDiv>
      )}
    </AddressContainer>
  );
};

export default Address;
