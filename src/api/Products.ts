import { AxiosResponse } from "axios";
import { IProductConfig } from "../constants";

import { API } from "../utils";

function ProductsAPI() {
  const endpoint = "/products";

  return {
    fetchAll: async ({
      queryKey,
    }: {
      queryKey: (string | IProductConfig)[];
    }): Promise<AxiosResponse> => {
      const params = queryKey[1];
      const response = await API.get(endpoint, { params });
      return response;
    },
    fetchCategories: async (): Promise<AxiosResponse> => {
      const response = await API.get(`${endpoint}/categories`);
      return response;
    },
  };
}

export default ProductsAPI();
