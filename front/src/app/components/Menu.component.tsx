"use client"

import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

export const Menu = () => {
  const router = useRouter()

  return (
    <div className="w-[90vw] lg:w-[70vw] h-[200px] bg-secundario flex flex-col gap-2 justify-center items-center">
      <Button className="btn-menu bg-terciario rounded-none font-bold">
        La Huerta <span className="italic font-medium">Box</span>
      </Button>
      <Button onClick={()=>router.push("/catalog")} className="btn-menu bg-terciario rounded-none font-bold">
        Productos del Mes
      </Button>
      <Button className="btn-menu bg-principal rounded-none font-bold">
        Iniciar Sesión
      </Button>
    </div>
  );
};
