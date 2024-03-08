import { Price } from '@/app/interfaces/types';
import React from 'react';
import { presentationClass } from './classNames';

interface PresentationProps {
  price?: Price;
}

export const Presentation: React.FC<PresentationProps> = ({ price }) => (
  price !== undefined ?
    <span className={presentationClass}>Contiene*:</span>
    :
    <span className={presentationClass}>Puedes escoger las <strong>opciones y cantidades</strong> que desees de:</span>
);
