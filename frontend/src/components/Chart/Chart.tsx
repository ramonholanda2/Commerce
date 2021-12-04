import { useAuthContext } from "../../contexts/AuthContext";
import {RiDeleteBin6Fill} from "react-icons/ri";
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
  DeleteButtom
} from "./styles";
import { useCommerceContext } from "../../contexts/ComerceContext";

const Chart = () => {

  const { user } = useAuthContext();
  const { removeProductForClient } = useCommerceContext();

  return user?.products?.length === 0 ? (
    <h1 style={{margin: "2rem 1rem"}}>Sem produtos adicione <a href="/">aqui</a></h1>
  ) : (
    <ChartContainer>
      {user?.products?.map((product) => (
        <ProductContainer key={Number(product.id)}>
          <div style={{ display: "flex", width: "100%" }}>
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
          <DeleteButtom onClick={() => removeProductForClient(user.id, product.id)}>
            <RiDeleteBin6Fill size="2rem" color="#dd1a1a"/>
          </DeleteButtom>
        </ProductContainer>
      ))}

    </ChartContainer>
  );
};

export default Chart;