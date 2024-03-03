"use client";

import Image from "next/image";
import { useOrder } from "@/app/hooks";
import { DescriptionDelivery } from "@/app/interfaces/constants";
import { TypeToastify } from "@/app/interfaces/toastify";
import { getToken } from "@/utils/localStorage.utils";
import { toastifyTyped } from "@/utils/toastity.utils";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";

interface CardDeliveryProps {
  id: number;
  title: string;
  titleButton: string;
  description: DescriptionDelivery[];
  image: string;
  statusResume?: boolean;
}

export const CardDelivery: React.FC<CardDeliveryProps> = ({
  id,
  title,
  titleButton,
  description,
  image,
  statusResume,
}) => {
  const router = useRouter();
  const { setDelivery } = useOrder();

  const handleGetResume = () => {
    const { token } = getToken();

    if (token) {
      setDelivery(id);
      router.push("/resume");
    } else {
      toastifyTyped({
        type: TypeToastify.WARNING,
        message: "Debes iniciar sesión para continuar",
      });
    }
  };

  return (
    <>
      <div className="flex justify-between items-center gap-4 border-gray-200 border">
        <div className="space-y-2 sm:space-y-6 lg:space-y-10 px-3 sm:px-6 lg:px-10">
          <h4 className="text-secondary-orange text-xs sm:text-lg lg:text-2xl font-semibold">
            {title}
          </h4>
          <div className="m-auto flex flex-col justify-center items-center space-y-2 sm:space-y-6 lg:space-y-10 sm:px-6 lg:px-10 md:[&_button]:w-[60%]">
            <p className="text-start text-pretty text-xs sm:text-sm lg:text-base">
              {description.map(({ bold, text }: any) =>
                !bold ? (
                  text
                ) : (
                  <span className="font-semibold md:font-bold" key={text}>
                    {text}
                  </span>
                )
              )}
            </p>

            {/* acomodar el button para añadir funciones */}
            {!statusResume ? (
              <Button
                className="btn rounded-none font-bold bg-primary-yellow"
                onClick={handleGetResume}
              >
                {titleButton}
              </Button>
            ) : null}
            {/* <ButtonStandard primary route="/">
            {titleButton}
          </ButtonStandard> */}
          </div>
        </div>

        <Image
          alt={title}
          className="aspect-square object-cover size-32 sm:size-60 lg:size-80"
          src={image}
          width={640}
          height={427}
        />
      </div>
      <ToastContainer />
    </>
  );
};
