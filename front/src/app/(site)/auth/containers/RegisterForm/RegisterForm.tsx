"use-client"

import { Button2 } from "@/app/components/Button2";
import React, { useState } from 'react';
import { TextInput } from "../../components";
import { RoleI, roles } from "../../data/roles";
import RoleSelector from "../RoleSelector/RoleSelector";


interface FormData {
  role: RoleI | null;
  fullName: string;
  identificationType: string;
  identificationNumber: string;
  email: string;
  password: string;
  address: string;
  neighborhood: string;
  phone: string;
  profilePicture: File | null;
}

export const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    role: null,
    fullName: '',
    identificationType: '',
    identificationNumber: '',
    email: '',
    password: '',
    address: '',
    neighborhood: '',
    phone: '',
    profilePicture: null
  });

  const handleChange = (key: keyof FormData, value: string | RoleI | File) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSelectRole = (selectedRole: RoleI) => {
    handleChange('role', selectedRole);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario al backend
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white rounded px-2 pt-6 pb-4 mb-4">
        <RoleSelector
          roles={roles}
          selectedRole={formData.role}
          onSelectRole={handleSelectRole}
        />
        <TextInput
          label="Nombres completos"
          type="text"
          value={formData.fullName}
          onChange={(value) => handleChange('fullName', value)}
          placeholder="Ingrese sus nombres completos"
        />
        {/* Repite este patrón para los demás campos del formulario */}
        <div className="flex items-center justify-center mb-4">
          <Button2 bgColor="tertiary-green">Crear cuenta</Button2>
        </div>
      </form>
    </div>
  );
};
