"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import { ModalPresentation } from "./ModalPresentation";
import { useUser } from "@/app/hooks";

interface ModalBtnProps {
  btnContent: string | React.ReactNode;
  children: React.ReactNode;
}

export const ModalBtn: React.FC<ModalBtnProps> = ({ btnContent, children }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { showLogin } = useUser();

  return (
    <>
      <Button onPress={onOpen} variant={"light"} color="success" isIconOnly>
        {btnContent}
      </Button>
      {showLogin && (
        <ModalPresentation
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          modalContent={children}
        />
      )}
    </>
  );
};
