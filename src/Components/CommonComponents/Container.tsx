import React from "react";
import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  backgroundColor?: string;
  margin?: string;
  className?: string;
  padding?: string;
}

const Container: React.FC<ContainerProps> = ({ children, margin = "md:m-20 m-10  mb-20", padding = "p-10", backgroundColor = "inherit", className = "" }) => {
  return <div className={`${padding} ${backgroundColor} ${margin} ${className}`}>{children}</div>;
};

export default Container;
