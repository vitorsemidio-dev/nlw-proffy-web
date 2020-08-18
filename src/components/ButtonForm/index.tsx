import React, { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

type ButtonFormProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonForm: React.FC<ButtonFormProps> = ({ children, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};

export default ButtonForm;
