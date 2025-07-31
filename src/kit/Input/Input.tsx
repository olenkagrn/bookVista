import React from "react";
import type InputProps from "../../models/InputProps";

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type = "text",
  placeholder = "",
  className = "",
  disabled = false,
}) => {
  const defaultClassName =
    "border border-gray-300 rounded px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={`${defaultClassName} ${className}`}
      disabled={disabled}
    />
  );
};

export default Input;
