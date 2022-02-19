import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  SetStateAction,
} from "react";

interface CommerceContextType {

  setProductForPurchase: (idClient: string, purchase: Product) => Promise<void>;
  buyProduct: Product | undefined;

  uploadProduct: (productData: SendProduct) => Promise<void>;

  purchaseProduct: (
    qrCode: string,
    idProduct: number,
    idClient: string,
    idAddress: number
  ) => Promise<void>;

}

interface SendProduct {
  name: SetStateAction<string | undefined>;
  price: SetStateAction<string | undefined>;
  urlImage: any;
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

interface CommerceContextProviderProps {
  children: ReactNode;
}

export const CommerceContext = createContext({} as CommerceContextType);

export function CommerceContextProvider({
  children,
}: CommerceContextProviderProps) {
  const [buyProduct, setBuyProduct] = useState<Product>();

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
        )
        .then((resp) => {
          push("/meus-produtos");
        })
        .catch((error) => {
          push("/meus-produtos");
          console.log(JSON.stringify(error));
        });
    }
  }

  async function uploadProduct(productData: SendProduct) {
    await axios
      .post("https://milk-holanda.herokuapp.com/products", {
        name: productData.name,
        price: productData.price,
        urlImage: productData.urlImage,
      })
      .then((resp) => {
        document.location.reload();
      })
      .catch((error) => {
        alert("Produto não cadastrado!");
      });
  }

  async function purchaseProduct(
    qrCodeUrl: string,
    idProduct: number,
    idClient: string,
    idAddress: number
  ) {
    axios
      .post("https://milk-holanda.herokuapp.com/purchases", {
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
    await addProductForClient(idClient, product);
    setBuyProduct(product);
  }


  return (
    <CommerceContext.Provider
      value={{
        buyProduct,
        uploadProduct,
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
