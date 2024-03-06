import { DATA_USER } from "@/constants/data";

type User = {
  email: string;
  token: string;
};

// Función para setear el token
export const getToken = (): User => {
  const dataUser = localStorage.getItem("user");
  if (dataUser) {
    return JSON.parse(dataUser);
  }
  return {
    email: "",
    token: "",
  };
};

// Función para setear el token
export const setToken = () =>
  localStorage.setItem("user", JSON.stringify(DATA_USER));

// Función para remover el token
export const removeToken = () => localStorage.removeItem("user");
