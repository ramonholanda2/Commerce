import { UpdateItem } from "../../components/Chart/Quantity/Quantity";
import { api } from "../commerceAPI";

export const updateItemByProduct = (product: UpdateItem) =>
  api
    .post(`/item/update/${product.idItem}`, { quantity: product.quantity })
    .then((response) => response.data); 