import React, { ReactNode } from "react";
import { sectionTitle, sectionDescription } from "../../Utils/customStyles";
import FlexWrapper from "./FlexWrapper";
interface sectionProps {
  title: string;
  description: string | ReactNode;
  className?: string;
  titleColor?: string;
  titleStyle?: string;
}

const Section: React.FC<sectionProps> = ({ title, description, className = "", titleColor = "", titleStyle = { sectionTitle } }) => {
  return (
    <FlexWrapper flexDirection="flex-col" className={` ${className}`} justifyContent="flex-start">
      <h1 className={`${sectionTitle} ${titleColor} ${titleStyle}`}>{title}</h1>
      <div className={sectionDescription}>{description}</div>
    </FlexWrapper>
  );
};

export default Section;
