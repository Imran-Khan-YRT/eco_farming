import React, { ReactNode } from "react";
import { sectionTitle, sectionDescription } from "../../Utils/customStyles";
import FlexWrapper from "./FlexWrapper";
interface sectionProps {
  title: string;
  description: string | ReactNode;
  className?: string;
  titleColor?: string;
  titleStyle?: string;
  descriptionStyle?: string;
}

const Section: React.FC<sectionProps> = ({ title, description = "", className = "", titleColor = "", titleStyle = sectionTitle, descriptionStyle = sectionDescription }) => {
  return (
    <FlexWrapper flexDirection="flex-col" className={` ${className} max-h-[400px] overflow-scroll`} justifyContent="flex-start">
      <div className={`${titleColor} ${titleStyle}`}>{title}</div>
      {description != "" && <div className={descriptionStyle}>{description}</div>}
    </FlexWrapper>
  );
};

export default Section;
