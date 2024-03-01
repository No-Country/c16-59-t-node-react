"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import "./AccordionCatalog.css";
import { SelectionProduct } from "./SelectionProduct.component";
import { ProductApi } from "@/app/interfaces/products";

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
  const renderProducts = (productList: Array<ProductApi>) => {
    return (
      <ul className="flex gap-1">
        {productList.map((product: ProductApi) => {
          const upperCaseProduct = {
            ...product,
            name: product.name.charAt(0).toUpperCase() + product.name.slice(1),
          };

          return (
            <li
              key={upperCaseProduct.id}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <SelectionProduct
                productId={upperCaseProduct.id}
                image={upperCaseProduct.image[0].url}
                name={upperCaseProduct.name}
                salesPresentation={upperCaseProduct.salesPresentation}
                price={upperCaseProduct.price}
                category={upperCaseProduct.category}
              >
                <div className="absolute bottom-5 backdrop-blur w-full text-center bg-white bg-opacity-50">
                  <strong className="text-xs">
                    $ {upperCaseProduct.price}
                  </strong>
                </div>
                <Image
                  className="max-w-none object-cover size-16 md:size-20 lg:size-24 aspect-auto m-auto"
                  src={upperCaseProduct.image[0].url}
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
