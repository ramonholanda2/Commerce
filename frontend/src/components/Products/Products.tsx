import axios from "axios";
import { useEffect, useState } from "react";
import {
  ProductsContainer,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  AddButton,
} from "./styles";
import { useCommerceContext } from "../../contexts/ComerceContext";
import { useAuthContext } from "../../contexts/AuthContext";

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

interface AllProducts {
  data: Product[];
}

const Products = () => {
  const { addProductForClient } = useCommerceContext();
  const { user } = useAuthContext();
  const [products, setProducts] = useState<AllProducts>();
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);
  const [tryGetProducts, setTryGetProducts] = useState<number>(0);

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
          <ProductContainer key={Number(product.id)}>
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
            <AddButton onClick={() => addProductForClient(user?.id, product)}>
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
