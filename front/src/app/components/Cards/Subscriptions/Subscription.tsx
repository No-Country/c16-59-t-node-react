"use client";
import { Route } from "@/app/interfaces/types";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import { Title } from "../..";
import { RouteBtn } from "../../Buttons/RouteBtn/RouteBtn";
import { Presentation } from "../../Txts/Presentation/Presentation";
import { UnorderedList } from "../../Txts/UnorderedList/UnorderedList";
import { Price } from "../Price/Price";


interface SubscriptionProps {
  children?: React.ReactNode;
  route: Route;
  title: string;
  price: string;
  content: string[];
  img: string;
  color: "primary-yellow" | "secondary-orange" | "tertiary-green";
}

export const Subscription: React.FC<SubscriptionProps> = ({
  title,
  price,
  content,
  img,
  route,
  color,
}) => {
  const borderColor = `border-${color}`;
  const btn = `Quiero ${title}`
  return (
    <Card className="relative grid grid-cols-4 m-[1.25rem] pt-0 rounded-none overflow-visible">
      <div className="col-start-3 col-end-4  p-0 m-0">
            <Price price={price} color={color} />
            </div>
      <div
        className={clsx(
          "col-span-3",
          "pt-0",
          "pl-5",
          "border-dotted",
          "border-2",
          "sm:p-0.5",
          "border-tertiary-green" && borderColor,
          "border-secondary-orange" && borderColor,
          "border-primary-yellow" && borderColor
        )}
      >
        <CardHeader className="pb-0">
          <Title size={"md"} color={"secondary-orange"}>{title}</Title>
        </CardHeader>
        <CardBody className="pt-0">
          <Presentation price={price}/>
          <UnorderedList data={content} />
        </CardBody>
        <CardFooter className="col-span-2 flex justify-center items-center">
          <RouteBtn size="lg" bgColor={color} route={route}>{btn}</RouteBtn>
        </CardFooter>
      </div>
      {/* <div className="col-span-1"> */}
      <Image
        className="object-cover col-start-4 col-span-1 h-full"
        src={img}
        alt={title}
        width={379.69}
        height={238.48}
      />
      {/* </div> */}
    </Card>
  );
};
