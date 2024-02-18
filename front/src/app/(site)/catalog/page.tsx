import { getProdCatalog } from "@/app/actions";
import { AccordionCatalog } from "./components";
import { Title } from "../components";

export default async function CatalogPage() {
  const products = await getProdCatalog();

  // aqui haz las peticiones para frutas, vegetales y productos envasados
  // const frutas = await getFruitCatalog();
  // const vegetales = await getVegeCatalog();
  // const productsEnvasados = await getProdComesCatalog();

  return (
    <>
      <Title>Productos del Mes</Title>
      <AccordionCatalog
        products={products}
        // frutas={frutas}
        // productsEnvasados={productsEnvasados}
      />
    </>
  );
}
