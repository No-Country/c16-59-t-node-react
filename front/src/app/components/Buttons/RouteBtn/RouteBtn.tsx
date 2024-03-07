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
  const assignedBgColor = `bg-${bgColor}`
  console.log(assignedBgColor)
  return (
    <Button variant={"light"} color="success" isIconOnly
      className={clsx(
        defaultBtn,
        assignedBgColor,
        size==="lg" && btnSize.lg
      )}
      onPress={() => route && router.push(route)}
    >
      {BoxItalic(children as string)}
    </Button>
  );
};
