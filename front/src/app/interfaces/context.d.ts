import { Category } from "./products";

// -------------------------- Order Context --------------------------

export interface OrderStateData {
  products: ProductData[];
  deliveryId: string;
  total: number;
  payment: number;
  notes: string;
  goRouteResumeStatus?: boolean;
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
  setDelivery: (deliveryId: string) => void;
  setGoRouteResumeStatus: (goRouteResumeStatus: boolean) => void;
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
  showLogin: boolean;
  setShowLogin: (showLogin: boolean) => void;
}
