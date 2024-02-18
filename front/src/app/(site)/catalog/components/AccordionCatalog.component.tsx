"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

interface AccordionCatalogProps {
  products: Array<any>;
}

export const AccordionCatalog: React.FC<AccordionCatalogProps> = ({
  products,
}) => {
  const renderProducts = (tipoProduct: Array<any>) => {
    return (
      <ul className="flex gap-4">
        {tipoProduct.map((product: any) => (
          <li key={product.id}>
            <p className="text-xs">{product.title.substring(0, 10)}</p>
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Accordion variant="splitted">
        <AccordionItem
          key="1"
          aria-label="Verduras de temporada"
          title="Verduras de temporada"
        >
          {renderProducts(products)}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Frutas de temporada"
          title="Frutas de temporada"
        >
          {renderProducts(products)}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Procesos naturales"
          title="Procesos naturales"
        >
          {renderProducts(products)}
        </AccordionItem>
      </Accordion>
    </div>
  );
};
