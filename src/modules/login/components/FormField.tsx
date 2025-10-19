import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  minLength?: number;
  name: string;
  disabled?: boolean;
}

export default function FormField({ id, label, type, value, onChange, placeholder, minLength, name, disabled }: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full md:w-3/5 relative mx-auto">
      <label htmlFor={id} className="text-left mb-1.5 font-semibold text-sm sm:text-base">
        {label}
      </label>

      {type === "password" ? (
        <div className="relative w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            id={id}
            className="h-11 p-1.5 pr-12 bg-gray-800/30 border-2 border-gray-700 text-white text-base w-full rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:border-purple-500 transition-all duration-300"
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            required
            disabled={disabled}

          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-700/50 rounded-full flex justify-center items-center text-white/80 hover:text-white hover:bg-gray-600 transition-colors duration-300 p-0"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      ) : (
        <input
          type={type}
          id={id}
          className="h-11 p-1.5 pr-12 bg-gray-800/30 border-2 border-gray-700 text-white text-base w-full rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:border-purple-500 transition-all duration-300"
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          minLength={minLength}
          required
          disabled={disabled}
        />
      )}
    </div>


  );
}