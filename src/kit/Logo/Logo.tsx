import React from "react";
import logoSprite from "../../assets/sprites.svg";
interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ className = "" }) => (
  <svg
    width="48"
    height="48"
    className={`fill-current text-[#2A2A2A] ${className}`}
  >
    <use href={`${logoSprite}#logo-icon`} />
  </svg>
);
export default Logo;
