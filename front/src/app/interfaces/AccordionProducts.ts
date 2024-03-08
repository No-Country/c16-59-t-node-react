export interface Product {
  id: string;
  name: string;
  price: number;
  image: { id: number; url: string }[];
}

export interface Category {
  name: string;
  products: Product[];
}
