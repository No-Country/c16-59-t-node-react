import { ButtonC, Title } from "@/app/components";
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
      <Title>Productos del Mes</Title>

        <p className="text-base sm:text-xl  font-bold sm:px-6">
        Encuentra nuestros productos disponibles a esta temporada, aquí.
      </p>

      <AccordionCatalog
        vegetables={vegetables}
        fruits={fruits}
        processedFoods={processedFoods}
      />
    <div className="w-full m-auto flex justify-center items-center gap-4 mt-4">
          <ButtonC bgColor="primary-yellow" route="/">
            Volver al inicio
          </ButtonC>
          
        </div>
    </>
  );
}
