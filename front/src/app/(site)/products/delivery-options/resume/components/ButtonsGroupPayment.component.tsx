"use client";

import { ButtonGeneral, RouteBtn } from "@/app/components";
import { FncBtn } from "@/app/components/Buttons/FncBtn/FncBtn";
import { useOrder, useUser } from "@/app/hooks";
import { TypeToastify } from "@/app/interfaces/toastify";
import { stripePromiseClient } from "@/app/lib/stripeConfig";
import { getToken } from "@/utils/localStorage.utils";
import { toastifyTyped } from "@/utils/toastity.utils";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { ModalOpenPayment } from "./ModalOpenPayment.component";
import Image from "next/image";
import { ButtonTarjeta } from "./ButtonTarjeta/ButtonTarjeta.component";

// componente modal se puede mejorar
export const ButtonsGroupPayment = () => {
  const { isOpen, onOpen } = useDisclosure();
  const [loadingModal, setLoadingModal] = useState<boolean>(false);

  const {
    order: { products, deliveryId },
  } = useOrder();
  const {
    user: { token, email },
  } = useUser();

  const createCheckoutSession = async () => {
    try {
      setLoadingModal(true);

      const orderUser = {
        items: products.map(
          ({
            productId,
            name,
            image,
            salesPresentation,
            category,
            subTotal,
          }) => {
            return {
              id: productId,
              price: subTotal,
              image,
              title: name,
              description: salesPresentation,
              category,
              rating: 1,
              hasPrime: false,
            };
          }
        ),
        email,
      };

      const stripe = await stripePromiseClient;

      const checkoutSession = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderUser),
      });

      const checkout = await checkoutSession.json();

      //redirect user/customer to Stripe Checkout
      await stripe.redirectToCheckout({
        sessionId: checkout.id,
      });
    } catch (error) {
      setLoadingModal(false);
      toastifyTyped({
        type: TypeToastify.ERROR,
        message: "Error al procesar la compra de credito",
      });
    }
  };

  // esta para añadir estado global para el token email usuario
  const handleOpenPayment = () => {
    if (!token) {
      toastifyTyped({
        type: TypeToastify.WARNING,
        message: "Debes iniciar sesión para continuar",
      });
    } else if (!products.length) {
      toastifyTyped({
        type: TypeToastify.WARNING,
        message: "Debes agregar productos para continuar",
      });
    } else if (!deliveryId) {
      toastifyTyped({
        type: TypeToastify.WARNING,
        message: "Debes seleccionar una forma de envío para continuar",
      });
    } else {
      createCheckoutSession();
      onOpen();
    }
  };

  return (
    <>
      <div className="m-auto flex gap-3 flex-col md:flex-row">
        <ButtonGeneral
          bgColor="tertiary-green"
          addClassName="flex justify-center items-center gap-6"
        >
          <Image
            className="max-w-none object-contain h-full p-1"
            src="https://s3-alpha-sig.figma.com/img/69f0/a8e9/83a1b8d9e00d601dbe825289534ed2e7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SEn9p15KdSPOnBDlqvkFd6k9VavLpy3h~9aejpH81ivQ-PORU852qr60SeLSIrf03VtY5u4nZ5uVCN58DbgdxuWLBwZf7SW4lklL1ah0DHkyRTZOdPd2a4rD7JQ9PjJXtPY8FzpKQGGivFQXIJuiVupfeMXTZp3jg46Fx6qZUkq3Bki1x~xunUCRe~oTmMdi-hmUTI4NTbxHGLzpM0~BrcH2IVht1HyXNw0nD~YQEUrqyUEY8Yo3uttpdPCUuYZxIJrfcnWxxa3Yw5wTo2O2TI6lx6U3VPULYVSW2EQiuNmvoWQ4hD0sn8NXxE-F~XtGR60lybMqsPucBu3LTloCLQ__"
            alt="pse"
            width={50}
            height={50}
          />
          PSE
        </ButtonGeneral>
        <ButtonTarjeta
          disabled={!products.length || !deliveryId}
          onClick={handleOpenPayment}
        />
        <ButtonGeneral bgColor="tertiary-green">
          <Image
            className="max-w-none object-contain h-full p-1"
            src="https://s3-alpha-sig.figma.com/img/0d63/3cb7/cdbf7788ea549041443554057b1e4159?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R-t0MBDQtq8q-fjWSDG9s2c9h3Ks7rR5np-y0rDK60STdgI2Iwxqx-kvpzCE9Ew4fcYLUo4Lk8qOC-rwcVCjzbD56RGQtAI43GMHRtk0jea4YV6qggKfb25o4hhtDW0HAO4LBpnvwbvermDPntrmPPM5gNGcxaED6IugqLuk0xoD56p0f04Kl3IwgG3UY6R2w-iln2XgQv37ipFq7tCrTuRcrbC-ZeVmL1iDybySEJ1I0Gi1UWl55Sl0hOL4F8Bxp077hGle3YmsxBAyxvSXMIzH82mZ4SC5ISq4~g6b7qjwkF6HUtcKqsw75Hq7Kx73FrmyHr6Tvng9A03kglbX2g__"
            alt="contraentrega"
            width={50}
            height={50}
          />
          Contraentrega
        </ButtonGeneral>
      </div>
      {loadingModal && <ModalOpenPayment isOpen={isOpen} />}
      {/* <ToastContainer /> */}
    </>
  );
};
