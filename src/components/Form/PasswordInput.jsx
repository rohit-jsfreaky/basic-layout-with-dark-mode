import React from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const PasswordInput = ({ label, name, value, onChange, error, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <div className="relative">
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <div
          className="absolute inset-y-0 right-3 mt-7 flex items-center cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
        {error && <div className="text-red-600 text-xs mt-2">{error}</div>}
      </div>
    );
  };

export default PasswordInput
