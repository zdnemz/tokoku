'use client';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Input({
  label,
  type,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  type: string;
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="relative w-full">
      {type === 'password' && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? (
            <FontAwesomeIcon
              icon={faEye}
              className="text-text-light dark:text-text-dark"
            />
          ) : (
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="text-text-light dark:text-text-dark"
            />
          )}
        </button>
      )}
      <input
        placeholder=" "
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        className="input"
        {...props}
      />
      <label className="input-label">{label}</label>
    </div>
  );
}
