"use client";

import { Button2 } from "@/app/components/Button2";
import { useOrder } from "@/app/hooks";

export const ButtonOptions = () => {
  const {
    order: { statusUpdateProdToResume },
    updatedProductsToResume,
  } = useOrder();

  return (
    <Button2
      bgColor="primary-yellow"
      route={statusUpdateProdToResume ? "/resume" : "/products/quantity"}
    >
      {/* esta para editar esto */}
      <button className="p-0 m-0 w-full" onClick={updatedProductsToResume}>
        Siguiente
      </button>
    </Button2>
  );
};
