import React from "react";
import ZigZag from "../CommonComponents/ZigZag";
import { mobile1, mobile3 } from "../../assets";
import { footerButtons } from "../../assets";
import Container from "../CommonComponents/Container";
import { sectionTitle } from "../../Utils/customStyles";

const AppOverview = () => {
  return (
    <Container paddinged={false}>
      <ZigZag
        title={"App Overview"}
        description={
          "“MIMODZI” is a user-friendly farming app that provides a range of features to enhance crop management, optimize resource utilization, and combat pests and diseases. It offers real-time weather updates, personalized alerts, and a platform for farmers to connect and share knowledge"
        }
        buttonText="LEARN MORE"
        id={0}
        image={mobile3}
        backgroundColor="bg-white"
      ></ZigZag>
      <ZigZag
        title={"Download Anroide App"}
        description={"To download the “MIMODZI” app in your mobile, Please click on the download button and follow the steps to download app from playstore in your mobile "}
        buttonText="Download Now"
        id={1}
        image={mobile1}
        backgroundColor="bg-white"
        topButtonImage={footerButtons[1]}
      ></ZigZag>
      <ZigZag
        title={"Download IOS app"}
        description={"To download the “MIMODZI” app in your mobile, Please click on the download button and follow the steps to download app from your apple store in your mobile "}
        buttonText="Download Now"
        id={2}
        image={mobile1}
        backgroundColor="bg-white"
        topButtonImage={footerButtons[0]}
      ></ZigZag>
    </Container>
  );
};

export default AppOverview;
