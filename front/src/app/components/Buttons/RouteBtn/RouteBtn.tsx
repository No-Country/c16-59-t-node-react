"use client";

import { RouteBtnI } from "@/app/interfaces/Buttons";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React from "react";
import { BoxItalic } from "../../Txts/BoxItalic/BoxItalic";
import { btnSize, defaultBtn } from "../btnClass";



export const RouteBtn: React.FC<RouteBtnI> = ({
  children,
  route,
  bgColor,
  size
}) => {
  const router = useRouter();

  return (
    <Button
      className={clsx(
        `bg-${bgColor}`,
        defaultBtn,
        size==="lg" && btnSize.lg
      )}
      onPress={() => route && router.push(route)}
    >
      {BoxItalic(children as string)}
    </Button>
  );
};
