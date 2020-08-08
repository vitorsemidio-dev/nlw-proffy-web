import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface Subject {
  value: string;
  label: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Subject[]
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
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select;