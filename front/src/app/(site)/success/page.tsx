"use client"
import { ButtonC, Title } from "@/app/components";
import Image from "next/image";
import { useState } from "react";
import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";
import './page.css';


// data para eliminar
const verduras = [
  {
    item: "Zanahoria(1000gr)",
    image:
      "https://phantom-marca.unidadeditorial.es/7937fb07c87d989a985bad544c17f7ca/resize/828/f/webp/assets/multimedia/imagenes/2023/09/05/16939288675740.jpg",
    cantidad: 2,
    precio: "$5000",
  },
  {
    item: "Remolacha(1000gr)",
    image:
      "https://phantom-marca.unidadeditorial.es/7937fb07c87d989a985bad544c17f7ca/resize/828/f/webp/assets/multimedia/imagenes/2023/09/05/16939288675740.jpg",
    cantidad: 2,
    precio: "$3000",
  },
];
const largeProps: ConfettiProps = {
  force: 0.8,
  duration: 3000,
  particleCount: 300,
  width: 1600,
  colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
};

export default function Success() {
  const [isLargeExploding, setIsLargeExploding] = useState(false);

  return (
    <div className="space-y-4">
      <Title>La Huerta Box - EXPRESS</Title>
      <div />

      <div className="m-auto flex flex-col justify-center items-center">
        <h4 className="text-secondary-orange text-xs sm:text-lg lg:text-2xl font-semibold">
          ¡Gracias por su compra!
        </h4>
        <div className="m-auto flex flex-col justify-center items-center ">
          <div /* className="text-start text-pretty text-xs sm:text-sm lg:text-base" */
          >
            Tu pedido se encuentra en proceso de validación.{" "}
          </div>

          <span>En breve recibirás un correo con el detalle de tu compra.</span>
        </div>
      </div>

      <div className="m-auto   ">
        <div>
          <strong>Comprador:</strong>
          <span>Luis Suarez</span>
        </div>
        <div>
          {" "}
          <strong>Dirección de entrega:</strong>Calle 2 # 3 - 4<span></span>
        </div>
        <div>
          <strong>Fecha de entrega:</strong>
          <span>08/03/24</span>
        </div>
        <div>
          {" "}
          <strong>Medio de pago:</strong>
          <span>Tarjeta Débito **** **** **** 0123</span>
        </div>
      </div>

      <div className="bg-secondary-orange">
        <strong>Pedido: 00001</strong> <span>Fecha de compra: 07/02/24</span>
      </div>
      <div className="w-full grid grid-cols-[auto_1fr_auto_auto] justify-center items-center gap-x-4">
        <p className="col-start-3">Cantidades</p>
        <p className="col-start-4">Precio</p>
        {verduras.map((verdura) => (
          <>
            <Image
              className="aspect-[4/3]"
              src={verdura.image}
              alt={verdura.item}
              width={50}
              height={33}
            />
            <p>{verdura.item}</p>
            <input
              type="number"
              className="m-auto w-16 text-center border-2 border-gray-300 bg-gray-100 focus:outline-tertiary-green"
              placeholder="0"
              defaultValue={verdura.cantidad}
            />
            <p className="text-center">{verdura.precio}</p>
            <p className="col-start-4">Total</p>
          </>
        ))}
      </div>

      <div className="m-auto flex flex-col justify-center items-center">
        <div className="m-auto flex flex-col justify-center items-center ">
          <div /* className="text-start text-pretty text-xs sm:text-sm lg:text-base" */
          >
            ¡Gracias por su apoyar nuestra labor!
          </div>

          <strong>Disfruta tu compra</strong>
        </div>
      </div>

      <div className="w-full m-auto flex justify-center items-center gap-4 mt-4">
        <ButtonC bgColor="tertiary-green" route="/">
          Volver al inicio
        </ButtonC></div>
        <button className="button" onClick={() => setIsLargeExploding(!isLargeExploding)}>
        {isLargeExploding && <ConfettiExplosion {...largeProps} />}
        <span>large</span>
      </button>
      </div>
  );
}
