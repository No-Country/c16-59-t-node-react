import { ButtonC, Statement, Title } from "@/app/components";
import { DELIVERY_OPTIONS } from "@/constants/data";
import Image from "next/image";

export default function DeliveryOptions() {
  return (
    <div className="space-y-4">
      <Title size="lg" border color="secondary-orange" weight="semibold" icon>La Huerta Box - EXPRESS</Title>
      <Statement>3. Escoge una forma de entrega:</Statement>
      <ul className="space-y-6">
        {DELIVERY_OPTIONS.map((option: any) => (
          <li
            key={option.title}
            className="flex justify-between items-center gap-4 border-gray-200 border"
          >
            <div className="space-y-2 sm:space-y-6 lg:space-y-10 px-3 sm:px-6 lg:px-10">
              <h4 className="text-secondary-orange text-xs sm:text-lg lg:text-2xl font-semibold">
                {option.title}
              </h4>
              <div className="m-auto flex flex-col justify-center items-center space-y-2 sm:space-y-6 lg:space-y-10 sm:px-6 lg:px-10 md:[&_button]:w-[60%]">
                <p className="text-start text-pretty text-xs sm:text-sm lg:text-base">
                  {option.description.map((part: any) =>
                    !part.bold ? (
                      part.text
                    ) : (
                      <span
                        className="font-semibold md:font-bold"
                        key={part.text}
                      >
                        {part.text}
                      </span>
                    )
                  )}
                </p>
                <ButtonC bgColor="primary-yellow" route="/">
                  {option.titleButton}
                </ButtonC>
              </div>
            </div>

            <Image
              alt={option.title}
              className="aspect-square object-cover size-32 sm:size-60 lg:size-80"
              src={option.image}
              width={640}
              height={427}
            />
          </li>
        ))}
      </ul>

      <div className="w-full m-auto flex justify-center items-center gap-4 mt-4">
          <ButtonC bgColor="secondary-orange" route="/products/quantity">
            Anterior
          </ButtonC>
          <ButtonC bgColor="primary-yellow" route="/resume">
            Siguiente
          </ButtonC>
        </div>

    </div>
  );
}
