import React from 'react'

const FormInput = ({ label, name, type = "text", value, onChange, error, placeholder }) => {
    return (
      <div>
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {error && <div className="text-red-600 text-xs mt-2">{error}</div>}
      </div>
    );
  };

export default FormInput
