import { ButtonC, Title } from "@/app/components";
import {
  getFruitCatalog,
  getProcessedFoodsCatalog,
  getVegetablesCatalog,
} from "@/utils/fetchApi";
import { AccordionCatalog } from "./components";
import { ProductApi } from "@/app/interfaces/products";

export default async function Subscriptions() {

 const greenColor = " bg-green-500";

  const [fruits, vegetables, processedFoods] = await Promise.all<
    Array<ProductApi>
  >([getFruitCatalog(), getVegetablesCatalog(), getProcessedFoodsCatalog()]);

  return (
    <div className="space-y-4">
      <Title>La Huerta Box - EXPRESS</Title>
      <div className="flex flex-col  ">
       
    <div className="mb-5">
        <p className="text-base sm:text-xl  font-bold sm:px-6">
       1. Escoge los productos que deseas clickeando sobre cada ítem:
      </p></div>
        

        <AccordionCatalog
          vegetables={vegetables}
          fruits={fruits}
          processedFoods={processedFoods}
        />
        <div className="w-full m-auto flex justify-center items-center gap-4 mt-4">
          <ButtonC bgColor="secondary-orange" route="/">
            Anterior
          </ButtonC>
          <ButtonC bgColor={"primary-yellow"} route="/products/quantity">
            Siguiente
          </ButtonC>
        </div>
      </div>
    </div>
  );
}
