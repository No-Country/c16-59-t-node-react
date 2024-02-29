"use client"

import { Button2 } from '@/app/components/Button2';
import React, { useState } from 'react';
import { ForgotPasswordLink, RememberMeCheckbox, TextInput } from '../../components';
import { RoleI, roles } from '../../data/roles';
import RoleSelector from '../RoleSelector/RoleSelector';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: null as RoleI | null,
    rememberMe: false,
  });

  const handleChange = (key: keyof typeof formData, value: string | RoleI | boolean) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password, role, rememberMe } = formData;
    if (role) {
      console.log('Correo electrónico:', email);
      console.log('Contraseña:', password);
      console.log('Soy:', role.name);
      console.log('Recordar mis datos:', rememberMe);
    }
  };

  const handleSelectRole = (selectedRole: RoleI) => {
    handleChange('role', selectedRole);
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
          label="Correo electrónico"
          type="email"
          value={formData.email}
          onChange={(value) => handleChange('email', value)}
          placeholder="comprador123@gmail.com"
        />
        <TextInput
          label="Contraseña"
          type="password"
          value={formData.password}
          onChange={(value) => handleChange('password', value)}
          placeholder="********"
        />
        <ForgotPasswordLink />
        <RememberMeCheckbox
          rememberMe={formData.rememberMe}
          onChange={(value) => handleChange('rememberMe', value)}
        />
        <div className="flex items-center justify-center mb-4">
          <Button2 bgColor="primary-yellow">Inciar sesión</Button2>
        </div>
        <div className="text-center">
          <p className="text-gray-600 mb-2">¿No tienes cuenta?</p>
          <Button2 bgColor="tertiary-green">Crear cuenta</Button2>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;