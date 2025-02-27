import React from 'react';

interface InputProps {
  id: string;
  label: string;
  onChange: any;
  value: string;
  type?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  onChange,
  value,
  type,
  className = '',
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className={className}
        placeholder=" "
      />
      <label
        className="
          absolute
          text-md text-zinc-400
          duration-150
          transform -translate-y-3
          scale-75
          top-4
          z-10
          origin-[0]
          left-6
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
