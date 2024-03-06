import { Route } from "@/app/interfaces/types";
import React from "react";
import { Subscription } from "./Subscription";

interface SubscriptionData {
  title: string;
  price: string;
  content: string[];
  img: string;
  route:Route;
  color:"primary-yellow" | "secondary-orange" | "tertiary-green"
}

interface Props {
  options: SubscriptionData[];
}

const SubscriptionsContainer: React.FC<Props> = ({ options }) => {
  return (
    <>
      {options.map((option, index) => {
        const { title, price, content, img, route, color } = option;
        return (
          <Subscription
            key={index}
            title={title}
            price={price} 
            content={content}
            img={img}
            color={color}
            route={route}
          />
        );
      })}
    </>
  );
};

export default SubscriptionsContainer;
