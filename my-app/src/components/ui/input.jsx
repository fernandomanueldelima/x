import React from 'react';

const Input = ({ value, onChange, placeholder, type = 'text', ...props }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg bg-muted px-3 py-2 text-foreground placeholder-gray-400 border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
      {...props}
    />
  );
};

export default Input;
