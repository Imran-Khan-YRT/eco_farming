import React from "react";
import { ReactNode } from "react";
interface FlexProps {
  children: ReactNode;
  gap?: string;
  style?: string;
}

const FlexWrapper: React.FC<FlexProps> = ({ children, gap, style = "" }) => {
  return <div className={`flex items-center ${gap} ${style}`}>{children}</div>;
};

export default FlexWrapper;
