import { useAuthContext } from "../../contexts/AuthContext";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Quantity from "./Quantity/Quantity";
import { useCommerceContext } from "../../contexts/ComerceContext";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../index";
import spinningLoading from "../../assets/spinning-loading.gif";
import { useState } from "react";
import { getProductsByClient, removeProductForClient } from "../../api/productByClient";
import { getAddresses } from "../../api/address";

import {
  ChartContainer,
  ProductContainer,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductDetailsContainer,
  BuyProduct,
  Subtotal,
  BuyButton,
  DeleteButtom,
} from "./styles";

interface Product {
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

const Chart = () => {
  const [indexChart, setIndexChart] = useState<number>();
  const { user } = useAuthContext();
  const { setProductForPurchase } = useCommerceContext();
  const { push } = useHistory();

  const { data: addresses } = useQuery(
    ["addressesByClient", user?.id],
    () => getAddresses(user?.id!)
  );

  const {
    isLoading: isLoadingRemoveProductForClient,
    mutate: mutateRemoveProductForClient,
  } = useMutation(removeProductForClient, {
    onSuccess: () => {
      queryClient.invalidateQueries(["chartClient", user?.id!]);
    },
  });

  const { data: productsByClient, isLoading } = useQuery(
    ["chartClient", user?.id!],
    () => getProductsByClient(user?.id!),
    {
      staleTime: 60 * 60 * 1000,
    }
  );

  async function removeProductByClient(product: Product, index: number) {
    setIndexChart(index);
    product.idClient = user?.id!;
    mutateRemoveProductForClient(product);
  }

  async function buy(product: Product) {
    if(addresses.length === 0) {
      alert("adicione um endereço");
      return push("/enderecos")
    }

    await setProductForPurchase(user?.id!, product);
    push("/pagamento");
  }

  return isLoading || !user?.id ? (
    <h1>Carregando...</h1>
  ) : productsByClient.length === 0 ? (
    <h1 style={{ margin: "2rem 1rem" }}>
      Sem produtos adicione <a href="/">aqui</a>
    </h1>
  ) : (
    <ChartContainer>
      {productsByClient.map((product: Product, index: number) => (
        <ProductContainer index={index + 1} key={Number(product.id)}>
          <div style={{ display: "flex", width: "100%" }}>
            <ProductDetailsContainer>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductImage src={product.urlImage} alt={product.name} />
              <ProductPrice>
                Preço -{" "}
                {product.price.toLocaleString("pt-br", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}{" "}
                $
              </ProductPrice>
            </ProductDetailsContainer>
            <Quantity item={product.item} idProduct={product.id}></Quantity>
          </div>
          <BuyProduct>
            <Subtotal>
              {product.item.subtotal.toLocaleString("pt-br", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}{" "}
              $
            </Subtotal>
            <BuyButton onClick={() => buy(product)}>Comprar</BuyButton>
          </BuyProduct>
          <DeleteButtom onClick={() => removeProductByClient(product, index)}>
            {isLoadingRemoveProductForClient && index === indexChart ? (
              <img
                style={{ borderRadius: "100%", height: "42px" }}
                src={spinningLoading}
                alt="deleting"
              />
            ) : (
              <RiDeleteBin6Fill size="2rem" color="#dd1a1a" />
            )}
          </DeleteButtom>
        </ProductContainer>
      ))}
    </ChartContainer>
  );
};

export default Chart;
