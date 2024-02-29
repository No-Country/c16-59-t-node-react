import Image from 'next/image';
import React from 'react';

interface RoleI {
  name: string;
  img: string;
  checked:boolean
}

export const Role: React.FC<RoleI> = ({ name, img }) => {
  return (
    <div className="relative">
      <Image src={img} alt={name} className="w-full h-auto" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-lg">✓</span>
      </div>
    </div>
  );
};
