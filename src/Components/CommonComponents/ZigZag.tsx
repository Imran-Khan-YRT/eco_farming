import React from "react";
import Section from "./Section";
import CustomButton from "./CustomButton";
import FlexWrapper from "./FlexWrapper";
import CustomImage from "./CustomImage";
import Container from "./Container";
interface ZigZagProps {
  title: string;
  id?: number;
  description?: string;
  buttonText?: string;
  image?: string;
  className?: string;
}

const ZigZag: React.FC<ZigZagProps> = ({ id = 0, title = "", description = "", buttonText = "", image = "", className }) => {
  return (
    <Container margined={true} type="card" className="w-full" backgroundColor="bg-tertiary">
      <FlexWrapper className={`${id % 2 === 0 ? "flex-row-reverse" : "flex-row"}  justify-center items-center md:gap-20  flex-wrap`}>
        <CustomImage src={image} alt={`image-${id}`} className="md:w-[400px] w-[350px] h-[400px]" />
        <FlexWrapper flexDirection="flex-col" className="w-[400px] gap-4 sm:items-start items-center" justifyContent="justify-center">
          <Section title={title} description={description} titleColor="text-black" />
          <CustomButton className="">{buttonText}</CustomButton>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

export default ZigZag;
