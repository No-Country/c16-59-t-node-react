"use client";

import { ButtonGeneral, RouteBtn, Title } from "@/app/components";
import { useOrder } from "@/app/hooks";
import {
  ButtonsGroupPayment,
  ElementResume,
  FetchIdDelivery,
  FormResume,
  OrderResume,
} from "./components";

export default function Resume() {
  const {
    order: { products, deliveryId },
  } = useOrder();

  return (
    <div className="space-y-6 m-auto">
      <Title size="lg" border icon color="secondary-orange">
        La Huerta Box - EXPRESS
      </Title>

      <div className="max-w-5xl mx-auto space-y-4">
        {/* <ElementResume title="Datos de Facturación">
          <FormResume />
        </ElementResume> */}

        <ElementResume title="Forma de entrega">
          {deliveryId ? (
            <div className="flex flex-col gap-3 justify-center items-center m-auto">
              <FetchIdDelivery deliveryId={deliveryId} />
            </div>
          ) : (
            <p className="text-xs md:text-base">No hay datos de envío</p>
          )}
          <div className="w-full m-auto flex justify-center items-center">
            <ButtonGeneral
              bgColor="primary-yellow"
              route="/products/delivery-options"
            >
              Cambiar
            </ButtonGeneral>
          </div>
        </ElementResume>

        <ElementResume title="Resumen de compra">
          {products.length ? (
            <OrderResume />
          ) : (
            <p className="text-xs md:text-base">No hay productos</p>
          )}
          <div className="w-full m-auto flex justify-center items-center">
            <RouteBtn size="lg" bgColor="primary-yellow" route="/products">
              Agregar mas productos
            </RouteBtn>
          </div>
        </ElementResume>

        <ElementResume title="Formas de pago">
          <ButtonsGroupPayment />
        </ElementResume>
      </div>
      <div className="w-full flex justify-center items-center m-auto">
        <RouteBtn
          size="lg"
          bgColor="secondary-orange"
          route="/products/delivery-options"
        >
          Anterior
        </RouteBtn>
      </div>
    </div>
  );
}
