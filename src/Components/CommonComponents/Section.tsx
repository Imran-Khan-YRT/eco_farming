import React from "react";
import { sectionTitle, sectionDescription } from "../../Utils/customStyles";
import FlexWrapper from "./FlexWrapper";
interface sectionProps {
  title: string;
  description: string;
  style?: string;
}

const Section: React.FC<sectionProps> = ({ title, description, style }) => {
  return (
    <FlexWrapper flexDirection="flex-col" style={`flex-start ${style}`}>
      <h1 className={sectionTitle}>{title}</h1>
      <p className={sectionDescription}>{description}</p>
    </FlexWrapper>
  );
};

export default Section;
