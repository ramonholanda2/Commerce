import axios from "axios";
import { useHistory } from "react-router-dom";
import { createContext, useContext, ReactNode } from "react";

interface CommerceContextType {
  addProductForClient: (
    idClient: string | undefined,
    idProduct: Product
  ) => Promise<void>;

  removeProductForClient: (
    idClient: string | undefined,
    idProduct: Long
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
  const { push } = useHistory();

  async function addProductForClient(
    idClient: string | undefined,
    product: Product
  ) {
    if (idClient !== undefined && product.id != null) {
      await axios
        .post(
          "https://milk-holanda.herokuapp.com/client-product/add-product-by-client",
          {
            idClient,
            idProduct: product.id,
          }
        ).then(resp => {
          push("/meus-produtos")
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          if (error.message.indexOf("400") !== -1)
            alert(`${product.name} já adicionado!`);
        });
    }
  }

  async function removeProductForClient(
    idClient: string | undefined,
    idProduct: Long
  ) {
    alert("Cliente: " + idClient + " Product: " + idProduct);
    await axios
      .delete(
        "https://milk-holanda.herokuapp.com/client-product/remove-product-by-client",
        {
          data: { idClient, idProduct },
        }
      )
      .then((response) => {
        console.log(response);
        alert("removido");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <CommerceContext.Provider
      value={{ addProductForClient, removeProductForClient }}
    >
      {children}
    </CommerceContext.Provider>
  );
}

export const useCommerceContext = () => {
  return useContext(CommerceContext);
};
