"use client";

import { URL_DELIVERY } from "@/constants/api";
import { DeliveryOptions, DeliveryType } from "@/app/interfaces/delivery";
import { unScripted } from "@/utils/parseWords";
import { CardDelivery } from "../../components/CardDelivery.components";
import { useEffect, useState } from "react";

interface FetchIdDeliveryProps {
  deliveryId: string;
}

const INITIAL_VALUES: DeliveryOptions = {
  description: "",
  id: "",
  type: DeliveryType.EntregaEnNuestraSede,
  image: "",
};

export const FetchIdDelivery: React.FC<FetchIdDeliveryProps> = ({
  deliveryId,
}: {
  deliveryId: string;
}) => {
  const [{ description, id, image, type }, setDataDelivery] =
    useState<DeliveryOptions>(INITIAL_VALUES);

  useEffect(() => {
    async function fetchIdDelivery() {
      const { description, id, image, type } = (await fetch(
        `${URL_DELIVERY}/${deliveryId}`
      ).then((res) => res.json())) as DeliveryOptions;

      setDataDelivery({
        description,
        id,
        image,
        type,
      });
    }

    if (deliveryId) {
      fetchIdDelivery();
    }

    return () => setDataDelivery(INITIAL_VALUES);
  }, [deliveryId]);

  return (
    <CardDelivery
      id={id}
      title={unScripted(type)}
      description={description}
      image={image}
      statusResume
    />
  );
};
