import { ButtonStandard, Footer } from "@/app/components";
import { getFruitCatalog, getProcessedFoodsCatalog, getVegetablesCatalog } from "@/utils/fetchApi";
import { Title } from "../components";
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
    <>
      <Title>La Huerta Box - EXPRESS</Title>
      <div className="flex flex-col  ">
      <strong>1. Escoge los productos que deseas clickeando sobre cada ítem:  </strong>
      <AccordionCatalog
        vegetables={vegetables}
        fruits={fruits}
        processedFoods={processedFoods}
      />
      <div className="flex justify-around w-80">
      <ButtonStandard secondary route="/" >
        Anterior
      </ButtonStandard>
      <ButtonStandard primary route="/" >
        Siguiente
      </ButtonStandard>
      </div>
      </div>
      <Footer/>
    </>

  );
}
