import { ButtonStandard, IconHuerta } from "@/app/components";
import { DELIVERY_OPTIONS } from "@/constants/data";
import { CardDelivery } from "./components/CardDelivery.components";

export default function DeliveryOptions() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 border-gray-200 border p-3 h-[4vw]">
        <IconHuerta />
        <span className="text-secondary-orange text-base sm:text-xl lg:text-2xl font-semibold pt-1">
          La Huerta <span className="italic font-normal">Box</span> - EXPRESS
        </span>
      </div>
      <p className="font-semibold sm:px-6 text-xs lg:text-base">
        3. Escoge una forma de entrega:
      </p>
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
        <ButtonStandard secondary route="/products/quantity">
          Anterior
        </ButtonStandard>
      </div>
    </div>
  );
}
