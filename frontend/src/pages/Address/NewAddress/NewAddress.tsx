import {
  NewAddressContainer,
  InputFieldAddress,
  LabelTitle,
  DivAux,
  Div,
} from "./styles";
const NewAddress = () => {
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
    </NewAddressContainer>
  );
};

export default NewAddress;
