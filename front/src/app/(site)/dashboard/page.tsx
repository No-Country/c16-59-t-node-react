//2da forma de renderizar: server side rendering
import { NavBar, Product } from "@/app/components";
import { Producto } from "@/app/interfaces/productos";

export default async function Dashboard() {
  const productos: Producto[] = await fetch(
    "https://api.escuelajs.co/api/v1/products"
  ).then((res) => res.json());

  return (
    <>
      <NavBar />
      {productos.map(({ id, title, price, category }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          category={category}
          images={category.image}
        />
      ))}
    </>
  );
}
