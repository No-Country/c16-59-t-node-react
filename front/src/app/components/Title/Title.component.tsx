import { BoxItalic, IconHuerta } from "@/app/components";

interface TitleProps{
  children: string
  size: "sm" | "md" | "lg"
  border:boolean
  icon?:boolean
  color?: "secondary-orange"

}

export const Title:React.FC<TitleProps> = ({ children,size="lg", border, icon, color }) => {
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
