import React from "react";
import Container from "../CommonComponents/Container";
import { feature_iphone13 } from "../../assets";
import data from "../../assets/combined/en/translation.json";
import { mobileViewPadding } from "../../Utils/customStyles";
import { image1 } from "../../assets";
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
