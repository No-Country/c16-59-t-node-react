import { LoginResponse } from "@/app/interfaces/login";
import { URL_API_PRODUCTS, URL_AUTH_LOGIN } from "@/constants/api";
import {
  URL_API_FRUITS,
  URL_API_PROCESSEDFOODS,
  URL_API_VEGETABLES,
} from "@/constants/data";
import axios from "axios";
import { cache } from "react";

// se puede refactorizar todo este codigo:
export const getFruitCatalog = cache(async () => {
  const fruitResponse = await axios.get(URL_API_FRUITS);
  return fruitResponse.data;
});

export const getVegetablesCatalog = cache(async () => {
  const vegetablesResponse = await axios.get(URL_API_VEGETABLES);
  return vegetablesResponse.data;
});

export const getProcessedFoodsCatalog = cache(async () => {
  const processedFoodsResponse = await axios.get(URL_API_PROCESSEDFOODS);
  return processedFoodsResponse.data;
});

export const getProducts = cache(async () => {
  const { data } = await axios(URL_API_PRODUCTS);
  return data;
});

export const getDataUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const res = await fetch(URL_AUTH_LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  return data;
};
