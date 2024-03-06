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
  subTotal: number;
  readOnly?: boolean;
  viewPriceUnit?: boolean;
  viewCloseButton?: boolean;
}

export const RenderAccordionItem: React.FC<RenderAccordionItemProps> = ({
  productId,
  name,
  image,
  priceByUnit,
  salesPresentation,
  quantity,
  subTotal,
  readOnly,
  viewPriceUnit,
  viewCloseButton,
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
      subTotal: priceByUnit * valueNumber,
    });
  };

  return (
    <>
      <Image
        className="max-w-none w-10 md:w-auto aspect-[4/3]"
        src={image}
        alt={name}
        width={50}
        height={33}
      />
      <p className="hidden md:inline font-semibold text-xs md:text-base">
        {name} &#40; {salesPresentation} &#41;
      </p>
      <p className="md:hidden font-semibold text-xs md:text-base">
        {name.split(" ")[0]}
      </p>
      <input
        type="number"
        min={1}
        className={clsx(
          `m-auto w-10 md:w-16 text-center border-2 border-gray-300 bg-gray-100 focus:outline-tertiary-green text-xs md:text-base`,
          readOnly ? "cursor-not-allowed focus:outline-0" : "cursor-pointer"
        )}
        value={quantity}
        onChange={handleChange}
        readOnly={readOnly}
      />
      {viewPriceUnit && (
        <p className="text-center text-xs md:text-base">$ {priceByUnit}</p>
      )}
      <p className="text-right pr-4 text-xs md:text-base">$ {subTotal}</p>
      {viewCloseButton && <CloseButtonResume productId={productId} />}
    </>
  );
};
