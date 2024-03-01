import { useState, useCallback, useMemo, useContext } from "react";
import { OrderStateData, ProductData } from "../interfaces/context";
import { OrderContext } from "../context";

const INITIAL_VALUES: OrderStateData = {
  products: [],
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within a OrderProvider");
  }
  return context;
};

export const useOrderContext = () => {
  const [order, setOrder] = useState<OrderStateData>(INITIAL_VALUES);

  // Función para añadir producto
  const addProduct = useCallback((product: ProductData) => {
    setOrder((currentProducts: OrderStateData) => ({
      products: [...currentProducts.products, product],
    }));
  }, []);

  const removeProduct = useCallback((id: string) => {
    setOrder((currentProducts: OrderStateData) => ({
      products: currentProducts.products.filter(
        ({ productId }) => productId !== id
      ),
    }));
  }, []);

  return useMemo(
    () => ({ order, addProduct, removeProduct }),
    [order, addProduct, removeProduct]
  );
};
