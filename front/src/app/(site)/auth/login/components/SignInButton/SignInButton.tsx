import React from 'react';
import { className } from './classNames';

interface Props {
    text: string;
}

const SignInButton: React.FC<Props> = ({ text }) => {
    return (
        <button type="submit" className={className}>{text}</button>
    );
};

export default SignInButton;
