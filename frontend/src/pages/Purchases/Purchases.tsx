import { useAuthContext } from "../../contexts/AuthContext";
import Purchase from "./Purchase/Purchase";
import * as api from "../../commerceAPI"; 
import { PurchaseContainer, PurchasesTitle, PurchasesDiv } from "./styles";
import { useQuery } from "react-query";

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
  id: number;
  status: string;
  qrCodeUrl: string;
  product: Product;
  client: Client;
}

const Purchases = () => {
  const { user } = useAuthContext();
  const { data: purchases, isLoading } = useQuery(
    ["purchases", user?.id], 
    () => api.getPurchases(user?.id!)
  );

  return (
    <PurchaseContainer>
      <PurchasesTitle>Compras</PurchasesTitle>
      <PurchasesDiv>
        {isLoading || !user?.id ? (
          <h1>Carregando...</h1>
        ) : purchases?.length === 0 ? (
          <h1>Sem Compras</h1>
        ) : (
          purchases?.map((purchase: PurchasesProps, index: number) => (
          <Purchase index={index+1} key={purchase.id} purchase={purchase} />))
        )}
      </PurchasesDiv>
    </PurchaseContainer>
  );
};

export default Purchases;
