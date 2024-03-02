import React from "react";

export const Statement = ({ children }:{children:React.ReactNode}) => {
  return (
    <div className="flex gap-3 mt-[1rem] lg:ml-10 sm:ml-0 py-[0.623rem]">
      <span className="text-base sm:text-[1.125rem] lg:text-[1.313rem]  font-bold">
        {children}
      </span>
    </div>
  );
};
