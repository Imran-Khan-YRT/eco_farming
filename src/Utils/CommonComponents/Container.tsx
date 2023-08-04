import React from "react";
import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  padding?: string;
  style?: string;
  backgroundColor?: string;
}

const Container: React.FC<ContainerProps> = ({ children, padding = "", backgroundColor = "", style = "" }) => {
  return <div className={`${backgroundColor} ${padding} ${style}`}>{children}</div>;
};

export default Container;
