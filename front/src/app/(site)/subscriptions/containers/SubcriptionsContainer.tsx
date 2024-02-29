import React from "react";
import { Subscription } from "../components";

interface SubscriptionData {
  title: string;
  price: string;
  content: string[];
  img: string;
  color:"primary-yellow" | "secondary-orange" | "tertiary-green"
}

interface Props {
  options: SubscriptionData[];
}

const SubscriptionsContainer: React.FC<Props> = ({ options }) => {
  return (
    <>
      {options.map((option, index) => {
        const { title, price, content, img, color } = option;
        return (
          <Subscription
            key={index}
            title={title}
            price={price} 
            content={content}
            img={img}
            color={color}
          />
        );
      })}
    </>
  );
};

export default SubscriptionsContainer;
