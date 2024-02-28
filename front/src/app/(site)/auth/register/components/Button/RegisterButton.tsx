import React from 'react';
import { buttonClass } from './classNames'; // Importa las clases CSS

interface ButtonProps {
  onClick?: () => void;
  text: string;
}

export const RegisterButton: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <div className="mb-6 text-center">
      <button
        className={buttonClass} // Utiliza la clase CSS importada
        type="button"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
