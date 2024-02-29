import React from 'react';
import { inputClass, labelClass } from './classNames'; // Importa las clases CSS

interface TextInputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, id, type, placeholder }) => {
  return (
    <div className="mb-4">
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <input
        className={inputClass}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
