"use client"
import { Title } from "../../components";
import LoginForm from "../containers/LogInForm/LogInForm";

export default function Login() {
  return (
    <div>
      <Title>Inicia sesión para finalizar la compra</Title>
      <LoginForm/>
    </div>
  );
}
