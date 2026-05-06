"use client";

import {
  FieldError,
  UseFormRegister,
} from "react-hook-form";

interface PhoneFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

export default function PhoneField({
  label,
  name,
  placeholder,
  register,
  error,
}: PhoneFieldProps) {
  return (
    <div className="space-y-3">
      <label
        htmlFor={name}
        className="text-[15px] font-semibold text-black"
      >
        {label}
      </label>

      <div
        className="
          flex
          items-center
          h-[56px]
          rounded-md
          bg-[#f5f5f5]
          border
          border-transparent
          focus-within:border-black
          transition-all
          duration-300
          overflow-hidden
        "
      >
        <div className="px-4 text-black/60 border-r border-black/10">
          +234
        </div>

        <input
          id={name}
          type="tel"
          {...register(name)}
          placeholder={placeholder || "8012345678"}
          aria-invalid={!!error}
          className="
            flex-1
            h-full
            bg-transparent
            px-4
            outline-none
            text-[15px]
          "
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}