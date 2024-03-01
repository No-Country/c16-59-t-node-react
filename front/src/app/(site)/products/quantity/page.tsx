"use client";

import { Title } from "../../components";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ButtonStandard } from "@/app/components";
import { RenderAccordionItem } from "./components/RenderAccordionItem.component";
import { PRODUCTS_CATEGORIES } from "@/constants/data";

export default function Quantity() {
  return (
    <div className="space-y-5">
      <Title>La Huerta Box - EXPRESS</Title>

      <p className="text-base sm:text-xl  font-bold sm:px-6">
        2. Escoge las cantidades a comprar
      </p>

      <Accordion
        variant="splitted"
        className="gap-6 sm:px-8"
        selectionMode="multiple"
        defaultExpandedKeys={PRODUCTS_CATEGORIES.map((category) => category.id)}
      >
        {PRODUCTS_CATEGORIES.map(({ id, ariaLabel, title, category }) => (
          // <RenderAccordionItem
          //   key={id}
          //   id={id}
          //   ariaLabel={ariaLabel}
          //   title={title}
          //   category={category}
          // />
          <AccordionItem
            key={id}
            aria-label={ariaLabel}
            title={title}
            className="group-[.is-splitted]:p-0 group-[.is-splitted]:rounded-none accordion-item [&_span]:text-sm [&_span]:sm:text-lg"
          >
            <div className="w-full grid grid-cols-[auto_1fr_auto_auto] justify-center items-center gap-x-4">
              <p className="col-start-3">Cantidades</p>
              <p className="col-start-4">Precio</p>
              {/* {productsByCategory.map(({ name, image, price, salesPresentation }) => (
              <>
                <Image
                  className="aspect-[4/3]"
                  src={image}
                  alt={name}
                  width={50}
                  height={33}
                />
                <p>
                  {name} &#40; {salesPresentation} &#41;
                </p>
                <input
                  type="number"
                  className="m-auto w-16 text-center border-2 border-gray-300 bg-gray-100 focus:outline-tertiary-green"
                  // value={quantity}
                  // onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  //   setQuantity(parseInt(evt.target.value, 10))
                  // }
                />
                <p className="text-center">$ {price}</p>
              </>
            ))} */}
            </div>
          </AccordionItem>
        ))}
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
