import React from 'react';
import { RegisterButton, TextInput } from '../../components';
import {
  containerClass,
  flexClass,
  formClass,
  formContainerClass,
  formGroupClass,
  hrClass,
  imageClass,
  inputContainerClass,
  linkClass,
  passwordHintClass,
  titleClass
} from './classNames'; // Importa las variables de estilos directamente mediante destructuración

const RegisterForm: React.FC = () => {
  return (
    <div className={containerClass}>
      <div className={flexClass}>
        <div className={imageClass} style={{backgroundImage: "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"}}></div>
        <div className={formContainerClass}>
          <h3 className={titleClass}>Create an Account!</h3>
          <form className={formClass}>
            <div className={formGroupClass}>
              <div className={inputContainerClass}>
                <TextInput label="First Name" id="firstName" type="text" placeholder="First Name" />
              </div>
              <div className={inputContainerClass}>
                <TextInput label="Last Name" id="lastName" type="text" placeholder="Last Name" />
              </div>
            </div>
            <TextInput label="Email" id="email" type="email" placeholder="Email" />
            <div className={formGroupClass}>
              <div className={inputContainerClass}>
                <TextInput label="Password" id="password" type="password" placeholder="******************" />
                <p className={passwordHintClass}>Please choose a password.</p>
              </div>
              <div className={inputContainerClass}>
                <TextInput label="Confirm Password" id="c_password" type="password" placeholder="******************" />
              </div>
            </div>
            <RegisterButton text="Register Account" />
            <hr className={hrClass} />
            <div className="text-center">
              <a className={linkClass} href="#">
                Forgot Password?
              </a>
            </div>
            <div className="text-center">
              <a className={linkClass} href="#">
                Already have an account? Login!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
