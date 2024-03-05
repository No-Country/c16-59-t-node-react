import { ButtonStandard, Title } from "@/app/components";
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
      <AccordionCatalog
        vegetables={vegetables}
        fruits={fruits}
        processedFoods={processedFoods}
      />
<<<<<<< HEAD
      <div className="w-full m-auto flex justify-center items-center gap-4">
        <ButtonStandard primary route="/">
          Volver al inicio
        </ButtonStandard>
      </div>
=======
    <div className="w-full m-auto flex justify-center items-center gap-4 mt-4">
          <Button2 bgColor="primary-yellow" route="/">
            Volver al inicio
          </Button2>
          
        </div>

      
>>>>>>> 24f11b964e48ed8a07125ae7a600841b4adf9a49
    </>
  );
}
