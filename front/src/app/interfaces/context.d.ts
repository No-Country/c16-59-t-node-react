export interface UserOrderStateData {
  token: string;
  productsId: string[];
}

export interface UserOrderContextData {
  userOrder: UserOrderStateData;
  getToken: () => void;
  setToken: () => void;
  removeToken: () => void;
}
