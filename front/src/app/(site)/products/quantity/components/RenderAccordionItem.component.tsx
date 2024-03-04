"use client";

import { CloseButtonResume } from "@/app/(site)/resume/components";
import { useOrder } from "@/app/hooks";
import clsx from "clsx";
import Image from "next/image";

interface RenderAccordionItemProps {
  productId: string;
  name: string;
  image: string;
  salesPresentation: string;
  quantity: number;
  priceByUnit: number;
  totalByUnit: number;
  readOnly?: boolean;
}

export const RenderAccordionItem: React.FC<RenderAccordionItemProps> = ({
  productId,
  name,
  image,
  priceByUnit,
  salesPresentation,
  quantity,
  totalByUnit,
  readOnly,
}) => {
  const { updateProduct } = useOrder();

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    let valueNumber = parseInt(value, 10);

    (valueNumber < 1 || isNaN(valueNumber)) && (valueNumber = 1);

    updateProduct({
      productId,
      quantity: valueNumber,
      totalByUnit: priceByUnit * valueNumber,
    });
  };

  return (
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
        min={1}
        className={clsx(
          `m-auto w-16 text-center border-2 border-gray-300 bg-gray-100 focus:outline-tertiary-green`
          // readOnly ? "cursor-not-allowed focus:outline-0" : "cursor-pointer"
        )}
        value={quantity}
        onChange={handleChange}
        // readOnly={readOnly}
      />
      <p className="text-center pr-4">$ {totalByUnit}</p>
      <CloseButtonResume productId={productId} />
    </>
  );
};
