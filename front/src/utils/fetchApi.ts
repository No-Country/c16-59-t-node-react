import axios from "axios";
import { cache } from "react";
import {
  URL_API_FRUITS,
  URL_API_VEGETABLES,
  URL_API_PROCESSEDFOODS,
} from "@/constants/data";

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
