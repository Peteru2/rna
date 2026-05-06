"use client";

import {
  FieldError,
  UseFormRegister,
} from "react-hook-form";

interface TextAreaFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  rows?: number;
}

export default function TextAreaField({
  label,
  name,
  placeholder,
  register,
  error,
  rows = 6,
}: TextAreaFieldProps) {
  return (
    <div className="space-y-3">
      <label
        htmlFor={name}
        className="text-[15px] font-semibold text-black"
      >
        {label}
      </label>

      <textarea
        id={name}
        rows={rows}
        {...register(name)}
        placeholder={placeholder}
        aria-invalid={!!error}
        className="
          w-full
          rounded-md
          bg-[#f5f5f5]
          px-5
          py-4
          text-[15px]
          outline-none
          border
          border-transparent
          resize-none
          transition-all
          duration-300
          focus:border-black
          focus:bg-white
        "
      />

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}