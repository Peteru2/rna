"use client";

import {
  FieldError,
  UseFormRegister,
} from "react-hook-form";

interface CheckboxFieldProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

export default function CheckboxField({
  label,
  name,
  register,
  error,
}: CheckboxFieldProps) {
  return (
    <div className="space-y-3">

      {/* CHECKBOX WRAPPER */}
      <label
        className="
          flex
          items-center
          gap-3
          cursor-pointer
          select-none
        "
      >
        {/* INPUT */}
        <input
          type="checkbox"
          {...register(name)}
          className="
            w-5
            h-5
            rounded
            border-gray-300
            accent-black
            cursor-pointer
          "
        />

        {/* LABEL */}
        <span className="text-[15px] text-black font-medium">
          {label}
        </span>
      </label>

      {/* ERROR */}
      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}