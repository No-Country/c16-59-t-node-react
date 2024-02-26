"Client Component"
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  text: string;
}

export const RegisterButton: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <div className="mb-6 text-center">
      <button
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="button"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};