import React, { useState, useCallback, InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  fieldId: string;
  label: string;
  type?: string;
  value: string;
  inputStyle?: any;
}

const Input: React.FC<Props> = ({
  fieldId,
  label,
  inputStyle = {},
  value,
  type = 'text',
  ...rest
}) => {
  // const [fieldValue, setFieldValue] = useState('');
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!value);
  }, [value]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <label htmlFor={fieldId}>{label}</label>
      <input
        style={inputStyle}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type={type}
        id={fieldId}
        {...rest}
      />
    </Container>
  );
};

export default Input;
