export const getProdCatalog = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
};

export const getFruitCatalog = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
};

export const getVegeCatalog = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
};

export const getProdComesCatalog = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
};
