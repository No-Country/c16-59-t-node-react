import Image from "next/image";

export const Products = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    // Infinite Horizontal Scroll Animation stop mouseover
    // documentacion - informacion:
    // https://tailwindcss.com/blog/tailwindcss-v3-4#style-children-with-the-variant
    // https://codepen.io/wschern/pen/gMXwMa
    // https://stackoverflow.com/questions/59404946/css-animation-endless-horizontal-scroller-pause-on-mouseover
    // https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/
    // https://cruip-tutorials.vercel.app/logo-carousel/

    // editar el tiempo segun la cantidad de productos animate-infinite-scroll en tailwind.config.js
    <div className="w-full inline-flex flex-nowrap overflow-hidden">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {products.map((product: any) => (
          <li key={product.id} className="hover:[animation-play-state:paused]">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {products.map((product: any) => (
          <li key={product.id} className="hover:[animation-play-state:paused]">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
