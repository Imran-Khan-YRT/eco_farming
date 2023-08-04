import React from "react";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  style?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ children, style = "" }) => {
  return <button className={`bg-primary hover:bg-secondary text-white rounded-md py-1 px-4 shadow-md ${style}`}>{children}</button>;
};

export default CustomButton;
