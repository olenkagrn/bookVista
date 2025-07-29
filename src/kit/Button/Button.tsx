import React from "react";

import type ButtonProps from "../../models/ButtonProps";

const Button: React.FC<ButtonProps> = ({
  buttonText,
  className = "",
  children,
}) => {
  return (
    <button
      className={`rounded-[12px] inline-block text-center  font-semibold border text-6 px-4 py-2 ${className}`}
    >
      <span className="flex items-center justify-center gap-2 text-inherit">
        {" "}
        {children}
        {buttonText}
      </span>
    </button>
  );
};

export default Button;
