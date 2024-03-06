import { IconHuerta } from "..";

export const Hero = () => {
  return (
    <div className="relative m-auto w-full">
      <div className="h-[80px] sm:h-[100px] lg:h-[13.5rem] bg-primary-yellow z-0 m-auto md:h-[9.07rem]"></div>
      <div className="h-[60px] sm:h-[80px] lg:h-[10.13rem] bg-secondary-orange z-0 m-auto md:h-[9.07rem]"></div>
      <div className="absolute top-0 left-0 w-full h-full flex gap-4 lg:gap-6 justify-center items-center z-10 px-[0.5rem]">
        <div className="mt-[-20px] size-12 sm:mt-[-40px] sm:size-16 lg:mt-[-60px] lg:size-20">
          <IconHuerta/>
        </div>
        <div className="flex flex-col gap-0 p-0">
          <div className="font-extrabold text-[8rem] sm:text-[3rem] xl:text-[7.5rem] title-huerta mt-[1rem] md:text-[5rem] lg:text-[9.3rem] lg:pb-0 inline-block md:text-[6.3rem] md:-mt-4 lg:mt-[1rem]">
            La Huerta
          </div>
          <span className="text-xs sm:text-sm lg:text-[2.25rem] italic font-medium md:text-[1.512rem]">
            ...del campo a tu puerta.
          </span>
        </div>
      </div>
    </div>
  );
};
