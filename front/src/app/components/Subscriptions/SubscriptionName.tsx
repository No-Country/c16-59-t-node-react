import { BoxItalic } from "@/app/components/BoxItalic/BoxItalic";

export const SubscriptionName = ({ children }: { children: string }) => {

  return (
    <div className="flex gap-2 h-[2vh]"> {/* Eliminamos el padding del contenedor div */}
      <span className="text-secondary-orange sm:text-[1.5vh] sm:mt-[2vh]  whitespace-nowrap text-wrap md:text-[1.7vh] lg:text-[1.3rem] lg:mt-[0.01vh]">
        {BoxItalic(children as string)}
      </span>
    </div>
  );
};
