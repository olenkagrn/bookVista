import React from "react";

import type ButtonProps from "../../models/ButtonProps";

const Button: React.FC<ButtonProps> = ({
  buttonText,
  className = "",
  children,
}) => {
  return (
    <button
      className={`rounded-[12px] inline-block text-center text-[#2A2A2A]  font-semibold border text-6 px-6 py-3 ${className}`}
    >
      {buttonText}
      {children}
    </button>
  );
};

export default Button;
