import React from 'react';
import { presentationClass } from './classNames';

interface PresentationProps {
  price: string;
}

export const Presentation: React.FC<PresentationProps> = ({ price }) => (
  price !== "" ?
    <span className={presentationClass}>Contiene*:</span>
    :
    <span className={presentationClass}>Puedes escoger las <strong>opciones y cantidades</strong> que desees de:</span>
);
