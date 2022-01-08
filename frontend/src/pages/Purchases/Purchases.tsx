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

    useEffect(() => {
        axios.get("https://milk-holanda.herokuapp.com/purchases").then(response => {
            setPurchases(response)
        }) 
    }, []);

    return (
        <PurchaseContainer>
            <PurchasesTitle>
                Compras
            </PurchasesTitle>
            <PurchasesDiv>
                {purchases?.data.map(purchase => (
                    <Purchase purchase={purchase} />
                ))}
            </PurchasesDiv>
        </PurchaseContainer>
    )
}

export default Purchases
