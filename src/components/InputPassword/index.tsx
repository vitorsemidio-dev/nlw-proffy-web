import React, { useState, useCallback } from 'react';

import { Container } from './styles';

interface Props {
  fieldId: string;
  label: string;
}

const InputPassword: React.FC<Props> = ({ fieldId, label }) => {
  const [fieldValue, setFieldValue] = useState('');
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    console.log('handleInputBlur');

    setIsFilled(!!fieldValue);
  }, [fieldValue]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    console.log('handleInputFocus');
  }, []);
  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <label htmlFor={fieldId}>{label}</label>
      <input
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type="text"
        id={fieldId}
      />
    </Container>
  );
};

export default InputPassword;
