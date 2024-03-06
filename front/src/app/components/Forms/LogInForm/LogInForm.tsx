"use client"

import { RoleI, roles } from '@/app/data/roles';
import React, { useState } from 'react';
import { ForgotPasswordLink, RememberMeCheckbox, Title } from '../..';
import { RouteBtn } from '../../Buttons/RouteBtn/RouteBtn';
import RoleSelector from '../RoleSelector/RoleSelector';
import { TextInput } from '../TextInput/TextInput';

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
    return alert(formData)
  };

  const handleSelectRole = (selectedRole: RoleI) => {
    handleChange('role', selectedRole);
  };

  return (
    <div className="max-w-md mx-auto p-[0.75rem]">
      <form onSubmit={handleSubmit} className="bg-white rounded px-2 pt-6 pb-4 mb-4">
        <Title color={"secondary-orange"} size={"sm"} border icon>Inicia sesión para finalizar la compra</Title>
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
          <RouteBtn bgColor="primary-yellow" size="lg" route="/">Iniciar sesión</RouteBtn>
        </div>
      </form>
      <div className="text-center">
          <p className="text-gray-600 mb-2">¿No tienes cuenta?</p>
          <RouteBtn bgColor="tertiary-green" size="lg" route="/">Crear cuenta</RouteBtn>
        </div>
    </div>
  );
};

export default LoginForm;
