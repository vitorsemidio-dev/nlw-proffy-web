import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface Subject {
  value: string;
  label: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Subject[];
}

const Select: React.FC<Props> = ({
  label,
  name,
  options,
  children,
  ...rest
}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>
        {label}
      </label>
      <select id={name} {...rest}>
        <option value="" disabled selected hidden>
          Selecione uma opção
        </option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select;