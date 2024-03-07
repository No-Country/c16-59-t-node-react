import { ButtonC, Statement, Title } from "@/app/components";
import { CardDelivery } from "./components/CardDelivery.components";
import { URL_DELIVERY } from "@/constants/api";
import { DeliveryOptions } from "@/app/interfaces/delivery";
import { parseWords, unScripted } from "@/utils/parseWords";

export default async function DeliveryOptions() {
  const deliveryOptions = (await fetch(URL_DELIVERY).then((res) =>
    res.json()
  )) as DeliveryOptions[];

  return (
    <div className="space-y-4">
      <Title>La Huerta Box - EXPRESS</Title>
      <Statement>3. Escoge una forma de entrega:</Statement>
      <div className="space-y-6">
        {deliveryOptions.map(({ id, type, description, image }) => (
          <CardDelivery
            key={id}
            id={id}
            image={image}
            title={unScripted(type)}
            titleButton={parseWords(type)}
            description={description}
          />
        ))}
      </div>

      <div className="w-full m-auto flex justify-center items-center gap-4">
        <ButtonC bgColor="secondary-orange" route="/products/quantity">
          Anterior
        </ButtonC>
      </div>
    </div>
  );
}
