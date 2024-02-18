import { URL_API } from "@/app/constants/data";

const fetchProducts = async (url: string) => {
  const res = await fetch(url);
  const products = await res.json();
  return products;
};

export const getProdCatalog = async () => fetchProducts(URL_API);

// export const getFruitCatalog = async () => fetchProducts(URL_API);

// export const getVegeCatalog = async () => fetchProducts(URL_API);

// export const getProdComesCatalog = async () => fetchProducts(URL_API);
