import * as React from 'react';
import { clsx } from '../../utils/clsx';

interface InputFieldProps {
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  variant = 'outlined',
  size = 'md',
}) => {
  const baseClasses =
    'w-full transition-colors duration-200 ease-in-out border rounded-md focus:outline-none';

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  const variantClasses = {
    filled: 'bg-gray-100 border-transparent focus:bg-white focus:border-blue-500',
    outlined: 'bg-white border-gray-300 focus:border-blue-500',
    ghost: 'bg-transparent border-transparent hover:bg-gray-100 focus:bg-white',
  };

  const effectiveInvalid = invalid || !!errorMessage;

  const stateClasses = clsx(
    disabled && 'cursor-not-allowed bg-gray-200 text-gray-500',
    effectiveInvalid && 'border-red-500 text-red-600 focus:border-red-500',
    loading && 'pointer-events-none opacity-70'
  );

  const inputId = id || React.useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
           type="text"
           value={value !== undefined ? value : undefined}
           defaultValue={value === undefined ? '' : undefined}
           onChange={onChange}
           placeholder={placeholder}
           disabled={disabled || loading}
           aria-invalid={invalid}
           className={clsx(
            baseClasses,
            sizeClasses[size],
            variantClasses[variant],
            stateClasses,
            'rounded-md'
           )}
      />


        {loading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="animate-spin h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 
                   0 5.373 0 12h4zm2 5.291A7.962 
                   7.962 0 014 12H0c0 3.042 1.135 
                   5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </div>

      {helperText && !errorMessage && (
        <p id={`${inputId}-desc`} className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}

      {errorMessage && (
        <p id={`${inputId}-desc`} className="mt-1 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;
