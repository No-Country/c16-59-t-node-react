import { Button2 } from '@/app/components/Button2';
import React from 'react';
import SignInCheckbox from '../../components/SignInCheckbox/SignInCheckbox';
import SignInInput from '../../components/SignInInput/SignInInput';
import SignInLink from '../../components/SignInLink/SignInLink';
import { btnContainer } from '../../components/SignInLink/classNames';
import { roles } from '../../data/roles';
import RoleSelection from '../RoleSelection/RoleSelection';
import { formClass, textClass } from './classNames';

const SignInForm: React.FC = () => {
    return (
            
                <form className={formClass} action="#">
                    <RoleSelection roles={roles}/>
                    <SignInInput label="Correo Electrónico" type="email" id="email" placeholder="comprador123@gmail.com" />
                    <SignInInput label="Contraseña" type="password" id="password" placeholder="••••••••" />
                    <SignInLink href="#" text="¿Olvidaste tu contraseña?" />
                    <SignInCheckbox label="Recordar mis datos" id="remember" />
                    <div className={btnContainer}>
                        <Button2 bgColor="primary-yellow">Iniciar Sesión</Button2>
                        <div className={textClass}>
                            ¿No tienes cuenta? 
                        </div>
                        <Button2 bgColor="tertiary-green">Crear cuenta</Button2>
                    </div>
                </form>
    );
};

export default SignInForm;
