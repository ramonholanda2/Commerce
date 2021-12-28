import { useAuthContext } from "../../../contexts/AuthContext";
import {
  DeliveryAddressContainer,
  DeliveryAddressTitle,
  AddressContainer,
  OptionAddress,
  OptionAddressLabel,
  InfoAddressContainer,
} from "./styles";

interface Address {
  id: Long;
  street: string;
  number: number;
  complement: string;
  cep: string;
  city: string;
}

interface DeliveryAddressProps {
  selectDeliveryAddress: (
    addressOption: "address 1" | "address 2" | "address 3" | "",
    address: Address
  ) => void;
  deliveryAddressOption: "address 1" | "address 2" | "address 3" | "";
  deliveryAddress: Address | undefined;
}

const DeliveryAddress = ({
  selectDeliveryAddress,
  deliveryAddress,
  deliveryAddressOption,
}: DeliveryAddressProps) => {
  const { user } = useAuthContext();

  return (
    <DeliveryAddressContainer>
      <DeliveryAddressTitle>Escolha o endereço</DeliveryAddressTitle>
      <AddressContainer
        onClick={() => selectDeliveryAddress("address 1", user?.address!)}
      >
        <OptionAddress
          type={"radio"}
          checked={deliveryAddressOption === "address 1"}
          value="address 1"
          name="address"
        />
        <InfoAddressContainer>
          <OptionAddressLabel>
            {user?.address?.street}, {user?.address?.number}
          </OptionAddressLabel>
          <OptionAddressLabel>
            {user?.address?.complement} - {user?.address?.city}
          </OptionAddressLabel>
        </InfoAddressContainer>
      </AddressContainer>
    </DeliveryAddressContainer>
  );
};

export default DeliveryAddress;
