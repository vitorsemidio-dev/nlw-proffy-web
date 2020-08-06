import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<Props> = ({
  label,
  name,
  children,
  ...rest
}) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>
        {label}
      </label>
      <input type="text" id={name} {...rest}/>
    </div>
  )
}

export default Input;