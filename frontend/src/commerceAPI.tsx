import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "https://milk-holanda.herokuapp.com/",
});

export const getProducts = () => api.get("/products").then((resp) => resp.data);

export const getAddresses = (idClient: string) =>
  api.get(`/address/${idClient}`).then((resp) => resp.data);

export const deleteAddressById = (id: number) =>
  api.delete(`/address/delete/${id}`);

export const updateAddressById = (
  idClient: string,
  address: AxiosRequestConfig
) =>
  api.delete(`/address/$update/${idClient}`, address).then((resp) => resp.data);
