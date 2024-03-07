import { URL_DELIVERY } from "@/constants/api";

import { DeliveryOptions } from "@/app/interfaces/delivery";
import { unScripted } from "@/utils/parseWords";
import { CardDelivery } from "../../delivery-options/components/CardDelivery.components";

export const FetchIdDelivery = async ({
  deliveryId,
}: {
  deliveryId: string;
}) => {
  const { description, id, image, type } = (await fetch(
    `${URL_DELIVERY}/${deliveryId}`
  ).then((res) => res.json())) as DeliveryOptions;

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
