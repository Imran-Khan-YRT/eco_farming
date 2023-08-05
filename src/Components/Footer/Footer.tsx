import React from "react";
import Container from "../CommonComponents/Container";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import CustomImage from "../CommonComponents/CustomImage";
import { app_logo } from "../../assets";
import data from "../../assets/combined/en/translation.json";
import { getArrayFromObj } from "../../Utils/util";
import useResponsive from "../../Utils/useResponsive";
import { footerIcons, footerButtons } from "../../assets";
const footerPCStyle = "grid grid-cols-3";
const footerMobileStyle = "flex flex-col pt-3";
const captionText = "font-light md:text-[12px] sm:[text-11px] text-[10px]";

const Footer = () => {
  const footerData = Object.values(data.footer.items);
  const isMobile = useResponsive();
  return (
    <Container className="border p-8 pl-12 md:bg-white bg-tertiary mt-8">
      <FlexWrapper className="md:flex-row flex-col justify-between items-center">
        <CustomImage src={app_logo} alt="app_logo" className="w-16 h-16"></CustomImage>
        <div className={!isMobile ? footerPCStyle : footerMobileStyle}>
          {footerData.map((value) => (
            <h4 className="py-2 px-12 font-normal">{value}</h4>
          ))}
        </div>
      </FlexWrapper>
      <FlexWrapper className="justify-between items-center py-8 md:flex-row flex-col gap-10">
        <FlexWrapper className="gap-2">
          {footerIcons.map((value) => (
            <CustomImage src={value} alt=" footer icons" className="w-8 h-8" />
          ))}
        </FlexWrapper>
        <FlexWrapper className="gap-4">
          {footerButtons.map((value) => (
            <CustomImage src={value} alt="footer btns" className="w-25" />
          ))}
        </FlexWrapper>
      </FlexWrapper>
      <div className="h-[1px] md:bg-[#F7F7F7] bg-[#A9A9A9]"></div>
      <FlexWrapper className={`${captionText} justify-between mt-2`}>
        <h6>Privacy Policy | Terms & Condition | Site Map</h6>
        <h6>2023. All Rights Reserved MIMODZI.com </h6>
      </FlexWrapper>
    </Container>
  );
};

export default Footer;
