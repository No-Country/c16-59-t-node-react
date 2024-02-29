import { IconHuerta } from ".";

export const Hero = () => {
  return (
    <div className="relative m-auto w-full">
      <div className="h-[80px] sm:h-[100px] lg:h-[120px] bg-primary-yellow z-0 m-auto"></div>
      <div className="h-[60px] sm:h-[80px] lg:h-[100px] bg-secondary-orange z-0 m-auto"></div>
      <div className="absolute top-0 left-0 w-full h-full flex gap-4 lg:gap-6 justify-center items-center z-10 ">
        <div className="mt-[-20px] size-12 sm:mt-[-40px] sm:size-16 lg:mt-[-60px] lg:size-20">
          <IconHuerta width="7rem" height="8rem"/>
        </div>
        <div className="flex flex-col gap-0 p-0">
          <span className="font-bold text-[50px] sm:text-[80px] xl:text-[120px] title-huerta">
            La Huerta
          </span>
          <span className="text-xs sm:text-sm lg:text-xl italic font-medium">
            ...del campo a tu puerta.
          </span>
        </div>
      </div>
    </div>
  );
};
