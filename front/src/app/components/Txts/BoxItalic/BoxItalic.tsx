 // Función para aplicar estilos a la palabra "Box"
 export const BoxItalic = (text: string) => {
  // Separar el texto en partes, identificando la palabra "Box"
  const parts = text.split(/(\bBox\b)/);

  // Mapear las partes y aplicar estilos según corresponda
  return (
    <span className="whitespace-wrap">
      {parts.map((part, index) => {
        // Si la parte es la palabra "Box", aplicar estilo cursiva
        if (part.toLowerCase() === "box") {
          return (
            <span key={index} className="italic font-light">
              {part}
            </span>
          );
        } else {
          // Para el resto del texto, aplicar estilo negrita y reducir el margen inferior
          return (
            <span key={index} className="font-bold">
              {part}
            </span>
          );
        }
      })}
    </span>
  );
};