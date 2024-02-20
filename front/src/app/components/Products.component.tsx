import Image from "next/image";
import { getFruitCatalog } from "@/utils/fetchApi";

export const Products = async () => {
  const products = await getFruitCatalog();
  return (
    // Infinite Horizontal Scroll Animation stop mouseover
    // documentacion - informacion:
    // https://tailwindcss.com/blog/tailwindcss-v3-4#style-children-with-the-variant
    // https://www.builder.io/blog/scrolling-logo-animation-tailwindcss
    // https://codepen.io/wschern/pen/gMXwMa
    // https://stackoverflow.com/questions/59404946/css-animation-endless-horizontal-scroller-pause-on-mouseover
    // https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/
    // https://cruip-tutorials.vercel.app/logo-carousel/

    // editar el tiempo segun la cantidad de productos animate-infinite-scroll en tailwind.config.js
    <div className="m-auto">
      <div className="products-totals group">
        <ul className="products-item group-hover:paused ">
          {products.map((product: any) => (
            <li key={product.id}>
              <Image
                src={product.pictureUrl}
                alt={product.title}
                width={200}
                height={200}
              />
            </li>
          ))}
        </ul>
        <ul className="products-item group-hover:paused" aria-hidden="true">
          {products.map((product: any) => (
            <li key={product.id}>
              <Image
                src={product.pictureUrl}
                alt={product.title}
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
