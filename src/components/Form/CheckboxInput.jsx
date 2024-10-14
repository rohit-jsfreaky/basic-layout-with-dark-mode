import React from 'react'

const CheckboxInput = ({ label, name, checked, onChange, error }) => {
    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            name={name}
            id={name}
            checked={checked}
            onChange={onChange}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          />
        </div>
        
      </div>
    );
  };

export default CheckboxInput
