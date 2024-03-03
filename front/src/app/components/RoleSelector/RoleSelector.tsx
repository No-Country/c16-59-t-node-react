
// RoleSelector.tsx
import React from 'react';
import { RoleI } from '../../data/roles';
import { RoleOption } from './RoleOption';

interface RoleSelectorProps {
  roles: RoleI[];
  selectedRole: RoleI | null;
  onSelectRole: (role: RoleI) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ roles, selectedRole, onSelectRole }) => {
  return (
    <div className="mb-6 text-center">
      <label className="block text-gray-700 text-sm font-bold mb-2">Soy</label>
      <div className="flex items-center justify-center mb-4">
        {roles.map(role => (
          <RoleOption
            key={role.id}
            role={role}
            isSelected={selectedRole === role}
            onSelectRole={onSelectRole}
          />
        ))}
      </div>
    </div>
  );
};

export default RoleSelector;
