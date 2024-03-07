import { RouteBtn, Title } from "@/app/components";
import {
  getFruitCatalog,
  getProcessedFoodsCatalog,
  getVegetablesCatalog,
} from "@/utils/fetchApi";

import { AccordionCatalog } from "./components";

export default async function CatalogPage() {
  // aqui haz las peticiones para frutas, vegetales y productos envasados
  const fruits: any = await getFruitCatalog();
  const vegetables: any = await getVegetablesCatalog();
  const processedFoods: any = await getProcessedFoodsCatalog();
  // const productsEnvasados = await getProdComesCatalog();
  console.log("frutas donde estas?", fruits);
  console.log("vegetales donde estas?", vegetables);

  return (
    <>
      <Title size="lg" border color="secondary-orange" weight="semibold" icon>Productos del Mes</Title>
      <AccordionCatalog
        vegetables={vegetables}
        fruits={fruits}
        processedFoods={processedFoods}
      />
    <div className="w-full m-auto flex justify-center items-center gap-4 mt-4">
          <RouteBtn size="lg" bgColor="primary-yellow" route="/">
            Volver al inicio
          </RouteBtn>
          
        </div>
    </>
  );
}
