"use client"
import { RouteBtn, Title } from "@/app/components";
import Image from "next/image";
import "./page.css";
import React from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

// import React from "react";

{
  /* <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>; */
}

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

export default function Success() {
  return (
    <>
    <div className="space-y-4">
      <Title size="lg" border color="secondary-orange" weight="semibold" icon>La Huerta Box - EXPRESS</Title>
      <div />

        <div className="border border-dashed border-green-500 hover:border-dotted pb-5 pt-10 px-40 ">
          <div className="nada">
            <div className="m-auto flex flex-col justify-center items-center  ">
              <h4 className="text-secondary-orange text-xs sm:text-lg lg:text-2xl font-semibold m-t">
                ¡Gracias por su compra!
              </h4>
              <div className="m-auto flex flex-col justify-center items-center ">
                <div /* className="text-start text-pretty text-xs sm:text-sm lg:text-base" */
                >
                  Tu pedido se encuentra en proceso de validación.{" "}
                </div>

                <span>
                  En breve recibirás un correo con el detalle de tu compra.
                </span>
              </div>
            </div>

            <div className="border border-dashed hover:border-dotted  border-orange-300 my-5 ">
              <div className="ml-5 w-45 p-5 ">
                <div>
                  <strong>Comprador: </strong>
                  <span>Luis Suarez</span>
                </div>
                <div>
                  {" "}
                  <strong>Dirección de entrega: </strong>Calle 2 # 3 - 4
                  <span></span>
                </div>
                <div>
                  <strong>Fecha estimada de entrega: </strong>
                  <span>08/03/24</span>
                </div>
                <div>
                  {" "}
                  <strong>Medio de pago: </strong>
                  <span>Tarjeta Débito **** **** **** 0123</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary-orange px-2 py-2 shadow-inner flex justify-between ">
              <strong>Pedido: 00001</strong>{" "}
              <span>Fecha de compra: 07/02/24</span>
            </div>
            
            <div className="w-full grid grid-cols-[auto_1fr_auto_auto] justify-center items-center gap-x-4 font-semibold  px-9">
              <p className="col-start-3">Cantidades</p>
              <p className="col-start-4">Precio</p>
              {verduras.map((verdura) => (
                <>
                  <Image
                    className="aspect-[4/3] "
                    src={verdura.image}
                    alt={verdura.item}
                    width={50}
                    height={33}
                  />
                  <p>{verdura.item}</p>
                  <span className="text-center font-semibold">
                    {verdura.cantidad}
                  </span>
                  {/* <input
                type="number"
                className="m-auto w-16 text-center border-2 border-gray-300 bg-gray-100 focus:outline-tertiary-green"
                placeholder="0"
                defaultValue={verdura.cantidad}
              /> */}
                  <p className="text-center">{verdura.precio}</p>
                </>
              ))}
            </div>


            <div className="ml-8">
              <div className="flex justify-between my-5">
                <span className="ml-10 ">Costo de Envío</span>
                <span className="mr-9">100000</span>
              </div>

              <div className="w-full grid grid-cols-[auto_1fr_auto_auto] justify-end items-center gap-x-4 font-semibold my-8  border border-dashed hover:border-dotted  border-orange-300 p-2">
              <strong className="ml-10 ">Total </strong>
              <strong> 26380</strong>
            </div>


            </div>

            <div></div>
           
          </div>

          <div className="m-auto flex flex-col justify-center items-center">
            <div className="m-auto flex flex-col justify-center items-center ">
              <div >
                ¡Gracias por su apoyar nuestra labor!
              </div>

              <strong>Disfruta tu compra</strong>
            </div>
          </div>
        </div>

        <div className="w-full m-auto flex justify-center items-center gap-4 mt-4 pt-8">
        <RouteBtn size="lg" bgColor="tertiary-green" route="/">
          Volver al inicio
        </RouteBtn>
        </div>
      </div>
      <Fireworks autorun={{ speed: 3, duration: 5000 }} />
    
      
    </>
  );
}
