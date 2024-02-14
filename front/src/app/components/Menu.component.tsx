import { Button } from "@nextui-org/react";

export const Menu = () => {
  return (
    <div className="h-[200px] bg-secundario w-full flex flex-col gap-2 justify-center items-center">
      <Button className="btn-menu bg-terciario rounded-none font-bold">
        La Huerta <span className="italic font-medium">Box</span>
      </Button>
      <Button className="btn-menu bg-terciario rounded-none font-bold">
        Productos del Mes
      </Button>
      <Button className="btn-menu bg-principal rounded-none font-bold">
        Iniciar Sesión
      </Button>
    </div>
  );
};
