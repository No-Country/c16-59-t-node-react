import { getProdCatalog } from "@/app/actions";
import { NavBar } from "@/app/components";
import { AccordionCatalog } from "./components";

export default async function CatalogPage() {
  const products = await getProdCatalog();

  return (
    <div>
      <NavBar />
      <AccordionCatalog products={products} />
    </div>
  );
}
