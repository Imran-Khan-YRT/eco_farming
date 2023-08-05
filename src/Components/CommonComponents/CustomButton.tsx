import React from "react";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ children, type = "button", disabled = false, className = "" }) => {
  return (
    <button type={type} disabled={disabled} className={`mr-auto bg-primary hover:bg-secondary text-white rounded-md py-2 px-4 shadow-lg ${className}`}>
      {children}
    </button>
  );
};

export default CustomButton;
