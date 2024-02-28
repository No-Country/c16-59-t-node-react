import React from "react";

interface BulletTextProps {
  txt: string;
}

export const BulletText: React.FC<BulletTextProps> = ({ txt }) => {
  return (
    <div className="flex items-baseline sm:text-[1vh] md:text-[0.9rem] lg:text-[1.1rem]">
      <span className="sm:w-[2vw] sm:h-[0.5vh] sm:mr-[1vw] bg-bullet"/>
      <span>{txt}</span>
    </div>
  );
};
