import React from "react";
import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  backgroundColor?: string;
  margin?: string;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, margin = "md:m-20 m-10", backgroundColor = "bg-white", className = "" }) => {
  return <div className={`p-10 ${backgroundColor} ${margin} ${className}`}>{children}</div>;
};

export default Container;
