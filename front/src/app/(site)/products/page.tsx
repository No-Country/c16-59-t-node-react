import { Button2 } from "@/app/components/Button2";
import {
  getFruitCatalog,
  getProcessedFoodsCatalog,
  getVegetablesCatalog,
} from "@/utils/fetchApi";
import { Title } from "../components";
import { Statement } from "../subscriptions/components";
import { AccordionCatalog } from "./components";

export default async function Subscriptions() {
  // aqui haz las peticiones para frutas, vegetales y productos envasados
  const fruits: any = await getFruitCatalog();
  const vegetables: any = await getVegetablesCatalog();
  const processedFoods: any = await getProcessedFoodsCatalog();
  // const productsEnvasados = await getProdComesCatalog();
  console.log("frutas donde estas?", fruits);
  console.log("vegetales donde estas?", vegetables);

  return (
    <div className="space-y-4">
      <Title>La Huerta Box - EXPRESS</Title>
      <div className="flex flex-col  ">
        <Statement>
          1. Escoge los productos que deseas clickeando sobre cada ítem:
        </Statement>
        <AccordionCatalog
          vegetables={vegetables}
          fruits={fruits}
          processedFoods={processedFoods}
        />
        <div className="flex justify-around w-80">
          <Button2 bgColor="secondary-orange" route="/">
            Anterior
          </Button2>
          <Button2 bgColor="primary-yellow" route="/">
            Siguiente
          </Button2>
        </div>
      </div>
    </div>
  );
}
