import { MdPayment } from "react-icons/md";
import {
  MethodPaymentContainer,
  MethodPaymentTitle,
  MethodPaymentDiv,
  OptionPayment,
  OptionPaymentLabel,
  IconDiv,
} from "./styles";

interface MethodPaymentProps {
  selectMethodPayment: (method: "pix" | "boleto" | "cartao") => void;
  methodPaymentSelected: any;
}

const MethodPayment = ({
  selectMethodPayment,
  methodPaymentSelected,
}: MethodPaymentProps) => {
  return (
    <MethodPaymentContainer>
      <MethodPaymentTitle>Escolha o método de pagamento</MethodPaymentTitle>
      <MethodPaymentDiv onClick={() => selectMethodPayment("pix")}>
        <OptionPayment
          checked={methodPaymentSelected === "pix"}
          type={"radio"}
          value="pix"
          name="methodPayment"
        />
        <IconDiv>
          <OptionPaymentLabel>Pix</OptionPaymentLabel>
          <MdPayment size={"3rem"} />
        </IconDiv>
      </MethodPaymentDiv>
    </MethodPaymentContainer>
  );
};

export default MethodPayment;
