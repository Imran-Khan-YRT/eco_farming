import React from "react";
import Container from "../CommonComponents/Container";
import Section from "../CommonComponents/Section";
import data from "../../assets/combined/en/translation.json";
import { home_image1, home_image2, home_image3 } from "../../assets";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import CustomImage from "../CommonComponents/CustomImage";
import CustomButton from "../CommonComponents/CustomButton";
import useResponsive from "../../Utils/useResponsive";

const OverViewButtons = () => {
  const overViewData = data.home.overview;
  return (
    <>
      <FlexWrapper flexDirection="flex-col" justifyContent="flex-start" className="grid-cols-2 pt-10" gap="gap-2">
        <FlexWrapper className="mb-2 " justifyContent="flex-start" gap="gap-4">
          <CustomButton>{overViewData.button.ourProducts}</CustomButton>
          <CustomButton backgroundColor="bg-tertiary" textColor="text-black">
            {overViewData.button.learnMore}
          </CustomButton>
        </FlexWrapper>
        <FlexWrapper justifyContent="flex-start" gap="gap-4">
          <CustomButton backgroundColor="bg-tertiary" textColor="text-black">
            <div className="font-bold">456+</div>
            {overViewData.button.projectDone}
          </CustomButton>
          <CustomButton backgroundColor="bg-tertiary" textColor="text-black">
            <h1 className="font-bold">156+</h1>
            {overViewData.button.teamMembers}
          </CustomButton>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};

const AppOffers = () => {
  return <div>test</div>;
};

const ImageGrid = () => {
  return (
    <div className="grid-cols-1 w-[600px]">
      <CustomImage className="pb-1" src={home_image1} alt="Image 1" />
      <div className="grid grid-cols-2 ">
        <CustomImage className=" pr-1" src={home_image2} alt="Image 2" />
        <CustomImage className="" src={home_image3} alt="Image 3" objectFit="" />
      </div>
    </div>
  );
};

const Home = () => {
  const overViewData = data.home.overview;
  const { isPc, isMobile, isTablet } = useResponsive();

  const OverviewPc = () => {
    return (
      <>
        <Container margin="md:mr-0  md:p-0 p-auto md:pl-20 pb-20">
          <FlexWrapper className="md:pl-20 md:justify-between justify-center gap-10">
            <FlexWrapper flexDirection="flex-col" justifyContent="md:flex-start">
              <Section title={overViewData.title} description={overViewData.content} className="max-w-[400px]"></Section>
              <OverViewButtons />
            </FlexWrapper>
            {isPc && <ImageGrid />}
          </FlexWrapper>
        </Container>
      </>
    );
  };

  return <OverviewPc />;
};

export default Home;
