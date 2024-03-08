import { Category } from '@/app/interfaces/AccordionProducts';
import { Accordion, AccordionItem } from '@nextui-org/react';
import React from 'react';
import ProductItem from './ProductItem';


interface AccordionCatalogProps {
  categories: Category[];
}

const AccordionCatalog: React.FC<AccordionCatalogProps> = ({ categories }) => {
  return (
      <Accordion className="accordion gap-6 sm:px-8" variant="splitted" selectionMode="multiple">
        {categories.map((category, index) => (
          <AccordionItem
            key={index}
            className="group-[.is-splitted]:p-0 group-[.is-splitted]:rounded-none accordion-item"
            title={category.name}
          >
            <ul className="flex gap-4">
              {category.products.map(product => (
                <ProductItem key={product.id} product={product} />
              ))}
            </ul>
          </AccordionItem>
        ))}
      </Accordion>
  );
};

export default AccordionCatalog;
