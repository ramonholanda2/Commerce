import axios from "axios";
import { useState } from "react";
import {
  NewAddressContainer,
  InputFieldAddress,
  LabelTitle,
  DivAux,
  Div,
  ButtonBack,
  ButtonSave,
} from "./styles";

interface NewAddressProps {
  toggleNewAddress: () => void;
}

interface Address {
  cep: string;
  street: string;
  city: string;
  district: string;
  number: string;
  complement: string;
}
interface AddressAPI {
  cep: string;
  logradouro: string;
  localidade: string;
  bairro: string;
}

const NewAddress = ({ toggleNewAddress }: NewAddressProps) => {
  const [cep, setCep] = useState<string>();
  const [logradouro, setLogradouro] = useState<string>();
  const [localidade, setLocalidade] = useState<string>();
  const [bairro, setBairro] = useState<string>();
  const [address, setAddress] = useState<Address>();

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
          <InputFieldAddress />
        </DivAux>
        <DivAux>
          <LabelTitle>complemento</LabelTitle>
          <InputFieldAddress />
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
        <ButtonSave>Salvar</ButtonSave>
      </Div>
    </NewAddressContainer>
  );
};

export default NewAddress;
