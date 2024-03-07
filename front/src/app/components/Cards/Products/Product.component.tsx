"use client";

import Image from "next/image";

interface ProductProps {
  image: string[];
  name: string;
}

export const Product: React.FC<ProductProps> = ({ image, name }) => {
  return (
    <>
      <div className="rounded-sm ml-4 overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <Image
          className="max-w-none size-24 sm:size-28 lg:size-32 aspect-auto object-cover transition-all duration-500 ease-in-out hover:scale-105"
          src={image[0]}
          alt={name}
          width={200}
          height={200}
        />
      </div>
    </>
  );
};
