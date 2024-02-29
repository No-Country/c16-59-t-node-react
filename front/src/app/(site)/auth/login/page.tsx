"use client"
import { Title } from "../../components";
import SignInForm from "./containers/LogInForm/LogInForm";

export default function Login() {
  return (
    <div>
      <Title>Inicia sesión para finalizar la compra</Title>
      <SignInForm/>
    </div>
  );
}
