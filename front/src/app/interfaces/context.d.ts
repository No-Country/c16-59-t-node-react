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
  deliveryId: number;
}

export interface ProductData {
  productId: string;
  image: string;
  name: string;
  salesPresentation: string;
  priceByUnit: number;
  totalByUnit: number;
  quantity: number;
  category: Category;
}

export interface OrderContextData {
  order: OrderStateData;
  addProduct: (product: ProductData) => void;
  removeProduct: (productId: string) => void;
  updateProduct: (modifiedProduct: Partial<ProductData>) => void;
  setDelivery: (deliveryId: number) => void;
}
