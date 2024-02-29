"use client";

import {
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo,
} from "react";
import {
  UserOrderContextData,
  UserOrderStateData,
} from "../interfaces/context";

const INITIAL_VALUES: UserOrderStateData = {
  token: "",
  productsId: [],
};

const UserOrderContext = createContext<UserOrderContextData | null>(null);

export const useUserOrder = () => {
  const context = useContext(UserOrderContext);
  if (!context) {
    throw new Error("useUserOrder must be used within a UserOrderProvider");
  }
  return context;
};

export const UserOrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userOrder, setUserOrder] =
    useState<UserOrderStateData>(INITIAL_VALUES);

  // Función para actualizar el token
  const getToken = useCallback(() => {
    setUserOrder((currentUser: UserOrderStateData) => ({
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

  // pasando el value
  const contextValue = useMemo(
    () => ({ userOrder, getToken, setToken, removeToken }),
    [userOrder, getToken, setToken, removeToken]
  );

  return (
    <UserOrderContext.Provider value={contextValue}>
      {children}
    </UserOrderContext.Provider>
  );
};
