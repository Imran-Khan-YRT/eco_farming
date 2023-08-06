import React from "react";
import { sectionTitle, sectionDescription } from "../../Utils/customStyles";
import FlexWrapper from "./FlexWrapper";
interface sectionProps {
  title: string;
  description: string;
  className?: string;
  titleColor?: string;
  titleStyle?: string;
}

const Section: React.FC<sectionProps> = ({ title, description, className = "", titleColor = "", titleStyle = { sectionTitle } }) => {
  return (
    <FlexWrapper flexDirection="flex-col" className={` ${className}`} justifyContent="flex-start">
      <h1 className={`${sectionTitle} ${titleColor} ${titleStyle}`}>{title}</h1>
      <p className={sectionDescription}>{description}</p>
    </FlexWrapper>
  );
};

export default Section;
