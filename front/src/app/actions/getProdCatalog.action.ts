export const getProdCatalog = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
};
