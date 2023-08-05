import React from "react";
import Container from "../CommonComponents/Container";
import app_logo from "../../assets/app_logo.png";
import { menuIcon } from "../../assets";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import data from "../../assets/combined/en/translation.json";
import { Link } from "react-router-dom";
import { getArrayFromObj } from "../../Utils/util";
import CustomButton from "../CommonComponents/CustomButton";
import CustomImage from "../CommonComponents/CustomImage";
import useResponsive from "../../Utils/useResponsive";

const HeaderPc = () => {
  const headerData = data.header.menu;
  return (
    <Container margin="m-0" className="px-12 py-4 shadow-md sticky top-0">
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
    <Container className="px-4 py-2 border rounded-xl shadow-md sticky top-10 z-1000 ">
      <FlexWrapper className="justify-between items-center">
        <CustomImage src={app_logo} alt="app_logo" className="w-12 h-12"></CustomImage>
        <CustomImage src={menuIcon} alt="menu_icon" className="w-6 h-6"></CustomImage>
      </FlexWrapper>
    </Container>
  );
};

const Header = () => {
  const isMobile = useResponsive();
  return <>{!isMobile ? <HeaderPc /> : <HeaderMobile />}</>;
};

export default Header;
