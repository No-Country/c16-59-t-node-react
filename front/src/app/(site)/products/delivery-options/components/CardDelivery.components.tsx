"use client";

import Image from "next/image";
import { useOrder, useUser } from "@/app/hooks";
import { TypeToastify } from "@/app/interfaces/toastify";
import { toastifyTyped } from "@/utils/toastity.utils";
import { ButtonGeneral } from "@/app/components";
import { useRouter } from "next/navigation";

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

  const router = useRouter();
  const {
    user: { token },
  } = useUser();

  const handleGetResume = () => {
    if (token) {
      setDelivery(id);
      router.push("/products/delivery-options/resume");
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
        <div className="space-y-2 md:space-y-6 px-3 md:px-6">
          <h4 className="text-secondary-orange text-xs md:text-lg font-semibold capitalize">
            {title}
          </h4>
          <div className="m-auto flex flex-col justify-center items-center space-y-2 md:space-y-6 md:px-6 md:[&_button]:w-[60%]">
            <p className="text-start text-pretty text-xs md:text-base [&_button_span_span]:normal-case">
              {description}
            </p>

            {!statusResume ? (
              <ButtonGeneral bgColor="primary-yellow" addFunc={handleGetResume}>
                {titleButton}
              </ButtonGeneral>
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
    </>
  );
};
