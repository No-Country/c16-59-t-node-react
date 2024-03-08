import { CarProductI } from "@/app/interfaces/products";
import { getProducts } from "@/utils/fetchApi";
import { ModalBtn } from "../..";
import { Product } from "./Product.component";
import { ProductDetail } from "./ProductDetail";

export const Products = async () => {
  const products: CarProductI[] = await getProducts();
  console.log(Products)
  return (
    <div className="m-auto">
      <div className="products-totals group">
      <div
        className="products-item group-hover:paused py-4"
      >
        {products.map(({ id, image, name, price, description }: CarProductI) => (
          <ModalBtn key={id} btnContent={<ProductDetail id={id} name={name} description={description} image={image} price={price}/>}>
            <Product image={image} name={name} />
          </ModalBtn>
        ))}
      </div>
      </div>
    </div>
  );
};
