import React from "react";
import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  backgroundColor?: string;
  margined?: boolean;
  paddinged?: boolean;
  className?: string;
  type?: "card" | "component";
  isBordered?: boolean;
}

const getMargin = (margined: boolean, type: "card" | "component") => {
  if (!margined) return "m-0";
  let margin = type === "component" ? "md:m-20 m-10 md:mb-8 mb-4" : "m-10 mb-4";

  return margin;
};

// work left for padding
const getPadding = (paddinged: boolean, type: "card" | "component") => {
  let padding = type === "card" ? "md:p-8 p-4" : "md:p-12 p-8";
  padding = !paddinged ? "p-0" : padding;
  return padding;
};

// modify background color
const Container: React.FC<ContainerProps> = ({ children, margined = true, paddinged = true, type = "component", backgroundColor = "bg-white", isBordered = false, className = "" }) => {
  let margin = getMargin(margined, type);
  let padding = getPadding(paddinged, type);
  let border = isBordered ? "border" : "";

  return <div className={`${padding} ${backgroundColor} ${margin} ${border} ${className}`}>{children}</div>;
};

export default Container;
