"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import "./AccordionCatalog.css";
interface AccordionCatalogProps {
  fruits: Array<any>;
  vegetables: Array<any>;
  processedFoods: Array<any>;
}

export const AccordionCatalog: React.FC<AccordionCatalogProps> = ({
  fruits,
  vegetables,
  processedFoods,
}) => {
  const renderProducts = (productList: Array<any>) => {
    return (
      <ul className="flex gap-4">
        {productList.map((product: any) => {
          console.log(product);

          const upperCaseProduct = {
            ...product,
            name: product.name.charAt(0).toUpperCase() + product.name.slice(1),
          };
          return (
            <li
              key={upperCaseProduct.id}
              className="flex flex-col gap-2 justify-center items-center relative"
            >
              <div className="absolute bottom-6 backdrop-blur w-full text-center  bg-white bg-opacity-50">
                <strong className="text-xs">$ {upperCaseProduct.price}</strong>
              </div>
              <Image
                className="max-w-none object-cover size-16 md:size-20 lg:size-24 aspect-auto"
                src={upperCaseProduct.image[0].url}
                alt={upperCaseProduct.name}
                width={250}
                height={100}
              />
              <strong className="text-xs">
                {upperCaseProduct.name.split(" ")[0]}
              </strong>
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
          className="group-[.is-splitted]:p-0 group-[.is-splitted]:rounded-none accordion-item"
          aria-label="Accordion 1"
          title="Vegetales de temporada"
        >
          {renderProducts(vegetables)}
        </AccordionItem>

        <AccordionItem
          key="2"
          className="group-[.is-splitted]:p-0 group-[.is-splitted]:rounded-none accordion-item"
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
