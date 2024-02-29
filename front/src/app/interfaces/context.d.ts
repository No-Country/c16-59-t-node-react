export interface UserStateData {
  token: string;
}

export interface UserContextData {
  user: UserStateData;
  getToken: () => void;
  setToken: () => void;
  removeToken: () => void;
}
