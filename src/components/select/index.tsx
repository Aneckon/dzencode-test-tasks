import React, { FC } from 'react';

interface SelectProps {
  label: string;
  types: { value: string; name: string; id: number }[];
  value: string | undefined;
  onChange: ((value: string) => void) | undefined;
}

export const Select: FC<SelectProps> = ({ types, label, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}>
        {types.map((item) => (
          <option key={item.id} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
