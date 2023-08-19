import React from "react";
import Container from "../CommonComponents/Container";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import CustomImage from "../CommonComponents/CustomImage";
import { app_logo } from "../../assets";
import data from "../../assets/combined/en/translation.json";

import { footerIcons, footerButtons } from "../../assets";

import { captionText, customText_4 } from "../../Utils/customStyles";
import { scrollToTop } from "../../Utils/util";
import { useResponsiveContext } from "../../Utils/useResponsive/ResponsiveContext";
import { Link } from "react-router-dom";
const footerPCStyle = `grid grid-cols-3`;
const footerMobileStyle = `flex flex-col pt-8`;

interface FooterProps {
  activeLink: string | null;
  setActiveLink: (link: string) => void;
}

const Footer: React.FC<FooterProps> = ({ activeLink, setActiveLink }) => {
  const footerData = data.footer.items;
  const { isPc } = useResponsiveContext();
  return (
    <Container backgroundColor="bg-tertiary" margined={false}>
      <FlexWrapper className="md:flex-row flex-col justify-between">
        <CustomImage src={app_logo} alt="app_logo" className="w-16 h-16"></CustomImage>
        <div className={isPc ? footerPCStyle : footerMobileStyle}>
          {footerData.map((footerItem) => (
            <Link
              to={footerItem.to}
              key={footerItem.to}
              onClick={() => {
                setActiveLink(footerItem.to);
                scrollToTop();
              }}
              className={`${customText_4} px-4 hover:text-secondary hover:font-[450] ${activeLink === footerItem.to ? "text-secondary" : ""}`}
            >
              {footerItem.text}
            </Link>
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
