import { ButtonC, Title } from "@/app/components";
import {
  getFruitCatalog,
  getProcessedFoodsCatalog,
  getVegetablesCatalog,
} from "@/utils/fetchApi";
import { AccordionCatalog } from "./components";

export default async function Subscriptions() {
  // aqui haz las peticiones para frutas, vegetales y productos envasados
  const fruits: any = await getFruitCatalog();
  const vegetables: any = await getVegetablesCatalog();
  const processedFoods: any = await getProcessedFoodsCatalog();
  // const productsEnvasados = await getProdComesCatalog();
  console.log("frutas ?", fruits);
  console.log("vegetales ?", vegetables);

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
          <ButtonC bgColor="secondary-orange" route="/">
            Anterior
          </ButtonC>
          <ButtonC bgColor="primary-yellow" route="/products/quantity">
            Siguiente
          </ButtonC>
        </div>
      </div>
    </div>
  );
}
