"use client";

import { RouteBtn } from "@/app/components";
import { FormProduct } from "@/app/interfaces/form";
import { useState } from "react";

const INITIAL_VALUES: FormProduct = {
  name: "Luis Suarez",
  typeIdentification: "Cedula de Ciudadania",
  numberIdentification: 123456,
  email: "comprador123@gmail.com",
  direction: "Calle 2 # 3 - 4",
  district: "Las Azuleras",
  phone: 3112578933,
};

export const FormResume = () => {
  const [form, setForm] = useState<FormProduct>(INITIAL_VALUES);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="w-full grid grid-cols-2 gap-y-3 gap-x-3 md:gap-x-32 [&_span]:text-secondary-orange [&_span]:font-semibold [&_span]:text-xs [&_input]:text-xs [&_span]:md:text-base [&_input]:md:text-base [&_input]:px-2 [&_input]:py-1 [&_input]:max-w-4xl m-auto [&_input]:outline-none focus:[&_input]:border-gray-400 [&_input]:font-medium">
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
        <label htmlFor="typeIdentification" className="flex flex-col gap-2">
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
        <label htmlFor="numberIdentification" className="flex flex-col gap-2">
          <span>Numero de identificación</span>
          <input
            className="customInput border-2 border-gray-300"
            type="number"
            name="numberIdentification"
            placeholder="Ingresa tu número de identificación"
            value={form.numberIdentification}
            onChange={handleChange}
            onWheel={(e) => e.preventDefault()}
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
            className="customInput border-2 border-gray-300"
            type="number"
            name="phone"
            placeholder="Ingresa tu teléfono"
            value={form.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="col-span-2 text- w-full flex justify-center items-center [&_span_span]:text-sm [&_span_span]:text-black">
        <RouteBtn size="lg" bgColor="primary-yellow" route="/resume">
          Editar Datos
        </RouteBtn>
      </div>
    </div>
  );
};
