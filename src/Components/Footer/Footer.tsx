import React from "react";
import Container from "../CommonComponents/Container";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import CustomImage from "../CommonComponents/CustomImage";
import { app_logo } from "../../assets";
import data from "../../assets/combined/en/translation.json";
import { getArrayFromObj } from "../../Utils/util";
import useResponsive from "../../Utils/useResponsive";
import { footerIcons, footerButtons } from "../../assets";

import { listText_2, captionText } from "../../Utils/customStyles";
const footerPCStyle = `grid grid-cols-3`;
const footerMobileStyle = `flex flex-col pt-3`;

const Footer = () => {
  const footerData = Object.values(data.footer.items);
  const isMobile = useResponsive();
  return (
    <Container backgroundColor="bg-tertiary" margin="m-0" className="m-0">
      <FlexWrapper className="md:flex-row flex-col justify-between">
        <CustomImage src={app_logo} alt="app_logo" className="w-16 h-16"></CustomImage>
        <div className={!isMobile ? footerPCStyle : footerMobileStyle}>
          {footerData.map((value) => (
            // use Link later
            <a href="" className={`${listText_2} px-4`}>
              {value}
            </a>
          ))}
        </div>
      </FlexWrapper>
      <FlexWrapper className="justify-between md:flex-row flex-col py-12 gap-8">
        <FlexWrapper className="gap-2">
          {footerIcons.map((value) => (
            <CustomImage src={value} alt=" footer icons" className="w-8 h-8" />
          ))}
        </FlexWrapper>
        <FlexWrapper className="gap-4">
          {footerButtons.map((value) => (
            <CustomImage src={value} alt="footer btns" className="w-24" />
          ))}
        </FlexWrapper>
      </FlexWrapper>
      <div className="h-[1px]  bg-[#A9A9A9]"></div>
      <FlexWrapper className={`${captionText} justify-between mt-2`}>
        <h6>Privacy Policy | Terms & Condition | Site Map</h6>
        <h6>2023. All Rights Reserved MIMODZI.com </h6>
      </FlexWrapper>
    </Container>
  );
};

export default Footer;
