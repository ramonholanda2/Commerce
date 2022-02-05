import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCommerceContext } from "../../contexts/ComerceContext";
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
  district: string;
}

const Payment = () => {
  const [methodPaymentSelected, setMethodPaymentSelected] = useState<
    "pix" | "boleto" | "cartao" | ""
  >("");
  const [deliveryAddressOption, setDeliveryAddressOption] =
    useState<string>("");
  const [deliveryAddress, setDeliveryAddress] = useState<Address>();
  const [stepByStepPayment, setStepByStepPayment] = useState<number>(2);

  const { buyProduct, purchaseProduct } = useCommerceContext();
  const { user } = useAuthContext();
  const { push } = useHistory();


  function selectMethodPayment(method: "pix" | "boleto" | "cartao" | "") {
    setMethodPaymentSelected(method);
  }

  function selectDeliveryAddress(addressOption: string, address: Address) {
    setDeliveryAddressOption(addressOption);
    setDeliveryAddress(address);
  }

  async function nextStepPayment() {
    if (stepByStepPayment === 2 && methodPaymentSelected === "")
      return alert("Selecione um método de pagamento!");

    if (stepByStepPayment === 3 && deliveryAddressOption === "")
      return alert("Selecione um endereço!");

    if (stepByStepPayment === 3) {
      var qrCode = await generateQrCode(`${buyProduct?.item.quantity || 1} ${buyProduct?.name} para ${user?.name} na ${deliveryAddress?.street}`);
      alert(qrCode)
      await purchaseProduct(qrCode, Number(buyProduct?.id), user?.id!, Number(deliveryAddress?.id));
    }

    if (stepByStepPayment <= 2) setStepByStepPayment(stepByStepPayment + 1);
  }

  function backStepPayment() {
    if (stepByStepPayment > 1) {
      setStepByStepPayment(stepByStepPayment - 1);
    }
  }

  useEffect(() => {
    if(!buyProduct) 
        push("/");

  }, [buyProduct, push]);

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
