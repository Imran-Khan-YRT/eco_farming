import React from "react";
import Container from "../CommonComponents/Container";
import app_logo from "../../assets/app_logo.png";
import { menuIcon } from "../../assets";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import data from "../../assets/combined/en/translation.json";
import { Link } from "react-router-dom";
import CustomButton from "../CommonComponents/CustomButton";
import CustomImage from "../CommonComponents/CustomImage";
import Carousel from "./Carousel";
import { useResponsiveContext } from "../../Utils/useResponsive/ResponsiveContext";

const HeaderPc = () => {
  const headerData = data.header.menu;
  return (
    <Container margined={false} type="card" className="md:py-4 mb-0 shadow-md sticky top-0 z-1000">
      {/*less y-padding margin bottom 0 for  sticky header */}
      <FlexWrapper className="justify-between">
        <CustomImage src={app_logo} alt="app_logo" className="w-12 h-12"></CustomImage>
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
    <Container margined={false} paddinged={false} className="relative h-[500px] w-full">
      <Carousel />
      <Container className="absolute w-[80%] top-10 z-1000 border bg-white rounded-xl shadow-sm shadow-[#CDE7C9] px-4 py-2 ">
        <FlexWrapper className="justify-between">
          {/* md doesnt get priority because of samll screen + working fine but not happy*/}
          <CustomImage src={app_logo} alt="app_logo" className="w-10 h-10"></CustomImage>
          <CustomImage src={menuIcon} alt="menu_icon" className="w-6 h-6"></CustomImage>
        </FlexWrapper>
      </Container>
    </Container>
  );
};

const Header = () => {
  const { isPc } = useResponsiveContext();
  // console.log(isMobile, isTablet, isPc);
  return <>{isPc ? <HeaderPc /> : <HeaderMobile />}</>;
};

export default Header;
