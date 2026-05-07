"use client";

import {
  FieldError,
  UseFormRegister,
} from "react-hook-form";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioFieldProps {
  label: string;
  name: string;
  options: RadioOption[];
  register: UseFormRegister<any>;
  error?: FieldError;
}

export default function RadioField({
  label,
  name,
  options,
  register,
  error,
}: RadioFieldProps) {
  return (
    <div className="space-y-4">

      {/* LABEL */}
      <label className="text-[15px] font-work-sans font-bold text-black">
        {label}
      </label>

      {/* OPTIONS */}
      <div className=" w-40 gap-4">

        {options.map((option) => (
          <label
            key={option.value}
            className="
              flex
              items-center
              gap-3
              px-5
              h-[56px]
              rounded-md
            
              border
              border-transparent
              cursor-pointer
              transition-all
              duration-300
              hover:border-black/20
            "
          >
            <input
              type="radio"
              value={option.value}
              {...register(name)}
              className="
                w-4
                h-4
                accent-black
              "
            />
            
            <span className="text-[15px]  text-black">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      {/* ERROR */}
      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}