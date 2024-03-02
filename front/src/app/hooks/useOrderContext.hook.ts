import { useState, useCallback, useMemo, useContext } from "react";
import { OrderStateData, ProductData } from "../interfaces/context";
import { OrderContext } from "../context";

const INITIAL_VALUES: OrderStateData = {
  products: [],
  deliveryId: 0,
  total: 0,
  payment: 10000,
  notes: "Notas o requerimientos especiales para el pedido o su entrega",
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
      total:
        currentProducts.total +
        (!currentProducts.products.length ? currentProducts.payment : 0) +
        product.totalByUnit,
    }));
  }, []);

  const removeProduct = useCallback((id: string) => {
    setOrder((currentProducts: OrderStateData) => ({
      ...currentProducts,
      products: currentProducts.products.filter(
        ({ productId }) => productId !== id
      ),
      total:
        currentProducts.total -
        (currentProducts.products.find(({ productId }) => productId === id)
          ?.totalByUnit || 0),
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
        total:
          currentProducts.total -
          (currentProducts.products.find(
            ({ productId: id }) => id === productId
          )?.totalByUnit || 0) +
          (restOfModifiedProduct.totalByUnit || 0),
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
