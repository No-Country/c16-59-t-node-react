import { BoxItalic, IconHuerta } from "@/app/components";

export const Title = ({ children }: { children: string }) => {
  // Función para aplicar estilos a la palabra "Box"

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 border-gray-200 border p-3"> {/* Ajustamos la estructura y los estilos */}
      <IconHuerta className="w-[1.4rem] mr-[0.1rem]"/>
      <span className="text-secondary-orange text-base sm:text-[1rem] lg:text-2xl font-semibold pt-1">
        {BoxItalic(children as string)}
      </span>
    </div>
  );
};
