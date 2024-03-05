"use client";

import { Title } from "../../components";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ButtonStandard } from "@/app/components";
import { RenderAccordionItem } from "./components/RenderAccordionItem.component";
import { PRODUCTS_CATEGORIES } from "@/constants/data";
import { useOrder } from "@/app/hooks";
import { Category } from "@/app/interfaces/products";

export default function Quantity() {
  const {
    order: { products },
  } = useOrder();

  const productsByCategory = (category: Category) =>
    products.filter((product) => product.category === category);

  return (
    <div className="space-y-5">
      <Title>La Huerta Box - EXPRESS</Title>

      <p className="text-base sm:text-xl  font-bold sm:px-6">
        2. Escribe las cantidades a comprar en el cuadro de texto
      </p>

      <Accordion
        variant="splitted"
        className="gap-6 sm:px-8"
        selectionMode="multiple"
        defaultExpandedKeys={PRODUCTS_CATEGORIES.map((category) => category.id)}
      >
        {PRODUCTS_CATEGORIES.map(({ id, ariaLabel, title, category }) => (
          <AccordionItem
            key={id}
            aria-label={ariaLabel}
            title={title}
            className="group-[.is-splitted]:p-0 group-[.is-splitted]:rounded-none accordion-item [&_span]:text-sm [&_span]:sm:text-lg"
          >
            <div className="w-full grid grid-cols-[auto_1fr_auto_auto_auto_auto] justify-center items-center gap-x-4 gap-y-2">
              {productsByCategory(category).length ? (
                <>
                  <p className="col-start-3 font-semibold">Cantidades</p>
                  <p className="col-start-4 font-semibold">Precio unitario</p>
                  <p className="col-start-5 font-semibold">Subtotal</p>
                  <p className="col-start-6"></p>
                  {productsByCategory(category).map(
                    ({
                      productId,
                      name,
                      image,
                      salesPresentation,
                      priceByUnit,
                      quantity,
                      subTotal,
                    }) => (
                      <RenderAccordionItem
                        key={productId}
                        productId={productId}
                        name={name}
                        image={image}
                        priceByUnit={priceByUnit}
                        salesPresentation={salesPresentation}
                        quantity={quantity}
                        subTotal={subTotal}
                        viewPriceUnit
                        viewCloseButton
                      />
                    )
                  )}
                </>
              ) : (
                <p className="col-start-1">No hay productos</p>
              )}
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
