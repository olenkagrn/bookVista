import React from "react";

import type ButtonProps from "../../models/ButtonProps";

const Button: React.FC<ButtonProps> = ({
  buttonText,
  className = "",
  children,
  type,
  onClick,
}) => {
  const base =
    "cursor-pointer rounded-[8px]  focus:ring focus:ring-accent focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed inline-block text-center  font-semibold border text-6 px-4 py-2";

  const styles = {
    primary:
      base +
      "transition-colors duration-300 hover:bg-btn-hover focus:bg-accent bg-accent",
    transparent: base,
  };

  return (
    <button className={`${styles[type]} ${className}`} onClick={onClick}>
      <span className="flex items-center justify-center gap-2 text-inherit">
        {" "}
        {children}
        {buttonText}
      </span>
    </button>
  );
};

export default Button;
