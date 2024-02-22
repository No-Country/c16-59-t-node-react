import { getProducts } from "@/utils/fetchApi";
import Image from "next/image";
import { ProductsApi } from "../interfaces/products";

export const Products = async () => {
  const products: ProductsApi[] = await getProducts();

  return (
    <div className="m-auto">
      <div className="products-totals group">
        <ul className="products-item group-hover:paused ">
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
        <ul className="products-item group-hover:paused" aria-hidden="true">
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
      </div>
    </div>
  );
};
