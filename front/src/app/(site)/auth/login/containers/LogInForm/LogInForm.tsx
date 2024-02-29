// LoginForm.tsx
import { Button2 } from '@/app/components/Button2';
import React, { useState } from 'react';
import { RoleI, roles } from '../../data/roles';
import ForgotPasswordLink from './ForgotPasswordLink';
import RememberMeCheckbox from './RememeberCheckbox';
import RoleSelector from './RoleSelector';
import TextInput from './TextInput';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<RoleI | null>(null);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role) {
      console.log('Correo electrónico:', email);
      console.log('Contraseña:', password);
      console.log('Soy:', role.name);
      console.log('Recordar mis datos:', rememberMe);
    }
  };

  const handleSelectRole = (selectedRole: RoleI) => {
    setRole(selectedRole);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white rounded px-2 pt-6 pb-4 mb-4">
        <RoleSelector
          roles={roles}
          selectedRole={role}
          onSelectRole={handleSelectRole}
        />
        <TextInput
          label="Correo electrónico"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="comprador123@gmail.com"
        />
        <TextInput
          label="Contraseña"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="********"
        />
        <ForgotPasswordLink />
        <RememberMeCheckbox
          rememberMe={rememberMe}
          onChange={setRememberMe}
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
