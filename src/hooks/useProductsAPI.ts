import { useQuery } from "react-query";

import { ProductsAPI } from "../api";
import { IProductConfig } from "../constants";

export function useProducts(config: IProductConfig) {
  return useQuery(["products", config], ProductsAPI.fetchAll);
}

export function useProductCategories() {
  return useQuery("productCategories", ProductsAPI.fetchCategories);
}
