import { useAuthContext } from "../../contexts/AuthContext";
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { queryClient } from "../../index";
import { FaPlus } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdAutoDelete, MdDelete, MdEditOff } from "react-icons/md";
import * as api from "../../commerceAPI";
import {
  ProductsContainer,
  AddNewProduct,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  AddButton,
  EditProducts,
} from "./styles";
import { useState } from "react";

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
  const [editProducts, setEditProducts] = useState<boolean>(false);
  const [indexProduct, setIndexProduct] = useState<number>();
  const { data, isLoading, isError } = useQuery("allProducts", api.getProducts);
  const { push } = useHistory();

  const { mutate } = useMutation(api.addProductForClient, {
    onSuccess: () => {
      queryClient.invalidateQueries(["chartClient", user?.id!]);
      push("/meus-produtos");
    },
    onError: () => {
      push("/meus-produtos");
    },
  });

  const { mutate: deleteProduct, isLoading: isDeletingProduct } = useMutation(
    api.deleteProduct,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("allProducts");
      },
    }
  );

  function addProductClient(product: Product) {
    product.idClient = user?.id!;
    mutate(product);
  }

  function deleteProductInterface(idProduct: Long, index: number) {
    setIndexProduct(index);
    deleteProduct(Number(idProduct));
  }

  if (isError) {
    throw new Error("erro ao carregar produtos");
  }

  return isLoading ? (
    <h1>Carregando...</h1>
  ) : data.length === 0 ? (
    <ProductsContainer style={{ marginTop: "2rem" }}>
      <h1 style={{ position: "absolute", top: "0rem" }}>Sem produtos</h1>
      {user?.admin && (
        <>
          <AddNewProduct to="/upload">
            <FaPlus style={{ cursor: "pointer" }} size="2rem" />
          </AddNewProduct>
          <EditProducts onClick={() => setEditProducts(!editProducts)}> 
            {editProducts ? (
              <MdEditOff style={{ cursor: "pointer" }} size="2rem" />
            ) : (
              <AiTwotoneEdit style={{ cursor: "pointer" }} size="2rem" />
            )}
          </EditProducts>
        </>
      )}
    </ProductsContainer>
  ) : (
    <div style={{ marginTop: "2rem" }}>
      <ProductsContainer>
        {user?.admin && (
          <>
            <AddNewProduct to="/upload">
              <FaPlus style={{ cursor: "pointer" }} size="2rem" />
            </AddNewProduct>
            <EditProducts onClick={() => setEditProducts(!editProducts)}>
              {editProducts ? (
                <MdEditOff style={{ cursor: "pointer" }} size="2rem" />
              ) : (
                <AiTwotoneEdit style={{ cursor: "pointer" }} size="2rem" />
              )}
            </EditProducts>
          </>
        )}
        {data.map((product: Product, index: number) => (
          <ProductContainer index={index + 1} key={Number(product.id)}>
            <ProductName>{product.name}</ProductName>
            {editProducts &&
              (isDeletingProduct && indexProduct === index ? (
                <MdAutoDelete
                  size={"1.5rem"}
                  style={{
                    position: "absolute",
                    right: "5px",
                    color: "purple",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <MdDelete
                  style={{
                    position: "absolute",
                    right: "5px",
                    color: "purple",
                    cursor: "pointer",
                  }}
                  size="1.5rem"
                  onClick={() => deleteProductInterface(product.id, index)}
                />
              ))}
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
