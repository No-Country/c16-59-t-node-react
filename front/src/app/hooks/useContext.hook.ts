import { useState, useCallback, useMemo, useContext } from "react";
import { UserStateData } from "../interfaces/context";
import { UserContext } from "../context/User.context";

const INITIAL_VALUES: UserStateData = {
  token: "",
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserOrder must be used within a UserOrderProvider");
  }
  return context;
};

export const useUserContext = () => {
  const [user, setUser] = useState<UserStateData>(INITIAL_VALUES);

  // Función para actualizar el token
  const getToken = useCallback(() => {
    setUser((currentUser: UserStateData) => ({
      ...currentUser,
      token: JSON.parse(localStorage.getItem("token") || ""),
    }));
  }, []);

  // Función para setear el token
  const setToken = useCallback(
    () => localStorage.setItem("token", JSON.stringify("tokendelusuario")),
    []
  );

  // Función para setear el token
  const removeToken = useCallback(() => localStorage.removeItem("token"), []);

  return useMemo(
    () => ({ user, getToken, setToken, removeToken }),
    [user, getToken, setToken, removeToken]
  );
};
