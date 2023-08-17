import React, { ReactNode } from "react";
import Section from "./Section";
import CustomButton from "./CustomButton";
import FlexWrapper from "./FlexWrapper";
import CustomImage from "./CustomImage";
import Container from "./Container";
import { customText_0, customText_1, customText_2, customText_3, customText_4, listText_1, listText_2, listText_3, sectionTitle } from "../../Utils/customStyles";
import { useResponsiveContext } from "../../Utils/useResponsive/ResponsiveContext";
interface ZigZagProps {
  title: string;
  id?: number;
  description?: string | ReactNode;
  buttonText?: string;
  image?: string;
  className?: string;
  backgroundColor?: string;
  topButtonImage?: string;
  descriptionStyle?: string;
  titleStyle?: string;
}

const ZigZag: React.FC<ZigZagProps> = ({
  id = 0,
  title = "",
  description = "",
  buttonText = "",
  image = "",
  backgroundColor = "bg-tertiary",
  topButtonImage = "",
  titleStyle = sectionTitle,
  descriptionStyle = "",
  className,
}) => {
  return (
    <Container margined={false} paddinged={false} type="card" className="w-full !pt-0" backgroundColor={backgroundColor}>
      <FlexWrapper className={`${id % 2 === 1 ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"}  justify-bewteen lg:w-[70%] md:w-[85%] m-auto md:gap-24 gap-4 md:mb-12 mb-24`}>
        <CustomImage src={image} alt={`image-${id}`} className="md:w-[50%] w-[80%] md:h-[330px] h-[300px]" />
        <FlexWrapper flexDirection="flex-col" className={`md:w-[50%] w-[70%] gap-4 !items-start`} justifyContent="justify-center">
          {topButtonImage != "" && <CustomImage src={topButtonImage} alt={`imageBtn`} className="w-32" />}
          <Section title={title} description={description} titleColor="text-black" titleStyle={`${titleStyle}`} descriptionStyle={`${descriptionStyle}`} className="max-w-[400px]" />
          {buttonText != "" && <CustomButton>{buttonText}</CustomButton>}
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

export default ZigZag;
