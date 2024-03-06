import { BoxItalic, IconHuerta } from "@/app/components";
import clsx from "clsx";

interface TitleProps{
  children: string
  size: "sm" | "md" | "lg"
  border?:boolean
  icon?:boolean
  color?: "secondary-orange"
  weight?: "semibold"
}

export const Title:React.FC<TitleProps> = ({ children,size, border, icon, color, weight }) => {
  return (
    <div className={
      clsx("flex flex-col sm:flex-row items-center gap-2",
      border && "border-gray-200 border p-3")
      }> {/* Ajustamos la estructura y los estilos */}
      {icon && <IconHuerta className="w-[1.4rem] mr-[0.1rem]"/>}
      <span className={clsx(
        "lg:mt-[0.01vh] whitespace-nowrap text-wrap",
        color==="secondary-orange" && "text-secondary-orange",
        size==="lg" && "text-base sm:text-[1rem] lg:text-2xl",
        size==="md" && "sm:text-[1.5vh]  md:text-[1.7vh] lg:text-[1.3rem]",
        size==="sm" && "sm:text-[0.937rem] md:text-[0.937rem] lg:text-[0.937rem]",
        weight==="semibold" && "font-semibold"
      )}>
        {BoxItalic(children as string)}
      </span>
    </div>
  );
};
