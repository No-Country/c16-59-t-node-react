import { useState, useCallback, useMemo, useContext } from "react";
import { OrderStateData, ProductData } from "../interfaces/context";
import { OrderContext } from "../context";

const INITIAL_VALUES: OrderStateData = {
  products: [],
  deliveryId: 0,
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
      ...currentProducts,
      products: [...currentProducts.products, product],
    }));
  }, []);

  const removeProduct = useCallback((id: string) => {
    setOrder((currentProducts: OrderStateData) => ({
      ...currentProducts,
      products: currentProducts.products.filter(
        ({ productId }) => productId !== id
      ),
    }));
  }, []);

  const updateProduct = useCallback(
    ({ productId, ...restOfModifiedProduct }: Partial<ProductData>) => {
      setOrder((currentProducts: OrderStateData) => ({
        ...currentProducts,
        products: [
          ...currentProducts.products.map((product) =>
            product.productId === productId
              ? { ...product, ...restOfModifiedProduct }
              : product
          ),
        ],
      }));
    },
    []
  );

  const setDelivery = useCallback((deliveryId: number) => {
    setOrder((currentProducts: OrderStateData) => ({
      ...currentProducts,
      deliveryId,
    }));
  }, []);

  return useMemo(
    () => ({ order, addProduct, removeProduct, updateProduct, setDelivery }),
    [order, addProduct, removeProduct, updateProduct, setDelivery]
  );
};
