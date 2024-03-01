import { Button2 } from "@/app/components/Button2";
import {
  getFruitCatalog,
  getProcessedFoodsCatalog,
  getVegetablesCatalog,
} from "@/utils/fetchApi";
import { Title } from "../components";
import { Statement } from "../subscriptions/components";
import { AccordionCatalog } from "./components";
import { ProductApi } from "@/app/interfaces/products";

export default async function Subscriptions() {
  // aqui haz las peticiones para frutas, vegetales y productos envasados
  const fruits: ProductApi[] = await getFruitCatalog();
  const vegetables: ProductApi[] = await getVegetablesCatalog();
  const processedFoods: ProductApi[] = await getProcessedFoodsCatalog();
  // const productsEnvasados = await getProdComesCatalog();
  // console.log("frutas ?", fruits);
  // console.log("vegetales ?", vegetables);

  return (
    <div className="space-y-4">
      <Title>La Huerta Box - EXPRESS</Title>
      <div className="flex flex-col  ">
        <p className="font-semibold sm:px-6 text-xs lg:text-base mb-4">
          1. Escoge los productos que deseas clickeando sobre cada ítem:
        </p>

        <AccordionCatalog
          vegetables={vegetables}
          fruits={fruits}
          processedFoods={processedFoods}
        />
        <div className="w-full m-auto flex justify-center items-center gap-4 mt-4">
          <Button2 bgColor="secondary-orange" route="/">
            Anterior
          </Button2>
          <Button2 bgColor="primary-yellow" route="/products/quantity">
            Siguiente
          </Button2>
        </div>
      </div>
    </div>
  );
}
