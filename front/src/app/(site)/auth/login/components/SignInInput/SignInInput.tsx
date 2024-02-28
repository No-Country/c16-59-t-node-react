import React from 'react';
import { inputClass, labelClass } from './classNames';


interface Props {
    label: string;
    type: string;
    id: string;
    placeholder: string;
}

const SignInInput: React.FC<Props> = ({ label, type, id, placeholder }) => {
    return (
        <div>
            <label htmlFor={id} className={labelClass}>{label}</label>
            <input type={type} name={id} id={id} placeholder={placeholder} className={inputClass} required />
        </div>
    );
};

export default SignInInput;
