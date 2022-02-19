import { Address } from "../../types";
import { api } from "../commerceAPI";

export const addAddress = (address: Address) =>
  api
    .post(`/address/save/${address.clientId}`, address)
    .then((resp) => resp.data);

export const updateAddress = (address: Address) =>
  api
    .put(`/address/update/${address.clientId}`, address)
    .then((response) => response.data);

export const getAddresses = (idClient: string) =>
  api.get(`/address/${idClient}`).then((resp) => resp.data);

export const deleteAddressById = (id: number) =>
  api.delete(`/address/delete/${id}`);
