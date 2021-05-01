import React from "react";

export interface GhSpinnerIconProps {
  className: string;
}

export const GhSpinnerIcon: React.FC<GhSpinnerIconProps> = (props) => {
  return (
    <svg
      width="92%"
      height="92%"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity=".5"
        d="M8 15A7 7 0 108 1a7 7 0 000 14v0z"
        stroke="#dbab0a"
        stroke-width="2"
      ></path>
      <path d="M15 8a7 7 0 01-7 7" stroke="#dbab0a" stroke-width="2"></path>
      <path d="M8 12a4 4 0 100-8 4 4 0 000 8z" fill="#dbab0a"></path>
    </svg>
  );
};
