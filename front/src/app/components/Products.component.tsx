import { getProducts } from "@/utils/fetchApi";
import { ProductsTotalApi } from "../interfaces/products";
import { Product } from ".";

export const Products = async () => {
  const products: ProductsTotalApi[] = await getProducts();

  const renderProducts = ({
    products,
    ariaHidden = false,
  }: {
    products: ProductsTotalApi[];
    ariaHidden?: boolean;
  }) => {
    return (
      <ul
        className="products-item group-hover:paused py-4"
        aria-hidden={ariaHidden}
      >
        {products.map(({ id, image, name }: ProductsTotalApi) => (
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
