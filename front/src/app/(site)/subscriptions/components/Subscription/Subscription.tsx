"use-client";
import { Button2 } from "@/app/components/Button2";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import { Price, SubscriptionName } from "..";
import { UnorderedList } from "../../containers";

interface SubscriptionProps {
  children?: React.ReactNode;
  route?: string;
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
  color,
}) => {
  const borderColor = `border-${color}`;
  return (
    <Card className="relative grid grid-cols-3 m-[1.25rem] pt-0 rounded-none overflow-visible">
      <div
        className={clsx(
          "col-span-2",
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
          <Price price={price} color={color} />
          <SubscriptionName>{title}</SubscriptionName>
        </CardHeader>
        <CardBody className="pt-0">
          <span className="lg:pb-3 md:mt-[3vh] sm:mt-[3vh] text-[1vh] md:text-[0.9rem] lg:text-[1.1rem]">Contiene*:</span>
          <UnorderedList data={content} />
        </CardBody>
        <CardFooter className="col-span-2 flex justify-center items-center">
          <Button2 bgColor={color} route="/products">
            Quiero {title}
          </Button2>
        </CardFooter>
      </div>
      {/* <div className="col-span-1"> */}
      <Image
        className="object-cover col-span-1 h-full"
        src={img}
        alt={title}
        width={379.69}
        height={238.48}
      />
      {/* </div> */}
    </Card>
  );
};
