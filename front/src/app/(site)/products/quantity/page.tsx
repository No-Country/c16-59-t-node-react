"use client";

import Image from "next/image";
import { Title } from "../../components";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ButtonStandard } from "@/app/components";

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

export default function Quantity() {
  return (
    <div className="space-y-4">
      <Title>
        La Huerta <span className="italic font-normal">Box</span> - EXPRESS
      </Title>
      <p className="font-semibold sm:px-6 text-xs lg:text-base">
        2. Escoge las cantidades a comprar
      </p>

      <Accordion
        variant="splitted"
        className="gap-6 sm:px-8"
        selectionMode="multiple"
        defaultExpandedKeys={["1", "2", "3"]}
      >
        <AccordionItem
          key="1"
          aria-label="Verduras de temporada"
          title="Verduras de temporada"
          // revisar con inspeccion los componentes
          className="group-[.is-splitted]:p-0 group-[.is-splitted]:rounded-none accordion-item"
        >
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
              </>
            ))}
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Frutas de temporada"
          title="Frutas de temporada"
          className="group-[.is-splitted]:p-0 group-[.is-splitted]:rounded-none accordion-item"
        >
          hola
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Procesados naturales"
          title="Procesados naturales"
          className="group-[.is-splitted]:p-0 group-[.is-splitted]:rounded-none accordion-item"
        >
          hola
        </AccordionItem>
      </Accordion>
      <div className="w-full m-auto flex justify-center items-center gap-4">
        <ButtonStandard secondary route="/products">
          Anterior
        </ButtonStandard>
        <ButtonStandard primary route="/products/delivery-options">
          Siguiente
        </ButtonStandard>
      </div>
    </div>
  );
}
