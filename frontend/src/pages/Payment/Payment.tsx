import { useState } from "react";
import { generateQrCode } from "../../utils/generateQrCode";
import DeliveryAddress from "./DeliveryAddress/DeliveryAddress";
import MethodPayment from "./MethodPayment/MethodPayment";
import Review from "./Review/Review";
import {
  PaymentContainer,
  ButtonsContainer,
  ButtonBackStep,
  ButtonNextStep,
} from "./styles";

interface Address {
  id: Long;
  street: string;
  number: number;
  complement: string;
  cep: string;
  city: string;
}

const Payment = () => {
  const [methodPaymentSelected, setMethodPaymentSelected] = useState<
    "pix" | "boleto" | "cartao" | ""
  >("");
  const [deliveryAddressOption, setDeliveryAddressOption] = useState<
    "address 1" | "address 2" | "address 3" | ""
  >("");
  const [deliveryAddress, setDeliveryAddress] = useState<Address>();
  const [stepByStepPayment, setStepByStepPayment] = useState<number>(2);

  function selectMethodPayment(method: "pix" | "boleto" | "cartao" | "") {
    setMethodPaymentSelected(method);
  }

  function selectDeliveryAddress(
    addressOption: "address 1" | "address 2" | "address 3" | "",
    address: Address
  ) {
    setDeliveryAddressOption(addressOption);
    setDeliveryAddress(address);
  }

  async function nextStepPayment() {
    if (stepByStepPayment === 2 && methodPaymentSelected === "")
      return alert("Selecione um método de pagamento!");

    if (stepByStepPayment === 3 && deliveryAddressOption === "")
      return alert("Selecione um endereço!");

    if(stepByStepPayment === 3) {
      var qrCode = await generateQrCode();
      alert(qrCode);
    }

    if (stepByStepPayment <= 2) setStepByStepPayment(stepByStepPayment + 1);
  }

  function backStepPayment() {
    if (stepByStepPayment > 1) {
      setStepByStepPayment(stepByStepPayment - 1);
    }
  }

  return (
    <PaymentContainer>
      {stepByStepPayment === 1 && <Review />}
      {stepByStepPayment === 2 && (
        <MethodPayment
          selectMethodPayment={selectMethodPayment}
          methodPaymentSelected={methodPaymentSelected}
        />
      )}
      {stepByStepPayment === 3 && (
        <DeliveryAddress
          selectDeliveryAddress={selectDeliveryAddress}
          deliveryAddressOption={deliveryAddressOption}
          deliveryAddress={deliveryAddress}
        />
      )}

      <ButtonsContainer>
        <ButtonBackStep onClick={backStepPayment}>Voltar</ButtonBackStep>
        <ButtonNextStep onClick={nextStepPayment}>
          {stepByStepPayment !== 3 ? "Avançar" : "Comprar"}
        </ButtonNextStep>
      </ButtonsContainer>
    </PaymentContainer>
  );
};

export default Payment;
