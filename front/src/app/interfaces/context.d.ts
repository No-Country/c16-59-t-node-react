import { Category } from "./products";

// -------------------------- Order Context --------------------------

export interface OrderStateData {
  products: ProductData[];
  deliveryId: number;
  total: number;
  payment: number;
  notes: string;
}

export interface ProductData {
  productId: string;
  image: string;
  name: string;
  salesPresentation: string;
  priceByUnit: number;
  subTotal: number;
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

// -------------------------- User Context --------------------------
export interface UserStateData {
  token: string;
  email: string;
}

export interface UserContextData {
  user: UserStateData;
  getTokenUser: () => void;
  removeTokenUser: () => void;
}
