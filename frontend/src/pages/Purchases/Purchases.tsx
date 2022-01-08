import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Purchase from "./Purchase/Purchase";
import { PurchaseContainer, PurchasesTitle, PurchasesDiv } from "./styles";

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

interface PurchasesProps {
  id: Long;
  status: string;
  qrCodeUrl: string;
  product: Product;
  client: Client;
}

const Purchases = () => {
  const [purchases, setPurchases] = useState<AxiosResponse<PurchasesProps[]>>();
  const [loadingPurchases, setLoadingPurchases] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://milk-holanda.herokuapp.com/purchases")
      .then((response) => {
        setPurchases(response);
        setLoadingPurchases(false);
      });
  }, []);

  return (
    <PurchaseContainer>
      <PurchasesTitle>Compras</PurchasesTitle>
      <PurchasesDiv>
        {loadingPurchases ? (
          <h1>Carregando...</h1>
        ) : (
            purchases?.data.length === 0 ? (
                <h1>Sem Compras</h1>
            ) : (
                purchases?.data.map((purchase) => <Purchase purchase={purchase} />)
            )
        )}
      </PurchasesDiv>
    </PurchaseContainer>
  );
};

export default Purchases;
