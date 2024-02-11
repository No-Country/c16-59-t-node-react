import { Producto } from "@/app/interfaces/productos";
import Image from "next/image";

export const Product: React.FC<Producto> = ({
  id,
  title,
  price,
  category,
  images,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>
      <Image src={images} alt={title} width={200} height={200} />
    </div>
  );
};
