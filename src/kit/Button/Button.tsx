import React from "react";

import type ButtonProps from "../../models/ButtonProps";

const Button: React.FC<ButtonProps> = ({
  buttonText,
  className = "",
  children,
  type,
}) => {
  const base =
    "cursor-pointer rounded-[12px]  focus:ring focus:ring-accent focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed inline-block text-center  font-semibold border text-6 px-4 py-2";

  const styles = {
    primary:
      base +
      "transition-colors duration-300 hover:bg-btn-hover focus:bg-accent",
    transparent: base,
  };

  return (
    <button className={`${styles[type]} ${className}`}>
      <span className="flex items-center justify-center gap-2 text-inherit">
        {" "}
        {children}
        {buttonText}
      </span>
    </button>
  );
};

export default Button;
