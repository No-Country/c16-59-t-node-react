// RoleOption.tsx
import Image from 'next/image';
import React from 'react';
import { RoleI } from '../../data/roles';

interface RoleOptionProps {
  role: RoleI;
  isSelected: boolean;
  onSelectRole: (role: RoleI) => void;
}

export const RoleOption: React.FC<RoleOptionProps> = ({ role, isSelected, onSelectRole }) => {
  return (
    <label className="mr-4 cursor-pointer relative rounded-full overflow-hidden shadow flex items-center justify-center">
      <input
        type="radio"
        value={role.id}
        checked={isSelected}
        onChange={() => onSelectRole(role)}
        style={{ display: 'none' }}
      />
      <Image src={role.img} alt={role.name} className="w-32 h-32" width={200} height={200}/>
      {isSelected && (
        <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </label>
  );
};
