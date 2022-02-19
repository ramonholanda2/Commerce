import { api } from "../commerceAPI"

export const getProducts = () => api.get("/products").then((resp) => resp.data);

export const deleteProduct = (idProduct: number) => api.delete(`/products/delete/${idProduct}`).then(response => response.data);
