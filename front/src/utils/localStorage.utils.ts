import { DATA_USER } from "@/constants/data";

type User = {
  email: string;
  token: string;
};

// Función para setear el token
export const getToken = (): User => {
  const dataUser = localStorage.getItem("user");
  console.log("VER QUE ME TRAE", dataUser);

  if (dataUser) {
    return JSON.parse(dataUser);
  }
  return {
    email: "",
    token: "",
  };
};

// Función para setear el token
export const setToken = (token: string) =>
  localStorage.setItem(
    "user",
    JSON.stringify({
      token,
      email: DATA_USER.email,
    })
  );

// Función para remover el token
export const removeToken = () => localStorage.removeItem("user");
