import { Product } from '@/app/interfaces/AccordionProducts';
import Image from 'next/image';
import React from 'react';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { name, price, image } = product;
  return (
    <li className="flex flex-col gap-2 justify-center items-center relative">
      <div className="absolute bottom-6 backdrop-blur w-full text-center">
        <strong className="text-xs">$ {price}</strong>
      </div>
      <Image
        className="max-w-none object-cover size-16 md:size-20 lg:size-24 aspect-auto"
        src={image[0].url}
        alt={name}
        width={250}
        height={100}
      />
      <strong className="text-xs">{name.split(" ")[0]}</strong>
    </li>
  );
};

export default ProductItem;
