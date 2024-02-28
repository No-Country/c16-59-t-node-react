
export const SubscriptionName = ({ children }: { children: string }) => {
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
    <div className="flex gap-2 h-[2vh]"> {/* Eliminamos el padding del contenedor div */}
      <span className="text-secondary-orange sm:text-[1.5vh] sm:mt-[2vh]  whitespace-nowrap text-wrap md:text-[1.7vh] lg:text-[2vh] lg:mt-[0.01vh]">
        {applyStyles(children)}
      </span>
    </div>
  );
};
