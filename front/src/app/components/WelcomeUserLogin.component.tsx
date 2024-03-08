import { NOMBRE_USUARIO_LOGIN } from "@/constants/data";
import { FC } from "react";

interface Props {
  className?:string
}

export const WelcomeUserLogin:FC<Props> = ({className}) => {
  return (
    <button className="button-login hidden md:inline" data-text="Awesome">
      <span className="actual-text">&nbsp;{NOMBRE_USUARIO_LOGIN}&nbsp;</span>
      <span aria-hidden="true" className="hover-text-login">
        &nbsp;{NOMBRE_USUARIO_LOGIN}&nbsp;
      </span>
    </button>
  );
};
