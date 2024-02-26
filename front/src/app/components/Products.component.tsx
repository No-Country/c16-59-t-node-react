import { getProducts } from "@/utils/fetchApi";
import Image from "next/image";
import { ProductsApi } from "../interfaces/products";

export const Products = async () => {
  const products: ProductsApi[] = await getProducts();

  const renderProducts = ({
    products,
    ariaHidden = false,
  }: {
    products: ProductsApi[];
    ariaHidden?: boolean;
  }) => {
    return (
      <ul
        className="products-item group-hover:paused py-4"
        aria-hidden={ariaHidden}
      >
        {products.map((product: ProductsApi) => (
          <li
            className="rounded-sm ml-4 overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            key={product.id}
          >
            <Image
              className="max-w-none size-24 sm:size-28 lg:size-32 aspect-auto object-cover transition-all duration-500 ease-in-out hover:scale-105"
              src={product.image[0]}
              alt={product.name}
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="m-auto">
      <div className="products-totals group">
        {renderProducts({ products })}
        {renderProducts({ products, ariaHidden: true })}
      </div>
    </div>
  );
};
