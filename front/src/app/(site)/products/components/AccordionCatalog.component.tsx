"use client";

import { useOrder } from "@/app/hooks";
import { ProductApi } from "@/app/interfaces/products";
import { Accordion, AccordionItem } from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import "./AccordionCatalog.css";
import { SelectionProduct } from "./SelectionProduct.component";

interface AccordionCatalogProps {
  fruits: Array<ProductApi>;
  vegetables: Array<ProductApi>;
  processedFoods: Array<ProductApi>;
}

export const AccordionCatalog: React.FC<AccordionCatalogProps> = ({
  fruits,
  vegetables,
  processedFoods,
}) => {
  const { order } = useOrder();

  const renderProducts = (productList: Array<ProductApi>) => {
    return (
      <ul className="flex gap-1">
        {productList.map((product: ProductApi) => {
          const upperCaseProduct = {
            ...product,
            name: product.name.charAt(0).toUpperCase() + product.name.slice(1),
          };

          const statusChecked = order.products.some(
            ({ productId: id }) => id === upperCaseProduct.id
          );

          return (
            <li
              key={upperCaseProduct.id}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <SelectionProduct
                productId={upperCaseProduct.id}
                image={upperCaseProduct.image[0]}
                name={upperCaseProduct.name}
                salesPresentation={upperCaseProduct.salesPresentation}
                priceByUnit={upperCaseProduct.price}
                category={upperCaseProduct.category}
                statusChecked={statusChecked}
              >
                <div className="absolute bottom-5 backdrop-blur w-full text-center bg-white bg-opacity-50 z-10">
                  <strong className="text-xs">
                    $ {upperCaseProduct.price}
                  </strong>
                </div>
                <Image
                  className={clsx(
                    "max-w-none object-cover size-16 md:size-20 lg:size-24 aspect-auto m-auto hover:filter hover:brightness-110 hover:saturate-50 hover:opacity-30",
                    statusChecked &&
                      "filter brightness-110 saturate-50 opacity-30"
                  )}
                  src={upperCaseProduct.image[0]}
                  alt={upperCaseProduct.name}
                  width={250}
                  height={100}
                />

                <strong className="text-xs">
                  {upperCaseProduct.name.split(" ")[0]}
                </strong>
              </SelectionProduct>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <Accordion
        className="accordion gap-6 sm:px-8"
        variant="splitted"
        selectionMode="multiple"
        defaultExpandedKeys={["1", "2", "3"]}
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Vegetales de temporada"
          className="group-[.is-splitted]:p-0 group-[.is-splitted]:rounded-none accordion-item"
        >
          {renderProducts(vegetables)}
        </AccordionItem>

        <AccordionItem
          className="group-[.is-splitted]:p-0 group-[.is-splitted]:rounded-none accordion-item"
          key="2"
          aria-label="Accordion 2"
          title="Frutas de temporada"
        >
          {renderProducts(fruits)}
        </AccordionItem>

        <AccordionItem
          className="group-[.is-splitted]:p-0 group-[.is-splitted]:rounded-none accordion-item"
          key="3"
          aria-label="Accordion 3"
          title="Procesados naturales"
        >
          {renderProducts(processedFoods)}
        </AccordionItem>
      </Accordion>
    </div>
  );
};
