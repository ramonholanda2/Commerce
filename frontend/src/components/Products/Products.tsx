import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ProductsContainer,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  BuyButton,
  AddButton,
} from "./styles";
import { useCommerceContext } from "../../contexts/ComerceContext";
import { useAuthContext } from "../../contexts/AuthContext";

interface Product {
  id: Long;
  name: string;
  price: Number;
}

interface AllProducts {
  data: Product[];
}

const Products = () => {
  const { addProductForClient } = useCommerceContext();
  const { user } = useAuthContext();
  const [products, setProducts] = useState<AllProducts>();
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);
  const [tryGetProducts, setTryGetProducts] = useState<number>(0);
  const { push } = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      push("/login");
    }
  }, [push]);

  useEffect(() => {
    axios
      .get("https://milk-holanda.herokuapp.com/products")
      .then((result) => {
        setProducts(result);
        setLoadingProducts(false);
      })
      .catch((error) => {
        if (tryGetProducts < 2)
          setTimeout(() => setTryGetProducts(tryGetProducts + 1), 1000);
        else throw new Error("Erro ao carregar produtos! " + error.message);
      });
  }, [tryGetProducts]);

  return loadingProducts ? (
    <h1>Carregando...</h1>
  ) : products?.data.length === 0 ? (
    <h1>Sem produtos</h1>
  ) : (
    <div style={{ marginTop: "2rem" }}>

    <ProductsContainer>
      {products?.data.map((product) => (
        <ProductContainer  key={Number(product.id)}>
          <ProductName>{product.name}</ProductName>
          <ProductImage
            src="data:image/jpeg;base64,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"
            alt={product.name}
          />
          <ProductPrice>
            Preço -{" "}
            {product.price.toLocaleString("pt-br", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}{" "}
            $
          </ProductPrice>
          <AddButton onClick={() => addProductForClient(user?.id, product)}>
            Adicionar
          </AddButton>
          <BuyButton>Comprar agora</BuyButton>
        </ProductContainer>
      ))}
    </ProductsContainer>
    </div>
  );
};

export default Products;
