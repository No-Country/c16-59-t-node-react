import React, { useState } from 'react';
import { focusedBorderClass, inputClass, inputWrapperClass, labelClass } from './classNames';



interface TextInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, type, value, onChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={inputWrapperClass}>
      <label className={labelClass} htmlFor={label}>
        {label}
      </label>
      <input
        className={`${inputClass} ${isFocused ? focusedBorderClass : ''}`}
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};
