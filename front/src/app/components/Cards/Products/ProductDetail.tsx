"use client"
import { CarProductI } from "@/app/interfaces/products";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Title } from "../..";
import { RouteBtn } from "../../Buttons/RouteBtn/RouteBtn";
import { PriceC } from "../Price/Price";
import { PrdDescriptionC } from "./PrdDescription";

export const ProductDetail: React.FC<CarProductI> = ({
  id, name, price, description, image
}) => {
  const pathname = usePathname()

  const btn = pathname === "/"
    ? "Consíguelas aquí"
    : pathname === "/products"
    ? "Compralo ahora"
    : null;

  return (
    <Card className="relative grid grid-cols-4 m-[1.25rem] pt-0 rounded-none overflow-visible">
      <div className="col-start-3 col-end-4  p-0 m-0">
        <PriceC price={price} color={"secondary-orange"} />
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
          <Title size={"md"} color={"secondary-orange"}>{name}</Title>
        </CardHeader>
        <CardBody className="pt-0">
          <PrdDescriptionC description={description}/>
        </CardBody>
        <CardFooter className="col-span-2 flex justify-center items-center">
          <RouteBtn size="lg" bgColor={"tertiary-green"} route={"/"}>{btn}</RouteBtn>
        </CardFooter>
      </div>
      <Image
        className="object-cover col-start-4 col-span-1 h-full"
        src={image[0]}
        alt={name}
        width={379.69}
        height={238.48}
      />
    </Card>
  );
};
