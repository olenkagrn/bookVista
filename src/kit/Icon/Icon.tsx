import React from "react";
import iconsSpriteUrl from "../../assets/sprites.svg";
import type IconProps from "../../models/IconProps";

const Icon: React.FC<IconProps> = ({
  name,
  className = "",
  width = 48,
  height = 48,
  onClick,
}) => (
  <span className="list-none cursor-pointer">
    <svg
      className={`inline-block fill-current rounded-full
 ${className}`}
      width={width}
      height={height}
      onClick={onClick}
    >
      <use href={`${iconsSpriteUrl}#${name}`} />
    </svg>
  </span>
);

export default Icon;
