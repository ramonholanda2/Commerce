import { Product } from "../../components/Products/Products";
import { api } from "../commerceAPI";

export const getProductsByClient = (idClient: string) => {
  return api
    .get(`/products/get-products-by-client/${idClient}`)
    .then((response) => response.data);
};

export const addProductForClient = (product: Product) =>
  api
    .post("/client-product/add-product-by-client", {
      idClient: product.idClient,
      idProduct: product.id,
    })
    .then((resp) => resp.data);

export const removeProductForClient = (product: Product) =>
  api
    .delete("/client-product/remove-product-by-client", {
      data: {
        idClient: product.idClient,
        idProduct: product.id,
      },
    })
    .then((resp) => resp.data);
