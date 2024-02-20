import { ButtonStandard } from "@/app/components";
import { Title } from "../../components";
import { DELIVERY_OPTIONS } from "@/constants/data";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function DeliveryOptions() {
  return (
    <div className="space-y-4">
      <Title>
        La Huerta <span className="italic font-normal">Box</span> - EXPRESS
      </Title>
      <p className="font-semibold sm:px-6 text-xs lg:text-base">
        3. Escoge una forma de entrega:
      </p>
      {DELIVERY_OPTIONS.map((option: any) => (
        <Card key={option.title} className="py-4 ">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start space-y-2">
            <h4 className="text-secondary-orange text-base sm:text-xl lg:text-2xl font-semibold">
              {option.title}
            </h4>
            <p className="text-xs sm:text-sm md:text-base">
              {option.description.map((part: any) =>
                !part.bold ? (
                  part.text
                ) : (
                  <span className="font-semibold md:font-bold" key={part.text}>
                    {part.text}
                  </span>
                )
              )}
            </p>
            <ButtonStandard primary route="/">
              {option.titleButton}
            </ButtonStandard>
          </CardHeader>
          <CardBody key={option.title} className="overflow-visible py-2">
            <Image
              alt={option.title}
              className="object-cover rounded-xl"
              src={option.image}
              width={270}
            />
          </CardBody>
        </Card>
      ))}

      {/* <ul>
        {DELIVERY_OPTIONS.map((option) => (
          <li key={option.id}>
            <CardDelivery
              subtitle={option.subtitle}
              description={option.description}
              image={option.image}
            />
          </li>
        ))}
      </ul> */}
    </div>
  );
}
