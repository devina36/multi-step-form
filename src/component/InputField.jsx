import { Field } from 'formik';
import React from 'react';

const InputField = ({
  type,
  name,
  titleName,
  error = false,
  placeholder,
  onChange,
  value,
  // validate,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="capitalize tracking-[-0.1em] text-sm md:text-base md:tracking-[-0.075em] leading-none md:leading-none font-medium text-marine"
        >
          {titleName.toLowerCase()}
        </label>
        {error === true && (
          <span className=" text-strawberry leading-none md:leading-none text-xs md:text-sm font-bold">
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
        value={value}
        className={`w-full max-w-[450px] h-10 md:h-12 text-sm tracking-wide md:tracking-normal md:text-base px-[15px] md:px-4 font-medium border placeholder:text-cool rounded md:rounded-lg mt-[5px] md:mt-[10px] focus:outline-none focus:border-purplish ${
          error === true ? 'border-strawberry' : 'border-light-gray'
        }`}
      />
    </div>
  );
};

export default InputField;
