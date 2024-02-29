// RememberMeCheckbox.tsx
import React from 'react';

interface RememberMeCheckboxProps {
  rememberMe: boolean;
  onChange: (value: boolean) => void;
}

const RememberMeCheckbox: React.FC<RememberMeCheckboxProps> = ({ rememberMe, onChange }) => {
  return (
    <div className="mb-6">
      <input
        className="mr-2 leading-tight"
        id="rememberMe"
        type="checkbox"
        checked={rememberMe}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="text-sm" htmlFor="rememberMe">
        Recordar mis datos
      </label>
    </div>
  );
};

export default RememberMeCheckbox;
