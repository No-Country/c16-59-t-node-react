import { SubscriptionsI } from "@/app/interfaces/Subscription";
import { FC } from "react";
import { Subscription } from "./Subscription";


const SubscriptionsContainer: FC<SubscriptionsI> = ({ options }) => {
  return (
    <>
      {options.map((option, index) => {
        const { id,title, price, content, image, route, color } = option;
        return (
          <Subscription
          id={id}
            key={index}
            title={title}
            price={price} 
            content={content}
            image={image}
            color={color}
            route={route}
          />
        );
      })}
    </>
  );
};

export default SubscriptionsContainer;
