import React from 'react';

export const FreshProduceMessage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-secondary-orange m-auto md:h-[10rem] sm:h-[7rem]">
      <h3 className="font-semibold text-xs sm:text-[1.5rem] lg:text-[1.906rem] lg:gap-1 sm:text-[1.5rem] text-center sm:px-[1rem] sm:leading-8 md:text-[1.9rem]">
        Productos de temporada, de manos campesinas
      </h3>
      <h5 className="font-medium text-xs sm:text-[0.75rem] lg:text-[1.125rem] lg:mt-[1rem] md:text-[1.13rem] md:leading-8">
        Consume producto fresco y local
      </h5>
    </div>
  );
};
