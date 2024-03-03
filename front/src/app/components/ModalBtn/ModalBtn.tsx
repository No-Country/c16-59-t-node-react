import { Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import { ModalPresentation } from "./ModalPresentation";

interface ModalBtnProps{
  btnContent: string | React.ReactNode
  modalContent: string | React.ReactNode

}

export const ModalBtn:React.FC<ModalBtnProps> =  ({btnContent, modalContent})=>{
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>{btnContent}</Button>
      <ModalPresentation isOpen={isOpen} onOpenChange={onOpenChange} modalContent={modalContent}/>
    </>
  );
}
