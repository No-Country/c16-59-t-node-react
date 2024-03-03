"use client"
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React from "react";

interface ButtonStandardProps {
  children: React.ReactNode;
  route?: string;
  bgColor: "primary-yellow" | "secondary-orange" | "tertiary-green";
}

export const ButtonC: React.FC<ButtonStandardProps> = ({
  children,
  route,
  bgColor,
}) => {
  const router = useRouter();

  // Función para aplicar estilos a la palabra "Box"
  const applyStyles = (text: string) => {
    // Separar el texto en partes, identificando la palabra "Box"
    const parts = text.split(/(\bBox\b)/);

    // Mapear las partes y aplicar estilos según corresponda
    return (
      <span className="whitespace-wrap">
        {parts.map((part, index) => {
          // Si la parte es la palabra "Box", aplicar estilo cursiva
          if (part.toLowerCase() === "box") {
            return (
              <span key={index} className="italic font-extralight">
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

  return (
    <Button
      className={clsx(
        "btn rounded-none font-bold",
        `bg-${bgColor}`,
        "sm:text-[0.8rem] text-wrap h-[2.2781rem] w-[12.88rem] lg:w-[20rem] lg:text-[1rem]"
      )}
      onClick={() => route && router.push(route)}
    >
      {/* Aplicar estilos a children */}
      {applyStyles(children as string)}
    </Button>
  );
};
