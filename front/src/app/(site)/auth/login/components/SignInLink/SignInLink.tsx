import React from 'react';
import { linkClass } from './classNames';


interface Props {
    href: string;
    text: string;
}

const SignInLink: React.FC<Props> = ({ href, text }) => {
    return (
        <a href={href} className={linkClass}>{text}</a>
    );
};

export default SignInLink;
