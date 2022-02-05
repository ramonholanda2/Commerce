import { useAuthContext } from "../../contexts/AuthContext";
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { queryClient } from "../../index";
import * as api from "../../commerceAPI";
import {
  ProductsContainer,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  AddButton,
} from "./styles";

export interface Product {
  idClient: string;
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

const Products = () => {
  const { user } = useAuthContext();
  const { data, isLoading, isError } = useQuery("allProducts", api.getProducts);
  const { push } = useHistory();

  const {
    mutate,
  } = useMutation(
    api.addProductForClient,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["chartClient", user?.id!]);
        push("/meus-produtos");
      },
      onError: () => {
        push("/meus-produtos");
      }
    }
  );

  function addProductClient(product: Product) {
    product.idClient = user?.id!;
    mutate(product);
  }

  if (isError) {
    throw new Error("erro ao carregar produtos");
  }

  return isLoading ? (
    <h1>Carregando...</h1>
  ) : data.length === 0 ? (
    <h1>Sem produtos</h1>
  ) : (
    <div style={{ marginTop: "2rem" }}>
      <ProductsContainer>
        {data.map((product: Product, index: number) => (
          <ProductContainer index={index + 1} key={Number(product.id)}>
            <ProductName>{product.name}</ProductName>
            <ProductImage src={product.urlImage} alt={product.name} />
            <ProductPrice>
              Preço -{" "}
              {product.price.toLocaleString("pt-br", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}{" "}
              $
            </ProductPrice>
            <AddButton onClick={() => addProductClient(product)}>
              Adicionar
            </AddButton>
            {/* <BuyButton onClick={() => buy(product)}>Comprar agora</BuyButton> */}
          </ProductContainer>
        ))}
      </ProductsContainer>
    </div>
  );
};

export default Products;
