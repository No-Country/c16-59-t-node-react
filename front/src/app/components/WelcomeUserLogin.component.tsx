import { NOMBRE_USUARIO_LOGIN } from "@/constants/data";

export const WelcomeUserLogin = () => {
  return (
    <button className="button-login hidden md:block" data-text="Awesome">
      <span className="actual-text">&nbsp;{NOMBRE_USUARIO_LOGIN}&nbsp;</span>
      <span aria-hidden="true" className="hover-text-login">
        &nbsp;{NOMBRE_USUARIO_LOGIN}&nbsp;
      </span>
    </button>
  );
};
