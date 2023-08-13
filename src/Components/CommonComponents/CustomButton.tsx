import React from "react";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  type = "button",
  disabled = false,
  textColor = "text-white",
  backgroundColor = !disabled ? "bg-primary hover:bg-secondary" : "bg-[#E6E6E6]",
  className = "",
}) => {
  return (
    <button type={type} disabled={disabled} className={`rounded-md py-2 px-4 shadow-xl font-[500] ${textColor} ${backgroundColor} ${className}`}>
      {children}
    </button>
  );
};

export default CustomButton;
