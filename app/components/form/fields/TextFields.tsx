"use client";

import {
  FieldError,
  UseFormRegister,
} from "react-hook-form";

interface TextFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

export default function TextField({
  label,
  name,
  placeholder,
  register,
  error,
}: TextFieldProps) {
  return (
    <div className="space-y-3">
      {/* LABEL */}
      <label
        htmlFor={name}
        className="text-[15px]  font-work-sans font-bold text-black"
      >
        {label}
      </label>

      {/* INPUT */}
      <input
        id={name}
        {...register(name)}
        placeholder={placeholder}
        aria-invalid={!!error}
        className="
          mt-2
          w-full
          h-[56px]
          rounded-md
          bg-[#f5f5f5]
          px-5
          text-[15px]
          outline-none
          border
          border-transparent
          transition-all
          duration-300
          focus:border-black
          focus:bg-white
        "
      />

      {/* ERROR */}
      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}