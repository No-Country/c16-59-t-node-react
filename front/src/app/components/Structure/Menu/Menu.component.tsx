"use client"
import { menuRouteButtons } from "@/app/data/menuButtons";
import { ModalBtn } from "../..";
import { RouteBtn } from "../../Buttons/RouteBtn/RouteBtn";
import { HowToBuy } from "../../Media/HowToBuy";


export const Menu = () => {
  return (
    <div className="bg-secondary-orange flex flex-col gap-2 justify-center items-center *:w-[200px] sm:*:w-[300px] m-auto py-3 md:py-4 lg:py-5 *:h-fit *:py-1 sm:*:py-2 *:text-xs *:sm:text-sm *:lg:text-base lg:h-[12.12rem] md:h-[12.12rem] sm:h-[12.12rem]">
      <ModalBtn bgColor="primary-yellow" size="lg" btnContent={<HowToBuy/>}>¿Cómo comprar con nosotros?</ModalBtn>
      {menuRouteButtons.map((element,index)=>{
        const {children, route, bgColor, size } = element
        return <RouteBtn key={index} route={route} bgColor={bgColor} size={size}>{children}</RouteBtn>
      })}
    </div>//boludo
  );
};
