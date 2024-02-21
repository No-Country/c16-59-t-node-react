
export const SubscriptionName = ({ children }: { children: string }) => {
  // Función para aplicar estilos a la palabra "Box"
  const applyStyles = (text: string) => {
    // Separar el texto en partes, identificando la palabra "Box"
    const parts = text.split(/(\bBox\b)/);

    // Mapear las partes y aplicar estilos según corresponda
    return parts.map((part, index) => {
      // Si la parte es la palabra "Box", aplicar estilo italic
      if (part.toLowerCase() === "box") {
        return <span key={index} className="italic">{part}</span>;
      } else {
        // Para el resto del texto, aplicar estilo semibold y reducir el margen inferior
        return <span key={index} className="font-semibold mb-1">{part}</span>;
      }
    });
  };

  return (
    <div className="p-0"> {/* Eliminamos el padding del contenedor div */}
      <span className="text-secondary-orange text-[18px] sm:text-xl">
        {applyStyles(children)}
      </span>
    </div>
  );
};
