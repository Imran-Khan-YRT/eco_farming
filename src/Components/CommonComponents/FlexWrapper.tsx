import React from "react";
import { ReactNode } from "react";
interface FlexProps {
  children: ReactNode;
  flexDirection?: string;
  gap?: string;
  style?: string;
}

const FlexWrapper: React.FC<FlexProps> = ({ children, flexDirection = "", gap = "", style = "" }) => {
  return <div className={`flex  ${flexDirection} ${gap} ${style}`}>{children}</div>;
};

export default FlexWrapper;
