import { AccordionCatalog } from "./components";
import { Title } from "../components";
import {
  getFruitCatalog,
  getVegetablesCatalog,
  getProcessedFoodsCatalog,
} from "@/utils/fetchApi";
import { ButtonStandard, Footer } from "@/app/components";
import { Button2 } from "@/app/components/Button2";

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
    <div className="w-full m-auto flex justify-center items-center gap-4 mt-4">
          <Button2 bgColor="primary-yellow" route="/">
            Volver al inicio
          </Button2>
          
        </div>

      
    </>
  );
}
