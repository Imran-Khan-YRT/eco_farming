import React from "react";
import Container from "../CommonComponents/Container";
import Section from "../CommonComponents/Section";
import data from "../../assets/combined/en/translation.json";
import { home_image1, home_image2, home_image3 } from "../../assets";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import CustomImage from "../CommonComponents/CustomImage";
import CustomButton from "../CommonComponents/CustomButton";

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-1">
      <CustomImage style="max-h-[300px] " src={home_image1} alt="Image 1" />
      <div className="grid grid-cols-2 gap-1">
        <CustomImage style="max-h-[200px]" src={home_image2} alt="Image 2" />
        <CustomImage style="max-h-[200px]" src={home_image3} alt="Image 3" />
      </div>
    </div>
  );
};

const OverViewButtons = () => {
  const overViewData = data.home.overview;
  return (
    <>
      <FlexWrapper style="mt-10 gap-5">
        <CustomButton>{overViewData.button.ourProducts}</CustomButton>
        <CustomButton style="bg-tertiary text-black">{overViewData.button.learnMore}</CustomButton>
      </FlexWrapper>
      <FlexWrapper style="mt-10 gap-5">
        <CustomButton style="bg-tertiary text-black">
          <h1>456+</h1>
          {overViewData.button.projectDone}
        </CustomButton>
        <CustomButton style="bg-tertiary text-black">
          <h1>156+</h1>
          {overViewData.button.teamMembers}
        </CustomButton>
      </FlexWrapper>
    </>
  );
};

const AppOffers = () => {
  return <div>test</div>;
};

const Home = () => {
  const overViewData = data.home.overview;
  return (
    <>
      <Container style="grid grid-cols-2">
        <div className="justify-self-end px-40 pt-12 max-w-[650px]">
          <Section title={overViewData.title} description={overViewData.content}></Section>
          <OverViewButtons />
        </div>
        <div className="justify-self-end">
          <ImageGrid />
        </div>
      </Container>

      <AppOffers />
    </>
  );
};

export default Home;
