import { Image } from "./products";
import { Price } from "./types";

export interface Product {
  id: string;
  name: string;
  price: Price;
  image: Image[];
}

export interface Category {
  name: string;
  products: Product[];
}
