import React from "react";
import Container from "../CommonComponents/Container";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import CustomImage from "../CommonComponents/CustomImage";
import { feature_iphone13, feature_playIcon } from "../../assets";
import data from "../../assets/combined/en/translation.json";
import CustomButton from "../CommonComponents/CustomButton";
import { pageTitle } from "../../Utils/customStyles";
import Section from "../CommonComponents/Section";
import { image1, image2 } from "../../assets";
import ZigZag from "../CommonComponents/ZigZag";

// const CardContent = () => {
//   return (
//     <FlexWrapper className="justify-between  overflow-hidden">
//       <div className="w-[400px] ">
//         <Section
//           title={"The User Authentication in MIMODZI"}
//           description={
//             "Our User Authentication is a crucial feature that ensures secure access to the app. It allows users to create an account, log in, and manage their personal information securely. By implementing authentication mechanisms such as username/password combinations, biometric authentication, or two-factor authentication, the app ensures that only authorized users can access the app's functionalities"
//           }
//         ></Section>
//         <CustomButton>View User Authentication</CustomButton>
//       </div>
//       <CustomImage src={image1} alt="features_image1" className="w-[350px]" />
//     </FlexWrapper>
//   );
// };

const AppFeatures = () => {
  const featuresData = data.features;
  return (
    <Container>
      <ZigZag id={1} title={featuresData.title} description={""} buttonText={featuresData.button} image={feature_iphone13} backgroundColor="bg-white" />
      {featuresData.content.map((value) => (
        <ZigZag id={value.id} title={value.title} description={value.description} buttonText={value.button} image={image1} backgroundColor="bg-white" />
      ))}
    </Container>
  );
};

export default AppFeatures;
