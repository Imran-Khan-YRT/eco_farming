import React from "react";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ children, type = "button", backgroundColor = "bg-primary hover:bg-secondary", textColor = "text-white", disabled = false, className = "" }) => {
  return (
    <button type={type} disabled={disabled} className={`rounded-md py-2 px-4 shadow-lg font-light ${textColor} ${backgroundColor} ${className}`}>
      {children}
    </button>
  );
};

export default CustomButton;
