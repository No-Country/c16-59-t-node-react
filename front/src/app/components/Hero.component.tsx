import { IconHuerta } from ".";

export const Hero = () => {
  return (
    <div className="relative">
      <div className="w-[1050px] h-[216px] bg-principal z-0"></div>
      <div className="w-[1050px] h-[162px] bg-secundario z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full flex gap-6 justify-center items-start z-10 p-10">
        <div className="w-40 h-40">
          <IconHuerta />
        </div>
        <div className="flex flex-col gap-0 p-0">
          <span className="font-bold text-[160px] title-huerta">La Huerta</span>
          <span className="text-[30px] italic font-medium">
            ...del campo a tu puerta.
          </span>
        </div>
      </div>
    </div>
  );
};
