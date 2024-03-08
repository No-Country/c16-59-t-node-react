"use client";

import { RoleI, roles } from "@/app/data/roles";
import React, { useState } from "react";
import {
  ButtonGeneral,
  ForgotPasswordLink,
  RememberMeCheckbox,
  Title,
} from "../..";
import { RouteBtn } from "../../Buttons/RouteBtn/RouteBtn";
import RoleSelector from "../RoleSelector/RoleSelector";
import { TextInput } from "../TextInput/TextInput";
import { toastifyTyped } from "@/utils/toastity.utils";
import { TypeToastify } from "@/app/interfaces/toastify";
import { getDataUser } from "@/utils/fetchApi";
import { useUser } from "@/app/hooks";
import { setToken } from "@/utils/localStorage.utils";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: null as RoleI | null,
    rememberMe: false,
  });

  const { getTokenUser, setShowLogin } = useUser();

  const handleChange = (
    key: keyof typeof formData,
    value: string | RoleI | boolean
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { email, password, role, rememberMe } = formData;

      console.log("ESTADO", email, password);

      const { email: emailFromApi, token } = await getDataUser({
        email,
        password,
      });

      toastifyTyped({
        type: TypeToastify.SUCESS,
        message: "Login Sucessful",
      });

      setToken(token, emailFromApi);
      getTokenUser();
      setShowLogin(false);

      // if (role) {
      //   console.log("Correo electrónico:", email);
      //   console.log("Contraseña:", password);
      //   console.log("Soy:", role.name);
      //   console.log("Recordar mis datos:", rememberMe);
      // }
    } catch (error: any) {
      toastifyTyped({
        type: TypeToastify.ERROR,
        message:
          error.cause === "Bad Request"
            ? error.message
            : "Credenciales incorrectas",
      });
    }
  };

  const handleSelectRole = (selectedRole: RoleI) => {
    handleChange("role", selectedRole);
  };

  return (
    <div className="max-w-md mx-auto p-[0.75rem]">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded px-2 pt-6 pb-4 mb-4"
      >
        <Title color={"secondary-orange"} size={"sm"} border icon>
          Inicia sesión para finalizar la compra
        </Title>
        <RoleSelector
          roles={roles}
          selectedRole={formData.role}
          onSelectRole={handleSelectRole}
        />
        <TextInput
          label="Correo electrónico"
          type="email"
          value={formData.email}
          onChange={(value) => handleChange("email", value)}
          placeholder="comprador123@gmail.com"
        />
        <TextInput
          label="Contraseña"
          type="password"
          value={formData.password}
          onChange={(value) => handleChange("password", value)}
          placeholder="********"
        />
        <ForgotPasswordLink />
        <RememberMeCheckbox
          rememberMe={formData.rememberMe}
          onChange={(value) => handleChange("rememberMe", value)}
        />
        <div className="flex items-center justify-center mb-4">
          <ButtonGeneral bgColor="primary-yellow" type="submit">
            Iniciar sesión
          </ButtonGeneral>
          {/* <RouteBtn bgColor="primary-yellow" size="lg" route="/">
            Inciar sesión
          </RouteBtn> */}
        </div>
        <div className="text-center">
          <p className="text-gray-600 mb-2">¿No tienes cuenta?</p>
          <RouteBtn bgColor="tertiary-green" size="lg" route="/">
            Crear cuenta
          </RouteBtn>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
