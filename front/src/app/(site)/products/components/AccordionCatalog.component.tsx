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
        {productList.map((product: any) => (
          <li key={product.id}>
           
            <Image
              src={product.image[0].url}
              alt={product.name}
              width={100}
              height={100}
            />
             <strong className="text-xs">{product.name}</strong>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div  >
      <Accordion
        className="accordion "
        variant="splitted"
        selectionMode="multiple"
        defaultExpandedKeys={["1", "2", "3"]}
      >
        <AccordionItem key="1" aria-label="Accordion 1" title="Vegetales de temporada" className="group-[.is-splitted]:p-0 group-[.is-splitted]:rounded-none accordion-item">
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
