import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCommerceContext } from "../../contexts/ComerceContext";
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
  Div,
  EditAddressBtn,
} from "./styles";

/* interface AddressClient {
  id: number;
  cep: string;
  street: string;
  city: string;
  district: string;
  number: number;
  complement: string;
} */

const Address = () => {
  const [addNewAddress, setAddNewAddress] = useState<boolean>(false);
  const [editAddress, setEditAddress] = useState<boolean>(false);
  const { user } = useAuthContext();
  const { getAllAddressesByClient, addresses, deleteAddressForClient } = useCommerceContext();

  function toggleNewAddress() {
    setAddNewAddress(!addNewAddress);
  }

  const { search } = useLocation();

  useEffect(() => {
    const findAdicionar = search.search("adicionar=true");
    setAddNewAddress(Boolean(findAdicionar + 1));
  }, [search]);

  useEffect(() => {
    if (user?.id) {
      getAllAddressesByClient(user.id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

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
            <EditAddress onClick={() => setEditAddress(!editAddress)}>
              {" "}
              {editAddress ? "cancelar edição" : "Editar endereço"}
            </EditAddress>
          </Buttons>

          <AdressesContainer>
            {addresses?.map((dress) => (
              <Adresses key={dress.id}>
                {editAddress && (
                  <Div>
                    <EditAddressBtn
                      to={`/enderecos?adicionar=true&enderecoId=${dress.id}`}
                    >
                      <AiFillEdit
                        style={{ marginRight: "2rem", cursor: "pointer" }}
                        size={"2rem"}
                      />
                    </EditAddressBtn>
                    <AiFillDelete
                      style={{ cursor: "pointer", color: "#c20d0d" }}
                      size={"2rem"}
                      onClick={() => deleteAddressForClient(dress.id, user?.id!)}
                    />
                  </Div>
                )}
                <AddressInfo>
                  {dress.district} - {dress.street}, {dress.number}
                </AddressInfo>
                <AddressInfo>
                  {dress.city} - {dress.cep}
                </AddressInfo>
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
