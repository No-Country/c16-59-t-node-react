import { FncBtnI } from "@/app/interfaces/Buttons";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { FC } from "react";
import { BoxItalic } from "../..";
import { btnSize, defaultBtn } from "../btnClass";


export const FncBtn:FC<FncBtnI> = ({children, bgColor, size, onClick})=>{
  return(
    <Button
      className={clsx(
        `bg-${bgColor}`,
        defaultBtn,
        size==="lg" && btnSize.lg
      )}
      onPress={onClick}
    >
      {BoxItalic(children as string)}
    </Button>
  )
}