import React, { useState } from 'react'; // Asegúrate de importar el componente Role

interface RoleI {
  name: string;
  img: string;
}

interface RoleSelectionProps {
  roles: RoleI[]; // Especifica el tipo de la propiedad roles como un arreglo de RoleI
}

export const RoleSelection: React.FC<RoleSelectionProps> = ({ roles }) => {
  const [selectedRole, setSelectedRole] = useState<RoleI | null>(null);

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
  };

  return (
    <div>
      <label>Selecciona un rol:</label>
      <select onChange={(e) => handleRoleSelect(roles.find(role => role.id === parseInt(e.target.value))!)} value={selectedRole?.id || ''}>
        <option value="">Seleccionar...</option>
        {roles.map(role => (
          <option key={role.id} value={role.id}>{role.name}</option>
        ))}
      </select>
      {selectedRole && (
        <p>Rol seleccionado: {selectedRole.name}</p>
      )}
    </div>
  );
};
