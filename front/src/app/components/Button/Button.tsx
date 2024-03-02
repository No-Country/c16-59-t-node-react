"use client"
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  route?: string;
  bgColor: "primary-yellow" | "secondary-orange" | "tertiary-green";
}

export const ButtonC: React.FC<ButtonProps> = ({
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
