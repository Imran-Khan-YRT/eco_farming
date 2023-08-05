import React from "react";
import { sectionTitle, sectionDescription } from "../../Utils/customStyles";
import FlexWrapper from "./FlexWrapper";
interface sectionProps {
  title: string;
  description: string;
  className?: string;
  titleColor?: string;
}

const Section: React.FC<sectionProps> = ({ title, description, className = "", titleColor = "" }) => {
  return (
    <FlexWrapper flexDirection="flex-col" className={`flex-start ${className}`}>
      <h1 className={`${sectionTitle} ${titleColor}`}>{title}</h1>
      <p className={sectionDescription}>{description}</p>
    </FlexWrapper>
  );
};

export default Section;
