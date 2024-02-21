"use-client"
import { Button2 } from "@/app/components/Button2";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { Price, SubscriptionName } from ".";
import { UnorderedList } from "../containers";

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
  const borderColor = `border-${color}`
  return (
    <Card className={`grid grid-cols-3 ${borderColor} border-dotted m-[10px]`}>
      <div className="col-span-2">
        <Price price={price} bgColor={color} />
        <CardHeader>
          <SubscriptionName>{title}</SubscriptionName>
        </CardHeader>
        <CardBody>
          <UnorderedList data={content} />
        </CardBody>
        <CardFooter className="col-span-2 flex justify-center items-center">
          <Button2 bgColor={color}>Quiero {title}</Button2>
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
