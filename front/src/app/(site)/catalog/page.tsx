import { ButtonStandard } from "@/app/components";
import {
  getFruitCatalog,
  getProcessedFoodsCatalog,
  getVegetablesCatalog,
} from "@/utils/fetchApi";
import { Title } from "../components";
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
      <div className="w-full m-auto flex justify-center items-center gap-4">
        <ButtonStandard primary route="/">
          Volver al inicio
        </ButtonStandard>
      </div>
    </>
  );
}
