import { useAuthContext } from "../../contexts/AuthContext";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Quantity from "./Quantity/Quantity";

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
import { useCommerceContext } from "../../contexts/ComerceContext";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

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

const Chart = () => {
  const { user } = useAuthContext();
  const {
    products,
    loadingProducts,
    setProductForPurchase,
    getProducts,
    removeProductForClient,
  } = useCommerceContext();

  const { push } = useHistory();

  async function buy(product: Product) {
    await setProductForPurchase(user?.id!, product);
    push("/pagamento");
  }
  useEffect(() => {
    if (user?.id !== undefined) {
      getProducts(user.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  return loadingProducts ? (
    <h1>Carregando...</h1>
  ) : products.length === 0 && !loadingProducts ? (
    <h1 style={{ margin: "2rem 1rem" }}>
      Sem produtos adicione <a href="/">aqui</a>
    </h1>
  ) : (
    <ChartContainer>
      {products.map((product) => (
        <ProductContainer key={Number(product.id)}>
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
          <DeleteButtom
            onClick={() => removeProductForClient(user?.id, product.id)}
          >
            <RiDeleteBin6Fill size="2rem" color="#dd1a1a" />
          </DeleteButtom>
        </ProductContainer>
      ))}
    </ChartContainer>
  );
};

export default Chart;
