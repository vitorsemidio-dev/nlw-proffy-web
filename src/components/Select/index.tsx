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
  optionTextDefault?: string;
}

const Select: React.FC<Props> = ({
  label,
  name,
  options,
  optionTextDefault = 'Selecione uma opção',
  children: _children,
  ...rest
}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} value="" {...rest}>
        <option value="" disabled hidden>
          {optionTextDefault}
        </option>
        {options.map(({ value, label: labelOption }) => (
          <option key={`${value}`} value={value}>
            {labelOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
