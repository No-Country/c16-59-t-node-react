"use client";

import { createContext } from "react";
import { OrderContextData } from "../interfaces/context";
import { useOrderContext } from "../hooks";

export const OrderContext = createContext<OrderContextData | null>(null);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contextValue = useOrderContext();

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};
