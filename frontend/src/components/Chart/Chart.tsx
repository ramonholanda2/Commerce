import { useAuthContext } from "../../contexts/AuthContext";
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
} from "./styles";

const Chart = () => {
  const { user } = useAuthContext();

  return (
    <ChartContainer>
      {user?.products?.map((product) => (
        <ProductContainer key={Number(product.id)}>
          <div style={{display: "flex", width: "100%"}}>
            <ProductDetailsContainer>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductImage src="http://localhost:3000/static/media/milk.2e4981d1.png" />
              <ProductPrice>
                Preço -{" "}
                {product.price.toLocaleString("pt-br", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}{" "}
                $
              </ProductPrice>
            </ProductDetailsContainer>
            <Quantity item={product.item}></Quantity>
          </div>
          <BuyProduct>
            <Subtotal>
              {product.item.subtotal.toLocaleString("pt-br", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}{" "}
              $
            </Subtotal>
            <BuyButton>Comprar</BuyButton>
          </BuyProduct>
        </ProductContainer>
      ))}
    </ChartContainer>
  );
};

export default Chart;
