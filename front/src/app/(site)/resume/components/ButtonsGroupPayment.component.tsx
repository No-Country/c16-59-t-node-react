"use client";

import { RouteBtn } from "@/app/components";
import { FncBtn } from "@/app/components/Buttons/FncBtn/FncBtn";
import { useOrder } from "@/app/hooks";
import { TypeToastify } from "@/app/interfaces/toastify";
import { stripePromiseClient } from "@/app/lib/stripeConfig";
import { getToken } from "@/utils/localStorage.utils";
import { toastifyTyped } from "@/utils/toastity.utils";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { ModalOpenPayment } from "./ModalOpenPayment.component";

// componente modal se puede mejorar
export const ButtonsGroupPayment = () => {
  const { isOpen, onOpen } = useDisclosure();
  const [loadingModal, setLoadingModal] = useState<boolean>(false);
  const {
    order: { products, deliveryId },
  } = useOrder();

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
        email: getToken()?.email,
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
    // if (!token) {
    //   toastifyTyped({
    //     type: TypeToastify.WARNING,
    //     message: "Debes iniciar sesión para continuar",
    //   });
    // } else

    if (!products.length) {
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
      <div className="m-auto flex gap-3">
        <RouteBtn size="lg" bgColor="tertiary-green" route="/">PSE</RouteBtn>

        {/* cambiar la logica del boton para que tambien tenga disabled y lo demas*/}
        <FncBtn size="lg" bgColor="tertiary-green" onClick={handleOpenPayment}>Tarjeta de Débito/Credito</FncBtn>
          {/* <button
            onClick={handleOpenPayment}
            className={clsx(
              "w-full p-0 m-0",
              (!products.length || !deliveryId) &&
              "bg-gray-300 cursor-not-allowed"
            )}
            disabled={!products.length || !deliveryId}
            >
            Tarjeta de Débito/Credito
          </button> */}
        <RouteBtn size="lg" route="/" bgColor="tertiary-green">Contraentrega</RouteBtn>
      </div>
      {loadingModal && <ModalOpenPayment isOpen={isOpen} />}
      {/* <ToastContainer /> */}
    </>
  );
};
