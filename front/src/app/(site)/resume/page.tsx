"use client";

import { useOrder } from "@/app/hooks";
import { Title } from "../components";
import { useState } from "react";
import { FormProduct } from "@/app/interfaces/form";
import { Button2 } from "@/app/components/Button2";
import { DELIVERY_OPTIONS } from "@/constants/data";
import { CardDelivery } from "../products/delivery-options/components/CardDelivery.components";
import { RenderAccordionItem } from "../products/quantity/components/RenderAccordionItem.component";
import { DeliveryOptions } from "@/app/interfaces/constants";

const INITIAL_VALUES = {
  name: "",
  typeIdentification: "",
  numberIdentification: 0,
  email: "",
  direction: "",
  district: "",
  phone: 0,
};

export default function Resume() {
  const { order } = useOrder();

  const { id, title, description, image, titleButton } =
    DELIVERY_OPTIONS.find(({ id }) => id === order.deliveryId) ||
    ({} as DeliveryOptions);

  const [form, setForm] = useState<FormProduct>(INITIAL_VALUES);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="space-y-6">
      <Title>La Huerta Box - Express</Title>

      <div className="max-w-5xl mx-auto space-y-4">
        <div className="flex flex-col gap-4 justify-center items-center mx-auto">
          <h1 className="bg-primary-yellow px-3 py-2 font-semibold w-full">
            Datos de Facturación
          </h1>
          <div className="w-full grid grid-cols-2 gap-36 [&_span]:text-secondary-orange [&_span]:font-semibold [&_span]:text-sm [&_input]:text-sm [&_input]:px-2 [&_input]:py-1 [&_input]: max-w-4xl m-auto [&_input]:outline-none focus:[&_input]:border-gray-400 [&_input]:font-medium">
            <div className="space-y-3">
              <label htmlFor="name" className="flex flex-col gap-2">
                <span>Nombre Completo</span>
                <input
                  className="border-2 border-gray-300"
                  type="text"
                  name="name"
                  placeholder="Ingresa tu nombre"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
              <label
                htmlFor="typeIdentification"
                className="flex flex-col gap-2"
              >
                <span>Tipo de Identificación</span>
                <input
                  className="border-2 border-gray-300"
                  type="text"
                  name="typeIdentification"
                  placeholder="Ingresa tu tipo de identificación"
                  value={form.typeIdentification}
                  onChange={handleChange}
                />
              </label>
              <label
                htmlFor="numberIdentification"
                className="flex flex-col gap-2"
              >
                <span>Numero de identificación</span>
                <input
                  className="border-2 border-gray-300"
                  type="number"
                  name="numberIdentification"
                  placeholder="Ingresa tu número de identificación"
                  value={form.numberIdentification}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="email" className="flex flex-col gap-2">
                <span>Correo Electrónico</span>
                <input
                  className="border-2 border-gray-300"
                  type="text"
                  name="email"
                  placeholder="Ingresa tu correo electrónico"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="space-y-3">
              <label htmlFor="direction" className="flex flex-col gap-2">
                <span>Dirección</span>
                <input
                  className="border-2 border-gray-300"
                  type="text"
                  name="direction"
                  placeholder="Ingresa tu dirección"
                  value={form.direction}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="district" className="flex flex-col gap-2">
                <span>Barrio</span>
                <input
                  className="border-2 border-gray-300"
                  type="text"
                  name="district"
                  placeholder="Ingresa tu barrio"
                  value={form.district}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="phone" className="flex flex-col gap-2">
                <span>Teléfono</span>
                <input
                  className="border-2 border-gray-300"
                  type="text"
                  name="phone"
                  placeholder="Ingresa tu teléfono"
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <Button2 bgColor="primary-yellow" route="/register">
            Editar Datos
          </Button2>
        </div>
        <div className="m-auto">
          <h1 className="bg-primary-yellow px-3 py-2 font-semibold w-full">
            Datos de Facturación
          </h1>
          {order.deliveryId ? (
            <CardDelivery
              id={id}
              title={title}
              titleButton={titleButton}
              description={description}
              image={image}
              statusResume
            />
          ) : (
            <p>No hay datos de envío</p>
          )}
        </div>
        <div className="m-auto">
          <h1 className="bg-primary-yellow px-3 py-2 font-semibold w-full">
            Resumen de compra
          </h1>
          <div className="m-auto w-full grid grid-cols-[auto_1fr_auto_auto] justify-center items-center gap-x-4 gap-y-2">
            {order.products.length ? (
              <>
                <p className="col-start-3">Cantidades</p>
                <p className="col-start-4">Precio</p>
                {order.products.map(
                  ({
                    productId,
                    name,
                    image,
                    salesPresentation,
                    priceByUnit,
                    quantity,
                    totalByUnit,
                  }) => (
                    <RenderAccordionItem
                      key={productId}
                      productId={productId}
                      name={name}
                      image={image}
                      priceByUnit={priceByUnit}
                      salesPresentation={salesPresentation}
                      quantity={quantity}
                      totalByUnit={totalByUnit}
                      readOnly={true}
                    />
                  )
                )}
              </>
            ) : (
              <p className="col-start-1">No hay productos</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
