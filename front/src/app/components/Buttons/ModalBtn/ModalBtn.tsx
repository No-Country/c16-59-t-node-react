"use client"
import { ModalBtnI } from "@/app/interfaces/Buttons";
import { Button, useDisclosure } from "@nextui-org/react";
import clsx from "clsx";
import React from "react";
import { BoxItalic } from "../..";
import { ModalPresentation } from "../ModalPresentation/ModalPresentation";
import { btnSize, defaultBtn } from "../btnClass";


export const ModalBtn:React.FC<ModalBtnI> =  ({children,bgColor,size,btnContent})=>{
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const AsBtnSize = size? btnSize[size] :""

  return (
    <>
       <Button onPress={onOpen} isIconOnly
      className={clsx(
        `bg-${bgColor}`,
        defaultBtn,
        AsBtnSize
      )}
      >
      {typeof children === "string"?BoxItalic(children as string):children}
    </Button>
      <ModalPresentation isOpen={isOpen} onOpenChange={onOpenChange} modalContent={btnContent} />
    </>
  );
}
