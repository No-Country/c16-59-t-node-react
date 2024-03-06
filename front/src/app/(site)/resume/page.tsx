"use client";

import { useOrder } from "@/app/hooks";
import { DELIVERY_OPTIONS } from "@/constants/data";
import { CardDelivery } from "../products/delivery-options/components/CardDelivery.components";
import { DeliveryOptions } from "@/app/interfaces/constants";
import {
  ButtonsGroupPayment,
  ElementResume,
  FormResume,
  OrderResume,
} from "./components";
import { ButtonC, Title } from "@/app/components";

export default function Resume() {
  const {
    order: { products, deliveryId },
  } = useOrder();

  const { id, title, description, image, titleButton } =
    DELIVERY_OPTIONS.find(({ id }) => id === deliveryId) ||
    ({} as DeliveryOptions);

  return (
    <div className="space-y-6 m-auto">
      <Title>La Huerta Box - EXPRESS</Title>

      <div className="max-w-5xl mx-auto space-y-4">
        <ElementResume title="Datos de Facturación">
          <FormResume />
        </ElementResume>

        <ElementResume title="Forma de entrega">
          {deliveryId ? (
            <div className="flex flex-col gap-3 justify-center items-center m-auto">
              <CardDelivery
                id={id}
                title={title}
                titleButton={titleButton}
                description={description}
                image={image}
                statusResume
              />
            </div>
          ) : (
            <p className="text-xs md:text-base">No hay datos de envío</p>
          )}
          <div className="w-full m-auto flex justify-center items-center">
            <ButtonC
              bgColor="primary-yellow"
              route="/products/delivery-options"
            >
              Cambiar
            </ButtonC>
          </div>
        </ElementResume>

        <ElementResume title="Resumen de compra">
          {products.length ? (
            <OrderResume />
          ) : (
            <p className="text-xs md:text-base">No hay productos</p>
          )}
          <div className="w-full m-auto flex justify-center items-center">
            <ButtonC bgColor="primary-yellow" route="/products">
              Agregar mas productos
            </ButtonC>
          </div>
        </ElementResume>

        {/* decirle a wagner que en el boton se tiene dar la posibilidad de abrir el modal */}
        <ElementResume title="Formas de pago">
          <ButtonsGroupPayment />
        </ElementResume>
      </div>
      <div className="w-full flex justify-center items-center m-auto">
        <ButtonC bgColor="secondary-orange" route="/products/delivery-options">
          Anterior
        </ButtonC>
      </div>
    </div>
  );
}
