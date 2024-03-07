import { RouteBtn, Title } from "@/app/components";
import { ProductApi } from "@/app/interfaces/products";
import {
  getFruitCatalog,
  getProcessedFoodsCatalog,
  getVegetablesCatalog,
} from "@/utils/fetchApi";
import { AccordionCatalog } from "./components";

export default async function Subscriptions() {
  const [fruits, vegetables, processedFoods] = await Promise.all<
    Array<ProductApi>
  >([getFruitCatalog(), getVegetablesCatalog(), getProcessedFoodsCatalog()]);

  return (
    <div className="space-y-4">
      <Title size="lg" border color="secondary-orange" weight="semibold" icon>La Huerta Box - EXPRESS</Title>
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
          <RouteBtn bgColor="secondary-orange" route="/" size="lg">
            Anterior
          </RouteBtn>
          <RouteBtn bgColor="primary-yellow" route="/products/quantity" size="lg">
            Siguiente
          </RouteBtn>
        </div>
      </div>
    </div>
  );
}
