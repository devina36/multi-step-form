import React from 'react';
import { useEffect } from 'react';

const InputField = ({
  type,
  name,
  titleName,
  error,
  placeholder,
  onChange,
}) => {
  const handlephone = () => {
    let coba = '+99077289';
    coba = coba
      .split('')
      .reverse()
      .join('')
      .replace(/([0-9+]{3})/g, '$1 ')
      .split('')
      .reverse()
      .join('');
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="capitalize tracking-[-0.075em] leading-none font-medium text-marine"
        >
          {titleName.toLowerCase()}
        </label>
        {error && (
          <span className=" text-strawberry leading-none text-sm font-bold">
            This field is required
          </span>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full max-w-[450px] h-12 px-4 font-medium border placeholder:text-cool rounded-lg mt-[10px] focus:outline-none focus:border-purplish ${
          error ? 'border-strawberry' : 'border-light-gray'
        }`}
      />
    </div>
  );
};

export default InputField;
