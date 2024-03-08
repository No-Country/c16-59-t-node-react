"use client";

import { createContext } from "react";
import { UserContextData } from "../interfaces/context";
import { useUserContext } from "../hooks";

export const UserContext = createContext<UserContextData | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contextValue = useUserContext();

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
