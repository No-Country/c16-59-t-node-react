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
  products: string[];
}

export interface OrderContextData {
  order: OrderStateData;
  addProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
}
