import { useState } from "react";
import NewAddress from "./NewAddress/NewAddress";


import { AddressContainer, AddressTitle, Buttons, AddressDiv, AddAddress, EditAddress } from "./styles";


const Address = () => {
    const [addNewAddress, setAddNewAddress] = useState<boolean>(false);


    return (
        <AddressContainer>
            <AddressTitle>Meus Endereços</AddressTitle>
            {addNewAddress ? (
                <NewAddress />
            ) : (
            <AddressDiv>
                <Buttons>
                    <AddAddress onClick={() => setAddNewAddress(true)}>Adicionar</AddAddress>
                    <EditAddress>Editar endereço</EditAddress>
                </Buttons>
            </AddressDiv>

            )}
            
        </AddressContainer>
    )
}

export default Address
