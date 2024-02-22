import { ButtonStandard, Footer } from "@/app/components";
import { getFruitCatalog, getProcessedFoodsCatalog, getVegetablesCatalog } from "@/utils/fetchApi";
import { Title } from "../components";
import { AccordionCatalog } from "./components/AccordionCatalog.component";
import { Button2 } from "@/app/components/Button2";


export default async function Subscriptions() {

  // aqui haz las peticiones para frutas, vegetales y productos envasados
  const fruits: any = await getFruitCatalog();
   const vegetables: any = await getVegetablesCatalog();
   const processedFoods: any = await getProcessedFoodsCatalog();
  // const productsEnvasados = await getProdComesCatalog();
  console.log("frutas donde estas?", fruits);
  console.log("vegetales donde estas?", vegetables);

  return (
    <>
    <div className="space-y-4" >
      <Title>La Huerta Box - EXPRESS</Title>
      <div className="flex flex-col  ">
      <p className="font-semibold sm:px-6 text-xs lg:text-base">
      1. Escoge los productos que deseas clickeando sobre cada ítem:
      </p>

      </div>
      <AccordionCatalog
      
        vegetables={vegetables}
        fruits={fruits}
        processedFoods={processedFoods}
        
      />
      
      <div className="flex justify-around w-80">
        
     <Button2 children="Anterior" bgColor="secondary-orange" route="/"></Button2>
     <Button2 children="Siguiente" bgColor="primary-yellow" route="/"></Button2>
      
      </div>
      </div>
      
    </>

  );
}
