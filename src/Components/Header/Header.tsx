import React from "react";
import Container from "../../Utils/CommonComponents/Container";
import app_logo from "../../assets/app_logo.png";
import FlexWrapper from "../../Utils/CommonComponents/FlexWrapper";
import data from "../../assets/combined/en/translation.json";
import { Link } from "react-router-dom";
import { getArrayFromObj } from "../../Utils/util";
import CustomButton from "../../Utils/CommonComponents/CustomButton";

const Header = () => {
  const headerData = data.header.menu;
  console.log(headerData);
  return (
    <Container style=" md:block hidden" padding="px-12 py-4 shadow-md">
      <FlexWrapper style="justify-between">
        <img src={app_logo} alt="app_logo" className="w-12 h-12" />
        <FlexWrapper gap="gap-8">
          {headerData.map((menuItem) => (
            <Link to={menuItem.to}>{menuItem.text}</Link>
          ))}
          <CustomButton>{data.header.button.downloadSignUp}</CustomButton>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

export default Header;
