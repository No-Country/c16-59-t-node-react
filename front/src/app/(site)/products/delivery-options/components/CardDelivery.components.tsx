"use client";

import Image from "next/image";
import { useOrder } from "@/app/hooks";
import { TypeToastify } from "@/app/interfaces/toastify";
import { getToken } from "@/utils/localStorage.utils";
import { toastifyTyped } from "@/utils/toastity.utils";
import { Button } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import { ButtonC } from "@/app/components";
import { DeliveryType } from "@/app/interfaces/delivery";

interface CardDeliveryProps {
  id: string;
  description: string;
  image: string;
  title: string;
  titleButton?: string;
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
  const { setDelivery } = useOrder();

  // const handleGetResume = () => {
  //   const { token } = getToken();

  //   if (token) {
  //     setDelivery(id);
  //     router.push("/resume");
  //   } else {
  //     toastifyTyped({
  //       type: TypeToastify.WARNING,
  //       message: "Debes iniciar sesión para continuar",
  //     });
  //   }
  // };

  return (
    <>
      <div className="flex justify-between items-center gap-4 border-gray-200 border">
        <div className="space-y-2 md:space-y-6 px-3 md:px-6">
          <h4 className="text-secondary-orange text-xs md:text-lg font-semibold capitalize">
            {title}
          </h4>
          <div className="m-auto flex flex-col justify-center items-center space-y-2 md:space-y-6 md:px-6 md:[&_button]:w-[60%]">
            <p className="text-start text-pretty text-xs md:text-base [&_button_span_span]:normal-case">
              {description}
              {/* {description.map(({ bold, text }: any) =>
                !bold ? (
                  text
                ) : (
                  <span
                    className="font-semibold md:font-bold text-xs md:text-base"
                    key={text}
                  >
                    {text}
                  </span>
                )
              )} */}
            </p>

            {!statusResume ? (
              <ButtonC
                bgColor="primary-yellow"
                route="/resume"
                // onClick={handleGetResume}
              >
                {titleButton}
              </ButtonC>
            ) : null}
          </div>
        </div>

        <Image
          alt={title}
          className="aspect-square object-cover size-32 md:size-60 lg:size-80"
          src={image}
          width={640}
          height={427}
        />
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};
