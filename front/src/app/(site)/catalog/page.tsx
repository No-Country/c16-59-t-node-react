import { RouteBtn, Title } from "@/app/components";
import {
  getFruitCatalog,
  getProcessedFoodsCatalog,
  getVegetablesCatalog,
} from "@/utils/fetchApi";

import { Category, Product } from "@/app/interfaces/AccordionProducts";
import AccordionCatalog from "./components/AccordionCatalog";

export default async function CatalogPage() {
  // aqui haz las peticiones para frutas, vegetales y productos envasados
  const fruits: Product[] = await getFruitCatalog();
  const vegetables: Product[] = await getVegetablesCatalog();
  const processedFoods: Product[] = await getProcessedFoodsCatalog();
  // const productsEnvasados = await getProdComesCatalog();
  const categories: Category[] = [
    { name: "Vegetales de temporada", products: vegetables },
    { name: "Frutas de temporada", products: fruits },
    { name: "Procesados naturales", products: processedFoods },
  ];
  return (
    <>
      <Title size="lg" border color="secondary-orange" weight="semibold" icon>
        Productos del Mes
      </Title>
      <AccordionCatalog categories={categories} />
      <div className="w-full m-auto flex justify-center items-center gap-4 mt-4">
        <RouteBtn size="lg" bgColor="primary-yellow" route="/">
          Volver al inicio
        </RouteBtn>
      </div>
    </>
  );
}
