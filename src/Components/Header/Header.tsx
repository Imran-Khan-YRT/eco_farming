import React from "react";
import Container from "../../Utils/CommonComponents/Container";
import app_logo from "../../assets/app_logo.png";
import { menuIcon } from "../../assets";
import FlexWrapper from "../../Utils/CommonComponents/FlexWrapper";
import data from "../../assets/combined/en/translation.json";
import { Link } from "react-router-dom";
import { getArrayFromObj } from "../../Utils/util";
import CustomButton from "../../Utils/CommonComponents/CustomButton";
import CustomImage from "../../Utils/CommonComponents/CustomImage";
import useResponsive from "../../Utils/useResponsive";

const HeaderPc = () => {
  const headerData = data.header.menu;
  return (
    <Container style="px-12 py-4 shadow-md">
      <FlexWrapper style="justify-between">
        <CustomImage src={app_logo} alt="app_logo" style="w-12 h-12"></CustomImage>
        <FlexWrapper gap="gap-8">
          {headerData.map((menuItem) => (
            <Link to={menuItem.to} key={menuItem.to}>
              {menuItem.text}
            </Link>
          ))}
          <CustomButton>{data.header.button.downloadSignUp}</CustomButton>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

const HeaderMobile = () => {
  return (
    <Container style="m-10 px-4 py-2 border rounded-xl shadow-md sticky top-10 z-1000 ">
      <FlexWrapper style="justify-between">
        <CustomImage src={app_logo} alt="app_logo" style="w-12 h-12"></CustomImage>
        <CustomImage src={menuIcon} alt="menu_icon" style="w-6 h-6"></CustomImage>
      </FlexWrapper>
    </Container>
  );
};

const Header = () => {
  const isMobile = useResponsive();
  return <>{!isMobile ? <HeaderPc /> : <HeaderMobile />}</>;
};

export default Header;
