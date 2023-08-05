import React from "react";
import { ReactNode } from "react";
interface FlexProps {
  children: ReactNode;
  flexDirection?: string;
  justifyContent?: string;
  gap?: string;
  className?: string;
}

const FlexWrapper: React.FC<FlexProps> = ({ children, justifyContent = "items-center", flexDirection = "", gap = "", className = "" }) => {
  return <div className={`flex ${justifyContent} ${flexDirection} ${gap} ${className}`}>{children}</div>;
};

export default FlexWrapper;
