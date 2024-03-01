"use client";

import { useOrder } from "@/app/hooks";
import { Category } from "@/app/interfaces/products";
import { AccordionItem } from "@nextui-org/react";
import Image from "next/image";

interface RenderAccordionItemProps {
  id: string;
  ariaLabel: string;
  title: string;
  category: Category;
}

export const RenderAccordionItem: React.FC<RenderAccordionItemProps> = ({
  id,
  ariaLabel,
  title,
  category,
}) => {
  const { order } = useOrder();

  const productsByCategory = order?.products.filter(
    (product) => product.category === category
  );

  console.log("PRODUCTOS", productsByCategory);

  return (
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
  );
};
