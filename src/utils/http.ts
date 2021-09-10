import axios from "axios";

export const BASE_URL = "https://fakestoreapi.com";
export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
