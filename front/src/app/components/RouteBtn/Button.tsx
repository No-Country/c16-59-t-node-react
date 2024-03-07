"use client";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React from "react";
import { BoxItalic } from "..";

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

  return (
    <Button
      className={clsx(
        "btn rounded-none font-bold sm:text-[0.8rem] text-wrap h-[2.2781rem] w-[12.88rem] lg:w-[20rem] lg:text-[1rem]",
        bgColor === "primary-yellow"
          ? "bg-primary-yellow"
          : bgColor === "secondary-orange"
          ? "bg-secondary-orange"
          : "bg-tertiary-green"
      )}
      onClick={() => route && router.push(route)}
    >
      {BoxItalic(children as string)}
    </Button>
  );
};
