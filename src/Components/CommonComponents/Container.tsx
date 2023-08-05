import React from "react";
import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, backgroundColor = "bg-white", className = "" }) => {
  return <div className={`md:m-20 m-10 py-10 ${backgroundColor} ${className}`}>{children}</div>;
};

export default Container;
