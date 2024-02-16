import { getProdCatalog } from "@/app/actions";
import { NavBar } from "@/app/components";
import { AccordionCatalog } from "./components";

export default async function CatalogPage() {
  // const products = await getProdCatalog();

  // aqui haz las peticiones para frutas, vegetales y productos envasados
  // const frutas = await getFruitCatalog();
  // const vegetales = await getVegeCatalog();
  // const productsEnvasados = await getProdComesCatalog();

  return (
    <div>
      <NavBar />
      <AccordionCatalog
      // products={products}
      // frutas={frutas}
      // productsEnvasados={productsEnvasados}
      />
    </div>
  );
}
