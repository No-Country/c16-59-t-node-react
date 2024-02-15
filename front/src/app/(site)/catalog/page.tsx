import { getProdCatalog } from "@/app/actions";
import { IconHuerta, NavBar } from "@/app/components";
import { AccordionCatalog } from "./components";

export default async function CatalogPage() {
  const products = await getProdCatalog();

  // aqui haz las peticiones para frutas, vegetales y productos envasados
  // const frutas = await getFruitCatalog();
  // const vegetales = await getVegeCatalog();
  // const productsEnvasados = await getProdComesCatalog();

  return (
    <div>
      <NavBar />
      <div className="max-w-5xl mx-auto space-y-4 p-4">
        <div className="flex gap-2 border-gray-200 border p-2">
          <div className="size-4">
            <IconHuerta />
          </div>
          <h4 className="text-secundario text-2xl font-semibold">
            Productos del Mes
          </h4>
        </div>
        <AccordionCatalog
          products={products}
          // frutas={frutas}
          // productsEnvasados={productsEnvasados}
        />
      </div>
    </div>
  );
}
