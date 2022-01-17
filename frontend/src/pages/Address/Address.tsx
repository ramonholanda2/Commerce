import { AddressContainer, AddressTitle, Buttons, AddressDiv, AddAddress, EditAddress } from "./styles";

const Address = () => {
    return (
        <AddressContainer>
            <AddressTitle>Meus Endereços</AddressTitle>
            <AddressDiv>
                <Buttons>
                    <AddAddress>Adicionar</AddAddress>
                    <EditAddress>Editar endereço</EditAddress>
                </Buttons>
            </AddressDiv>
            
        </AddressContainer>
    )
}

export default Address
