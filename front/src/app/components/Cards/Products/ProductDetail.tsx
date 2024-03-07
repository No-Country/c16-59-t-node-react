"use client"
import { CarProductI } from "@/app/interfaces/products";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Title } from "../..";
import { RouteBtn } from "../../Buttons/RouteBtn/RouteBtn";

import { DescriptionC } from "../../Description/Description";
import { PriceC } from "../Price/Price";

export const ProductDetail: React.FC<CarProductI> = ({
  id, name, price, description, image
}) => {
  const pathname = usePathname()

  const btn = pathname === "/"
    ? "Consíguelas aquí"
    : pathname === "/products"
    ? "Compralo ahora"
    : null;
  const nameU:string = name.toUpperCase()
  return (
    <Card className="relative grid grid-cols-5 pt-0 rounded-none overflow-visible">
      <div className="col-start-3 col-end-3  p-0 place-self-end mr-[7rem]">
            <PriceC price={price} color={"secondary-orange"} className="place-self-end" />
            </div>
      <div
        className={clsx(
          "col-span-3",
          "pt-0",
          "pl-5",
          "border-dotted",
          "border-2",
          "sm:p-0.5"
          )}
      >
        <CardHeader className="pb-0">
          <Title size={"md"} color={"secondary-orange"}>{nameU}</Title>
        </CardHeader>
        <CardBody className="pt-0">
          <DescriptionC description={description}/>
        </CardBody>
        <CardFooter className="col-span-2 flex justify-center items-center">
          <RouteBtn size="lg" bgColor={"tertiary-green"} route={"/"}>{btn}</RouteBtn>
        </CardFooter>
      </div>
      <Image
        className="object-cover col-start-4 col-span-2 h-full"
        src={image[0]}
        alt={name}
        width={379.69}
        height={238.48}
      />
    </Card>
  );
};
