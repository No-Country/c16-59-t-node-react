import React from "react";

export const Title = ({ children }:{children:React.ReactNode}) => {
  return (
    <div className="flex gap-2 border-gray-200 border p-3">
      <h4 className="text-secondary-orange text-base sm:text-xl lg:text-2xl font-semibold">
        {children}
      </h4>
    </div>
  );
};
