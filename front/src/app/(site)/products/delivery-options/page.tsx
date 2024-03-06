import { ButtonC, Statement, Title } from "@/app/components";
import { DELIVERY_OPTIONS } from "@/constants/data";
import { CardDelivery } from "./components/CardDelivery.components";

export default function DeliveryOptions() {
  return (
    <div className="space-y-4">
      <Title size="lg" border color="secondary-orange" weight="semibold" icon>La Huerta Box - EXPRESS</Title>
      <Statement>3. Escoge una forma de entrega:</Statement>
      <div className="space-y-6">
        {DELIVERY_OPTIONS.map(
          ({ description, id, title, image, titleButton }) => (
            <CardDelivery
              key={id}
              id={id}
              image={image}
              title={title}
              titleButton={titleButton}
              description={description}
            />
          )
        )}
      </div>

      <div className="w-full m-auto flex justify-center items-center gap-4">
        <ButtonC bgColor="secondary-orange" route="/products/quantity">
          Anterior
        </ButtonC>
      </div>
    </div>
  );
}
