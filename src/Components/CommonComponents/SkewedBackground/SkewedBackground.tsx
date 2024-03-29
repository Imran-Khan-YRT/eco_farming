import React, { ReactNode } from "react";
import "./Skewed.css";
import { useResponsiveContext } from "../../../Utils/useResponsive/ResponsiveContext";
interface SkewedBacgroundProps {
  children?: ReactNode;
  backgroundColor?: string;
  display?: string;
}

const SkewedBacground: React.FC<SkewedBacgroundProps> = ({ children, backgroundColor = "#f7f7f7 ", display = "block" }) => {
  const { isPc } = useResponsiveContext();
  display = !isPc ? "hidden" : "block";
  return (
    <div className="w-full -z-20">
      <div className={`skewed-background ${display}`}>
        <svg viewBox="0 0 600 600" preserveAspectRatio="none">
          <path d="M 0 0 L 600 0 L 600 500 L 0 600 Z" style={{ fill: backgroundColor }} />
        </svg>
      </div>
      {children}
    </div>
  );
};

export default SkewedBacground;
