import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useCommerceContext } from "../../../contexts/ComerceContext";
import {
  ButtonBack,
  ButtonSave, Div, DivAux, InputFieldAddress,
  LabelTitle, NewAddressContainer
} from "./styles";

interface NewAddressProps {
  toggleNewAddress: () => void;
}

interface Address {
  id: number;
  cep: string;
  street: string;
  city: string;
  district: string;
  number: number;
  complement: string;
}
interface AddressAPI {
  cep: string;
  logradouro: string;
  localidade: string;
  bairro: string;
}

const NewAddress = ({ toggleNewAddress }: NewAddressProps) => {
  const [enderecoId, setEnderecoId] = useState<number>();
  const [cep, setCep] = useState<string>(" ");
  const [logradouro, setLogradouro] = useState<string>(" ");
  const [localidade, setLocalidade] = useState<string>(" ");
  const [bairro, setBairro] = useState<string>(" ");
  const [numero, setNumero] = useState<string>(" ");
  const [complemento, setComplemento] = useState<string>(" ");
  const { user } = useAuthContext();
  const { addAddressForClient, updateAddressForClient } = useCommerceContext();

  function getCep(cep: string) {
    setCep(cep.trim());
    if (cep.trim().length === 8 || cep.trim().length === 9) {
      getAddress(cep);
    }
  }

  function getAddress(cep: string) {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => {
        const data: AddressAPI = response.data;
        setCep(data.cep);
        setBairro(data.bairro);
        setLogradouro(data.logradouro);
        setLocalidade(data.localidade);
      })
      .catch((error) => {});
  }

  function getIdAddressParamURL() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    return url.searchParams.get("enderecoId");
  }

  async function sendAddress() {
    var address = {
      id: enderecoId!,
      cep: cep!,
      street: logradouro!,
      city: localidade!,
      district: bairro!,
      number: Number(numero)!,
      complement: complemento!,
    };

    alert(JSON.stringify(address));
    if (enderecoId === undefined) {
      await addAddressForClient(user?.id!, address);
    } else {
      await updateAddressForClient(user?.id!, address);
    }
  }

  useEffect(() => {
    const addressId = getIdAddressParamURL();
    if (addressId !== null && user?.id) {
      axios
        .get(
          `https://milk-holanda.herokuapp.com/address?idClient=${user?.id}&idAddress=${addressId}`
        )
        .then((response) => {
          const data: Address = response.data;
          setEnderecoId(data.id);
          setCep(String(data.cep));
          setBairro(data.district);
          setLogradouro(data.street);
          setLocalidade(data.city);
          setComplemento(data.complement);
          setNumero(String(data.number));
        });
    }
  }, [user?.id]);

  return (
    <NewAddressContainer>
      <Div>
        <DivAux>
          <LabelTitle>Cep</LabelTitle>
          <InputFieldAddress
            onChange={(e) => getCep(e.target.value)}
            value={cep}
          />
        </DivAux>
        <DivAux>
          <LabelTitle>Rua</LabelTitle>
          <InputFieldAddress
            onChange={(e) => setLogradouro(e.target.value)}
            value={logradouro}
          />
        </DivAux>
      </Div>
      <Div>
        <DivAux>
          <LabelTitle>número</LabelTitle>
          <InputFieldAddress
            type={"text"}
            onChange={(e) => setNumero(e.target.value)}
            value={numero}
          />
        </DivAux>
        <DivAux>
          <LabelTitle>complemento</LabelTitle>
          <InputFieldAddress
            onChange={(e) => setComplemento(e.target.value)}
            value={complemento}
          />
        </DivAux>
      </Div>
      <Div>
        <DivAux>
          <LabelTitle>Bairro</LabelTitle>
          <InputFieldAddress
            onChange={(e) => setBairro(e.target.value)}
            value={bairro}
          />
        </DivAux>
        <DivAux>
          <LabelTitle>Cidade</LabelTitle>
          <InputFieldAddress
            onChange={(e) => setLocalidade(e.target.value)}
            value={localidade}
          />
        </DivAux>
      </Div>
      <Div>
        <ButtonBack to="/enderecos?adicionar=false" onClick={toggleNewAddress}>
          Voltar
        </ButtonBack>
        <ButtonSave onClick={sendAddress}>Salvar</ButtonSave>
      </Div>
    </NewAddressContainer>
  );
};

export default NewAddress;
