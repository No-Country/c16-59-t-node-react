"use client";

import { useDisclosure } from "@nextui-org/react";
import { Button2 } from "@/app/components/Button2";
import { ModalOpenPayment } from "./ModalOpenPayment.component";

export const ButtonsGroupPayment = () => {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <>
      <div className="m-auto flex gap-3">
        <Button2 bgColor="tertiary-green">
          <span onClick={onOpen} className="w-full p-0 m-0">
            PSE
          </span>
        </Button2>
        <Button2 bgColor="tertiary-green">
          <span onClick={onOpen} className="w-full p-0 m-0">
            Tarjeta de Débito/Credito
          </span>
        </Button2>
        <Button2 bgColor="tertiary-green">
          <span onClick={onOpen} className="w-full p-0 m-0">
            Contraentrega
          </span>
        </Button2>
      </div>
      {isOpen ? <ModalOpenPayment isOpen={isOpen} /> : null}
    </>
  );
};
