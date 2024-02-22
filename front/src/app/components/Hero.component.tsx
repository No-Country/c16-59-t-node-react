import { IconHuerta } from ".";

export const Hero = () => {
  return (
    <div className="relative m-auto w-full">
      <div className="h-[80px] sm:h-[130px] lg:h-[150px] bg-primary-yellow z-0 m-auto"></div>
      <div className="h-[50px] sm:h-[80px] lg:h-[100px] bg-secondary-orange z-0 m-auto"></div>
      <div className="absolute top-0 left-0 w-full h-full flex gap-0 justify-center items-center z-10 ">
        <div className="mt-[-20px] size-14 sm:mt-[-40px] sm:size-20 lg:mt-[-60px] lg:size-28">
          <IconHuerta />
        </div>
        <div className="flex flex-col gap-0 p-0">
          <span className="font-bold text-[40px] sm:text-[80px] xl:text-[120px] title-huerta">
            La Huerta
          </span>
          <span className="text-[14px] sm:text-[20px] lg:text-[30px] italic font-medium">
            ...del campo a tu puerta.
          </span>
        </div>
      </div>
    </div>
  );
};
