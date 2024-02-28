import React from "react";

export const Statement = ({ children }:{children:React.ReactNode}) => {
  return (
    <div className="flex gap-3 mt-1 ml-10">
      <span className=" text-base sm:text-[0.6rem] md:text-[1rem] lg:text-[1.5rem]  font-bold">
        {children}
      </span>
    </div>
  );
};
