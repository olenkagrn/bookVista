import React from "react";
import iconsSpriteUrl from "../../assets/sprites.svg";
import type IconProps from "../../models/IconProps";

const Icon: React.FC<IconProps> = ({
  name,
  className = "",
  width = 48,
  height = 48,
}) => (
  <svg
    className={`inline-block fill-current rounded-full
 ${className}`}
    width={width}
    height={height}
  >
    <use href={`${iconsSpriteUrl}#${name}`} />
  </svg>
);

export default Icon;
