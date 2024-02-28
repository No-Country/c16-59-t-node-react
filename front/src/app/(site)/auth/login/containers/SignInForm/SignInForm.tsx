import React from 'react';
import SignInButton from '../../components/SignInButton/SignInButton';
import SignInCheckbox from '../../components/SignInCheckbox/SignInCheckbox';
import SignInInput from '../../components/SignInInput/SignInInput';
import SignInLink from '../../components/SignInLink/SignInLink';
import { containerClass, formClass, formContainerClass, textClass, titleClass } from './classNames';

const SignInForm: React.FC = () => {
    return (
        <div className={containerClass}>
            <div className={formContainerClass}>
                <form className={formClass} action="#">
                    <h3 className={titleClass}>Sign in to our platform</h3>
                    <SignInInput label="Your email" type="email" id="email" placeholder="name@company.com" />
                    <SignInInput label="Your password" type="password" id="password" placeholder="••••••••" />
                    <SignInCheckbox label="Remember me" id="remember" />
                    <SignInLink href="#" text="Lost Password?" />
                    <SignInButton text="Login to your account" />
                    <div className={textClass}>
                        Not registered? <SignInLink href="#" text="Create account" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;
