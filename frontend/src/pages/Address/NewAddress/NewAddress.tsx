import {
  NewAddressContainer,
  InputFieldAddress,
  LabelTitle,
  DivAux,
  Div,
  ButtonBack,
  ButtonSave
} from "./styles";

interface NewAddressProps {
  toggleNewAddress: () => void;
}

const NewAddress = ({ toggleNewAddress }: NewAddressProps) => {
  return (
    <NewAddressContainer>
      <Div>
        <DivAux>
          <LabelTitle>Cep</LabelTitle>
          <InputFieldAddress></InputFieldAddress>
        </DivAux>
        <DivAux>
          <LabelTitle>Rua</LabelTitle>
          <InputFieldAddress></InputFieldAddress>
        </DivAux>
      </Div>
      <Div>
        <DivAux>
          <LabelTitle>número</LabelTitle>
          <InputFieldAddress></InputFieldAddress>
        </DivAux>
        <DivAux>
          <LabelTitle>complemento</LabelTitle>
          <InputFieldAddress></InputFieldAddress>
        </DivAux>
      </Div>
      <Div>
        <DivAux>
          <LabelTitle>Bairro</LabelTitle>
          <InputFieldAddress></InputFieldAddress>
        </DivAux>
        <DivAux>
          <LabelTitle>Cidade</LabelTitle>
          <InputFieldAddress></InputFieldAddress>
        </DivAux>
      </Div>
      <Div>
          <ButtonBack onClick={toggleNewAddress}>Voltar</ButtonBack>
          <ButtonSave>Salvar</ButtonSave>
      </Div>
    </NewAddressContainer>
  );
};

export default NewAddress;
