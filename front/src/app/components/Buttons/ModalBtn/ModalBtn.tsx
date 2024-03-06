import { ModalBtnI } from "@/app/interfaces/Buttons";
import { Button, useDisclosure } from "@nextui-org/react";
import clsx from "clsx";
import React from "react";
import { BoxItalic } from "../..";
import { btnSize, defaultBtn } from "../btnClass";
import { ModalPresentation } from "./ModalPresentation";


export const ModalBtn:React.FC<ModalBtnI> =  ({children,bgColor,size,btnContent})=>{
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
       <Button variant="ghost" isIconOnly
      className={clsx(
        `bg-${bgColor}`,
        defaultBtn,
        size==="lg" && btnSize.lg
      )}
      onPress={onOpen}
      >
      {typeof children === "string"?BoxItalic(children as string):children}
    </Button>
      <ModalPresentation isOpen={isOpen} onOpenChange={onOpenChange} modalContent={btnContent}/>
    </>
  );
}
