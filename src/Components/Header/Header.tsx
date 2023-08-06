import React from "react";
import Container from "../CommonComponents/Container";
import app_logo from "../../assets/app_logo.png";
import { image1, menuIcon } from "../../assets";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import data from "../../assets/combined/en/translation.json";
import { Link } from "react-router-dom";
import { getArrayFromObj } from "../../Utils/util";
import CustomButton from "../CommonComponents/CustomButton";
import CustomImage from "../CommonComponents/CustomImage";
import useResponsive from "../../Utils/useResponsive";
import Carousel from "./Carousel";

const HeaderPc = () => {
  const headerData = data.header.menu;
  return (
    <Container margin="m-0" className="px-12 py-4 shadow-md sticky top-0 z-1000" backgroundColor="bg-white">
      <FlexWrapper className="justify-between">
        <CustomImage src={app_logo} alt="app_logo" className="w-12 h-12"></CustomImage>
        <FlexWrapper gap="gap-8" className="items-center">
          {headerData.map((menuItem) => (
            <Link to={menuItem.to} key={menuItem.to}>
              {menuItem.text}
            </Link>
          ))}
          <CustomButton className="py-1">{data.header.button.downloadSignUp}</CustomButton>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

const HeaderMobile = () => {
  return (
    <div className="relative h-[500px]">
      <Carousel />
      <Container className="px-8 py-2 border rounded-xl shadow-md fixed top-10 z-1000 mt-0 w-[85%]" backgroundColor="bg-white">
        <FlexWrapper className="justify-between items-center">
          <CustomImage src={app_logo} alt="app_logo" className="w-12 h-12"></CustomImage>
          <CustomImage src={menuIcon} alt="menu_icon" className="w-6 h-6"></CustomImage>
        </FlexWrapper>
      </Container>
    </div>
  );
};

const Header = () => {
  const { isMobile, isTablet, isPc } = useResponsive();
  console.log(isMobile, isTablet, isPc);
  return <>{isPc ? <HeaderPc /> : <HeaderMobile />}</>;
};

export default Header;

// {!isPc && <CustomImage src={home_image1} alt="home_image1" className="top-0" />}
