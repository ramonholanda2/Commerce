import QRCode from "qrcode";
import { CgDetailsMore } from "react-icons/cg";
import { useEffect, useState } from "react";
import {
  PurchaseContainer,
  ProductContainer,
  AddressContainer,
  ProductName,
  ProductImage,
  ProductQuantity,
  PurchaseQrCode,
  AddressTitle,
  FirstInfoAddress,
  AditionalInfoAddress,
  AddressIcon,
  ProductTitle,
  PriceContainer,
  ProductSubtotal,
  CopyQrCodeBtn,
  PaymentTitle,
  PaymentContainer,
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

interface Client {
  id: string;
  name: string;
  surname: string;
  address: Address[];
}

interface Product {
  id: Long;
  name: string;
  price: Number;
  urlImage: string;
  item: Item;
}

interface Item {
  id: Long;
  quantity: number;
  subtotal: number;
}

interface PurchaseType {
  id: number;
  status: string;
  qrCodeUrl: string;
  product: Product;
  client: Client;
}

interface PurchaseProps {
  purchase: PurchaseType;
}

const Purchase = ({ purchase }: PurchaseProps) => {
  const [qrCode, setQrCode] = useState<string>();

  function copyQRCode(qrCode: string) {
    navigator.clipboard.writeText(qrCode).then((resp) => {
      alert("QRCode copiado!");
    });
  }

  useEffect(() => {
    QRCode.toDataURL(purchase.qrCodeUrl)
      .then((url) => {
        setQrCode(url);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {};
  }, [purchase.qrCodeUrl]);

  return (
    <PurchaseContainer>
      <ProductContainer>
        <ProductTitle>Produto</ProductTitle>
        <ProductName>{purchase.product.name}</ProductName>
        <ProductImage
          src={purchase.product.urlImage}
          alt={purchase.product.name}
        />
        <PriceContainer>
          <ProductQuantity>
            {purchase.product.price}$ com {purchase.product.item.quantity}{" "}
            Unidades
          </ProductQuantity>
          <ProductSubtotal>
            Total: {purchase.product.item.subtotal}
          </ProductSubtotal>
        </PriceContainer>
      </ProductContainer>
      <AddressContainer>
        <AddressTitle>Endereço de entrega</AddressTitle>
          <FirstInfoAddress>
            {purchase.client.address[0].street},{" "}
            {purchase.client.address[0].number} -{" "}
            {purchase.client.address[0].district}
          </FirstInfoAddress>
          <AditionalInfoAddress>
            {purchase.client.address[0].city} - {purchase.client.address[0].cep}
          </AditionalInfoAddress>
      </AddressContainer>
      <AddressIcon>
        <CgDetailsMore onClick={() => alert(JSON.stringify(purchase.client.address[0]))} size={"2rem"} />
      </AddressIcon>
      <PaymentContainer>
        <PaymentTitle>Pagamento</PaymentTitle>
        <PurchaseQrCode src={qrCode} alt="" />
        <CopyQrCodeBtn onClick={() => copyQRCode(purchase.qrCodeUrl)}>
          Copiar PIX
        </CopyQrCodeBtn>
      </PaymentContainer>
    </PurchaseContainer>
  );
};

export default Purchase;
