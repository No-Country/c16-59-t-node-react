import { Category } from "./products";

export interface UserStateData {
  token: string;
}

export interface UserContextData {
  user: UserStateData;
  getToken: () => void;
  setToken: () => void;
  removeToken: () => void;
}

export interface OrderStateData {
  products: ProductData[];
}

interface ProductData {
  productId: string;
  image: string;
  name: string;
  salesPresentation: string;
  price: number;
  quantity?: number;
  category: Category;
}

export interface OrderContextData {
  order: OrderStateData;
  addProduct: (product: ProductData) => void;
  removeProduct: (productId: string) => void;
}
