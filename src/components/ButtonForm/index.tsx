import React from 'react';

// interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   type: string;
// }
import { ButtonContainer } from './styles';

const ButtonForm: React.FC = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default ButtonForm;
