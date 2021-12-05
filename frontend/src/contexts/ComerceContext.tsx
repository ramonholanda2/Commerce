import axios from "axios";
import { useHistory } from "react-router-dom";
import { createContext, useContext, ReactNode, useState } from "react";

interface CommerceContextType {
  addProductForClient: (
    idClient: string | undefined,
    idProduct: Product
  ) => Promise<void>;

  updateItem: (
    idClient: string | undefined,
    idItem: Long,
    quantity: number,
    idProduct: Long
  ) => Promise<void>;

  removeProductForClient: (
    idClient: string | undefined,
    idProduct: Long
  ) => Promise<void>;

  getProducts: (idClient: string | undefined) => Promise<void>;

  products: Product[];
  loadingProducts: boolean;
}

interface Product {
  id: Long;
  name: string;
  price: Number;
  item: Item;
}

interface Item {
  id: Long;
  quantity: number;
  subtotal: number;
}

interface CommerceContextProviderProps {
  children: ReactNode;
}

export const CommerceContext = createContext({} as CommerceContextType);

export function CommerceContextProvider({
  children,
}: CommerceContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);

  const { push } = useHistory();

  async function getProducts(idClient: string | undefined) {
    await axios
      .get(
        `https://milk-holanda.herokuapp.com/products/get-products-by-client/${idClient}`
      )
      .then((response) => {
        setProducts(response.data);
        setLoadingProducts(false);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  async function updateItem(idClient: string | undefined, idItem: Long, quantity: number, idProduct: Long) {
    
    if(quantity === 0) return removeProductForClient(idClient, idProduct);

    await axios
      .post(`https://milk-holanda.herokuapp.com/item/update/${idItem}`, {
        quantity,
      })
      .then((resp) => {
        getProducts(idClient);
      });
  }

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
        )
        .then((resp) => {
          push("/meus-produtos");
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
    await axios
      .delete(
        "https://milk-holanda.herokuapp.com/client-product/remove-product-by-client",
        {
          data: { idClient, idProduct },
        }
      )
      .then((response) => {
        getProducts(idClient);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <CommerceContext.Provider
      value={{
        loadingProducts,
        products,
        updateItem,
        getProducts,
        addProductForClient,
        removeProductForClient,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
}

export const useCommerceContext = () => {
  return useContext(CommerceContext);
};
