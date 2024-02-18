import { getProdCatalog } from "@/app/actions";
import { IconHuerta, NavBar } from "@/app/components";
import { AccordionCatalog } from "./components";
import {
  getFruitCatalog,
  getVegetablesCatalog,
  getProcessedFoodsCatalog,
} from "@/utils/functions";
import { useEffect, useState, cache } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Footer } from "@/app/components";
import { Button } from "@nextui-org/react";

export default async function CatalogPage() {
  // aqui haz las peticiones para frutas, vegetales y productos envasados

  const fruits: any = await getFruitCatalog();
  const vegetables: any = await getVegetablesCatalog();
  const processedFoods: any = await getProcessedFoodsCatalog();
  // const productsEnvasados = await getProdComesCatalog();
  return (
    <div>
      <NavBar />
      <Card>
        <CardBody>
          <div className="flex flex-row">
          <div className="w-6">
            <IconHuerta />
          </div> 
          <h3 className="font-bold text-sm sm:text-xl lg:text-2xl">
          Productos del mes
          </h3></div>
        </CardBody>
      </Card>
      <AccordionCatalog
        fruits={fruits}
        vegetables={vegetables}
        processedFoods={processedFoods}
      />
      <Button className="btn-menu bg-principal rounded-none font-bold">
        Volver al inicio
      </Button>
      <Footer/>
    </div>
  );
}
