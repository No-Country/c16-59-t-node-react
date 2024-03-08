"use client";

import { RouteBtn, Title } from "@/app/components";
import { useOrder } from "@/app/hooks";
import { Category } from "@/app/interfaces/products";
import { PRODUCTS_CATEGORIES } from "@/constants/data";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { RenderAccordionItem } from "./components/RenderAccordionItem.component";

export default function Quantity() {
  const {
    order: { products, total },
  } = useOrder();

  const productsByCategory = (category: Category) =>
    products.filter((product) => product.category === category);

  return (
    <div className="space-y-5">
      <Title size="lg" border color="secondary-orange" weight="semibold" icon>La Huerta Box - EXPRESS</Title>

      <p className="text-base sm:text-xl font-bold sm:px-6">
        2. Escribe las cantidades a comprar en el cuadro de texto
      </p>

      <Accordion
        variant="splitted"
        className="gap-6 md:px-8"
        selectionMode="multiple"
        defaultExpandedKeys={PRODUCTS_CATEGORIES.map((category) => category.id)}
      >
        {PRODUCTS_CATEGORIES.map(({ id, ariaLabel, title, category }) => (
          <AccordionItem
            key={id}
            aria-label={ariaLabel}
            title={title}
            className="group-[.is-splitted]:p-0 group-[.is-splitted]:rounded-none accordion-item [&_span]:text-xs [&_span]:sm:text-base"
          >
            <div className="w-full grid grid-cols-[auto_1fr_auto_auto_auto_auto] justify-center items-center gap-x-2 md:gap-x-4 gap-y-2">
              {productsByCategory(category).length ? (
                <>
                  <p className="hidden md:inline col-start-3 font-semibold text-xs md:text-base">
                    Cantidades
                  </p>
                  <p className="md:hidden col-start-3 font-semibold text-xs md:text-base">
                    Cant.
                  </p>
                  <p className="hidden md:inline col-start-4 font-semibold text-xs md:text-base">
                    Precio unitario
                  </p>
                  <p className="md:hidden col-start-4 font-semibold text-xs md:text-base">
                    P. unit.
                  </p>
                  <p className="col-start-5 font-semibold text-xs md:text-base">
                    Subtotal
                  </p>
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
                <p className="col-start-1 text-xs md:text-base">
                  No hay productos
                </p>
              )}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="max-w-72 md:max-w-xl lg:max-w-4xl p-2 sm:p-3 w-full m-auto flex justify-end items-center border border-gray-200 px-0 md:px-8">
        <div className="flex gap-6 justify-between items-center md:px-6 *:font-bold *:text-sm *:md:text-base">
          <p>Total</p>
          <p>$ {total}</p>
        </div>
      </div>
      <div className="w-full m-auto flex justify-center items-center gap-4 mt-4">
        <RouteBtn size="lg" bgColor="secondary-orange" route="/products">
          Anterior
        </RouteBtn>
        <RouteBtn size="lg" bgColor="primary-yellow" route="/products/delivery-options">
          Siguiente
        </RouteBtn>
      </div>
    </div>
  );
}
