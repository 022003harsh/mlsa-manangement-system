import React, { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputFieldProps {
  label: string;
  id: string;
  register: any;
  placeholder: string;
  error?: string;
}

const InputField: FC<InputFieldProps> = ({ label, id, register, placeholder, error }) => (
  <div className="flex flex-col space-y-[0.6rem] relative">
    <label
      htmlFor={id}
      className="text-[1.4rem] font-medium leading-[2rem] text-[#0F172A]"
    >
      {label}
    </label>
    <div className="w-full">
      <input
        type="text"
        id={id}
        {...register(id)}
        autoComplete={id}
        placeholder={placeholder}
        className="px-[1.2rem] py-[0.8rem] w-full leading-[2.4rem] rounded-[0.6rem] border border-[#94A3B8] outline-none text-[1.6rem] text-[#94A3B8]"
      />
      {error && (
        <p className="mt-2 text-[1rem] text-red-400 absolute left-[0rem] -bottom-[1.4rem]">
          {error}
        </p>
      )}
    </div>
  </div>
);

export default InputField;