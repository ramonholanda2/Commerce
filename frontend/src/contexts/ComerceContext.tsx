import axios from "axios";
/* import { useHistory } from "react-router-dom"; */
import { createContext, useContext, ReactNode } from "react";

interface CommerceContextType {
  addProductForClient: (
    idClient: string | undefined,
    idProduct: Product
  ) => Promise<void>;
}

interface Product {
  id: Long;
  name: string;
  price: Number;
}

interface CommerceContextProviderProps {
  children: ReactNode;
}

export const CommerceContext = createContext({} as CommerceContextType);

export function CommerceContextProvider({
  children,
}: CommerceContextProviderProps) {

  /* const { push } = useHistory(); */

  async function addProductForClient(
    idClient: string | undefined,
    product: Product
  ) {
    await axios.post(
      "https://milk-holanda.herokuapp.com/client-product/add-product-by-client",
      {
        idClient,
        idProduct: product.id,
      }
    )
    .catch(error => {
        if(
            error.message.indexOf('400') !== -1
        )
        alert(`${product.name} já adicionado!`)
    })
  }

  return (
    <CommerceContext.Provider value={{ addProductForClient }}>
      {children}
    </CommerceContext.Provider>
  );
}

export const useCommerceContext = () => {
  return useContext(CommerceContext);
};
