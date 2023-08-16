import React from "react";
import Container from "../CommonComponents/Container";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import CustomImage from "../CommonComponents/CustomImage";
import { feature_iphone13, feature_playIcon } from "../../assets";
import data from "../../assets/combined/en/translation.json";
import CustomButton from "../CommonComponents/CustomButton";
import { mobileViewPadding, pageTitle } from "../../Utils/customStyles";
import Section from "../CommonComponents/Section";
import { image1, image2 } from "../../assets";
import ZigZag from "../CommonComponents/ZigZag";

const AppFeatures = () => {
  const featuresData = data.features;
  return (
    <Container paddinged={false} margined={false} className={`${mobileViewPadding}`}>
      <div className="w-full">
        <ZigZag id={0} title={featuresData.title} description={""} buttonText={featuresData.button} image={feature_iphone13} backgroundColor="bg-white" />
      </div>
      {featuresData.content.map((value) => (
        <ZigZag id={value.id} title={value.title} description={value.description} buttonText={value.button} image={image1} backgroundColor="bg-white" />
      ))}
    </Container>
  );
};

export default AppFeatures;
