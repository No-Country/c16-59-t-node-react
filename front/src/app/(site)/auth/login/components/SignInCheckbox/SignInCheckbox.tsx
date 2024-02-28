import React from 'react';
import { checkboxContainerClass, checkboxInputClass, containerClass, labelClass, lostPasswordClass } from './classNames';

interface Props {
    label: string;
    id: string;
}

const SignInCheckbox: React.FC<Props> = ({ label, id }) => {
    return (
        <div className={containerClass}>
            <div className={checkboxContainerClass}>
                <div className="flex items-center h-5">
                    <input id={id} aria-describedby={id} type="checkbox" className={checkboxInputClass} required />
                </div>
                <div className={labelClass}>
                    <label htmlFor={id} className="font-medium text-gray-900 dark:text-gray-300">{label}</label>
                </div>
            </div>
            <a href="#" className={lostPasswordClass}>Lost Password?</a>
        </div>
    );
};

export default SignInCheckbox;
