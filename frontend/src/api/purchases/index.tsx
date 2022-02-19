import { api } from "../commerceAPI";

export const getPurchases = (idClient: string) =>
  api.get(`/purchases/${idClient}`).then((response) => response.data);
