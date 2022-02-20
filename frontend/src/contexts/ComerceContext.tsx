import axios from "axios";
import { useHistory } from "react-router-dom";
import { createContext, useContext, ReactNode, useState } from "react";
import { Product } from "../components/Products/Products";

interface CommerceContextType {
  setProductForPurchase: (idClient: string, purchase: Product) => Promise<void>;
  buyProduct: Product | undefined;

  purchaseProduct: (
    qrCode: string,
    idProduct: number,
    idClient: string,
    idAddress: number
  ) => Promise<void>;
}

interface CommerceContextProviderProps {
  children: ReactNode;
}

export const CommerceContext = createContext({} as CommerceContextType);

export function CommerceContextProvider({
  children,
}: CommerceContextProviderProps) {
  const [buyProduct, setBuyProduct] = useState<Product>();

  const { push } = useHistory();

  async function purchaseProduct(
    qrCodeUrl: string,
    idProduct: number,
    idClient: string,
    idAddress: number
  ) {
    axios
      .post(`${process.env.API_URL}/purchases`, {
        qrCodeUrl,
        idProduct,
        idClient,
        idAddress,
      })
      .then((resp) => {
        push("/compras");
        setBuyProduct(undefined);
      });
  }

  async function setProductForPurchase(idClient: string, product: Product) {
    product.idClient = idClient;
    setBuyProduct(product);
  }

  return (
    <CommerceContext.Provider 
      value={{
        buyProduct,
        setProductForPurchase,
        purchaseProduct,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
}

export const useCommerceContext = () => {
  return useContext(CommerceContext);
};
