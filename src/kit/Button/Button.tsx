import React from "react";

import type ButtonProps from "../../models/ButtonProps";

const Button: React.FC<ButtonProps> = ({
  buttonText,
  className = "",
  children,
}) => {
  return (
    <button
      className={`rounded-[12px] text-[#2A2A2A] text-base font-medium border px-6 py-3 ${className}`}
    >
      {buttonText}
      {children}
    </button>
  );
};

export default Button;
