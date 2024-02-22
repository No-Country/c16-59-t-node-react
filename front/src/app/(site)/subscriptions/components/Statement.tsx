import React from "react";

export const Statement = ({ children }:{children:React.ReactNode}) => {
  return (
    <div className="flex gap-3 mt-5 ml-10">
      <span className=" text-base sm:text-xl  font-bold">
        {children}
      </span>
    </div>
  );
};
