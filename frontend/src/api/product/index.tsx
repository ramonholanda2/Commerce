import { SendProduct } from "../../types";
import { api } from "../commerceAPI";

export const getProducts = () => api.get("/products").then((resp) => resp.data);

export const deleteProduct = (idProduct: number) =>
  api.delete(`/products/delete/${idProduct}`).then((response) => response.data);

export const uploadProduct = (productData: SendProduct) =>
  api
    .post("/products", {
      name: productData.name,
      price: productData.price,
      urlImage: productData.urlImage,
    })
    .then(
      (resp) => resp.data
    );
