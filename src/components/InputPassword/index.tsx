import React from 'react';

import { Container } from './styles';

interface Props {
  fieldId: string;
  label: string;
}

const InputPassword: React.FC<Props> = ({ fieldId, label }) => {
  return (
    <Container>
      <label htmlFor={fieldId}>{label}</label>
      <input type="text" id={fieldId} />
    </Container>
  );
};

export default InputPassword;
