import { getProducts } from "@/utils/fetchApi";
import { ProductsApi } from "../interfaces/products";
import { Product } from ".";

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
        {products.map(({ id, image, name }: ProductsApi) => (
          <Product key={id} image={image} name={name} />
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
