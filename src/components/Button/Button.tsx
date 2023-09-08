import React, { FC } from "react";
import { ButtonProps } from '../../types/buttonInterface'




const Button: FC<ButtonProps> = ({ text, color, onClick }) => (
  <button className="button" style={{background: color ?? 'buttonface'}} onClick={onClick}>
    {text}
  </button>
);

export default Button