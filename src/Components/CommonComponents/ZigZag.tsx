import React from "react";
import Section from "./Section";
import CustomButton from "./CustomButton";
import FlexWrapper from "./FlexWrapper";
import CustomImage from "./CustomImage";
import Container from "./Container";
import { customText_0, customText_1, customText_2 } from "../../Utils/customStyles";
interface ZigZagProps {
  title: string;
  id?: number;
  description?: string;
  buttonText?: string;
  image?: string;
  className?: string;
  backgroundColor?: string;
  topButtonImage?: string;
}

const ZigZag: React.FC<ZigZagProps> = ({ id = 0, title = "", description = "", buttonText = "", image = "", backgroundColor = "bg-tertiary", topButtonImage = "", className }) => {
  return (
    <Container margined={false} paddinged={false} type="card" className="w-full" backgroundColor={backgroundColor}>
      <FlexWrapper className={`${id % 2 === 0 ? "flex-row-reverse" : "flex-row"}  justify-center items-center  lg:gap-24 flex-wrap`}>
        <CustomImage src={image} alt={`image-${id}`} className="md:w-[25rem] w-[20rem] h-[450px]" />
        <FlexWrapper flexDirection="flex-col" className="md:w-[25rem] w-full gap-4 sm:items-start items-center" justifyContent="justify-center">
          {topButtonImage != "" && <CustomImage src={topButtonImage} alt={`imageBtn`} className=" w-28" />}
          <Section title={title} description={description} titleColor="text-black" titleStyle={customText_0} />
          <CustomButton className="">{buttonText}</CustomButton>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

export default ZigZag;
