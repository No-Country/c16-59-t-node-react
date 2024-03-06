"use client"

import { RouteBtn } from '@/app/components';
import { RoleI, roles } from '@/app/data/roles';
import React, { useState } from 'react';
import RoleSelector from "../RoleSelector/RoleSelector";
import { TextInput } from '../TextInput/TextInput';


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
          <RouteBtn size="lg" bgColor="tertiary-green" route="/">Crear cuenta</RouteBtn>
        </div>
      </form>
    </div>
  );
};
