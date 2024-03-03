import { IconHuerta } from "@/app/components";

export const Title = ({ children }: { children: string }) => {
  // Función para aplicar estilos a la palabra "Box"
  const applyStyles = (text: string) => {
    // Separar el texto en partes, identificando la palabra "Box"
    const parts = text.split(/(\bBox\b)/);

    // Mapear las partes y aplicar estilos según corresponda
    return parts.map((part, index) => {
      // Si la parte es la palabra "Box", aplicar estilo italic
      if (part.toLowerCase() === "box") {
        return <span key={index} className="italic font-light">{part}</span>;
      } else {
        // Para el resto del texto, aplicar estilo semibold y reducir el margen inferior
        return <span key={index} className="font-semibold mb-1">{part}</span>;
      }
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 border-gray-200 border p-3"> {/* Ajustamos la estructura y los estilos */}
      <IconHuerta className="w-[1.4rem] mr-[0.1rem]"/>
      <span className="text-secondary-orange text-base sm:text-[1rem] lg:text-2xl font-semibold pt-1">
        {applyStyles(children)}
      </span>
    </div>
  );
};
