import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { queryClient } from "../../index";
import NewAddress from "./NewAddress/NewAddress";
import { deleteAddressById, getAddresses } from "../../api/address";

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

interface AddressClient {
  id: number;
  cep: string;
  street: string;
  city: string;
  district: string;
  number: number;
  complement: string;
}

const Address = () => {
  const [addNewAddress, setAddNewAddress] = useState<boolean>(false);
  const [editAddress, setEditAddress] = useState<boolean>(false);
  const [keyArray, setKeyArray] = useState<number>();
  const { user } = useAuthContext();
  const { search } = useLocation();

  const { isLoading, isError, data } = useQuery(
    ["addressesByClient", user?.id],
    () => getAddresses(user?.id!)
  );
  const { isLoading: loading, mutate } = useMutation(deleteAddressById, {
    onSuccess: () => {
      queryClient.invalidateQueries(["addressesByClient", user?.id!]);
    },
    onError: () => {
      setEditAddress(true)
    }
  });

  function deleteAddressByClient(addressId: number) {
    mutate(addressId);
    setKeyArray(addressId);
    setEditAddress(false);
  }

  function toggleNewAddress() {
    setAddNewAddress(!addNewAddress);
  }

  if (isError) {
    throw new Error("erro ao carregar endereços");
  }

  useEffect(() => {
    const findAdicionar = search.search("adicionar=true");
    setAddNewAddress(Boolean(findAdicionar + 1));
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
            <EditAddress onClick={() => setEditAddress(!editAddress)}>
              {" "}
              {editAddress ? "cancelar edição" : "Editar endereço"}
            </EditAddress>
          </Buttons>

          <AdressesContainer>
            {isLoading || !user?.id ? (
              <h1>carregando...</h1>
            ) : data?.length === 0 ? (
              <h1>Sem endereços adicionados</h1>
            ) : (
              data?.map((dress: AddressClient, index: number) => (
                <Adresses index={index + 1} key={dress.id}>
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
                        onClick={() => deleteAddressByClient(dress.id)}
                      />
                    </Div>
                  )}
                  {dress.id === keyArray && loading ? (
                    <h1>deletando...</h1>
                  ) : (
                    <>
                      <AddressInfo>
                        {dress.district} - {dress.street}, {dress.number}
                      </AddressInfo>
                      <AddressInfo>
                        {dress.city} - {dress.cep}
                      </AddressInfo>
                      <AddressInfo>{dress.complement}</AddressInfo>
                    </>
                  )}
                </Adresses>
              ))
            )}
          </AdressesContainer>
        </AddressDiv>
      )}
    </AddressContainer>
  );
};

export default Address;
