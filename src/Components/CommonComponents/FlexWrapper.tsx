import React from "react";
import { ReactNode } from "react";
interface FlexProps {
  children: ReactNode;
  flexDirection?: string;
  gap?: string;
  className?: string;
}

const FlexWrapper: React.FC<FlexProps> = ({ children, flexDirection = "", gap = "", className = "" }) => {
  return <div className={`flex  ${flexDirection} ${gap} ${className}`}>{children}</div>;
};

export default FlexWrapper;
