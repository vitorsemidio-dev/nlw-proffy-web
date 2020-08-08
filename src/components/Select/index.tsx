import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
}

const Select: React.FC<Props> = ({
  label,
  name,
  children,
  ...rest
}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>
        {label}
      </label>
      <select id={name} {...rest}/>
    </div>
  )
}

export default Select;