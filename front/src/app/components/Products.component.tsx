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
      <ul className="products-item group-hover:paused" aria-hidden={ariaHidden}>
        {products.map((product: ProductsApi) => (
          <li key={product.id}>
            <Image
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
