import React, { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface SelectFieldProps {
  label: string;
  id: string;
  register: any;
  options: { value: string; label: string }[];
  error?: string;
}

const SelectField: FC<SelectFieldProps> = ({
  label,
  id,
  register,
  options,
  error,
}) => (
  <div className="flex flex-col space-y-[0.6rem]  w-full relative">
    <label
      htmlFor={id}
      className="text-[1.4rem] font-medium leading-[2rem] text-[#0F172A]"
    >
      {label}
    </label>
    <div className="mt-2 relative">
      <select
        id={id}
        {...register(id)}
        autoComplete={id}
        className="px-[1.2rem] py-[0.8rem] w-full leading-[2.4rem] rounded-[0.6rem] border border-[#94A3B8] outline-none text-[1.6rem] text-[#94A3B8]"
      >
        <option value="" selected>
          Select from dropdown
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-2 text-[1rem] text-red-400 absolute left-[0rem] -bottom-[1.4rem]">
          {error}
        </p>
      )}
    </div>
  </div>
);

export default SelectField;
