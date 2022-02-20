import axios from "axios";

export const api = axios.create({
  baseURL: "https://milk-holanda.herokuapp.com/",
});