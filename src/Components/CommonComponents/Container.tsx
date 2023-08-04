import React from "react";
import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  style?: string;
}

const Container: React.FC<ContainerProps> = ({ children, style = "" }) => {
  return <div className={`${style}`}>{children}</div>;
};

export default Container;
