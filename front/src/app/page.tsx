// 1era forma de renderizar
"use client";

import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Producto } from "./interfaces/productos";
import { Product } from "./components";

export default function Home() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <main>
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
    </main>
  );
}
