import React from "react";

import Section from "../CommonComponents/Section";
import Container from "../CommonComponents/Container";
import MyForm from "./MyForm";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import CustomImage from "../CommonComponents/CustomImage";
import { contact_logo, contact_call, contact_email, contact_facebook, contact_linkedIn, conact_location, contact_twitter, sideContact } from "../../assets";
import { useResponsiveContext } from "../../Utils/useResponsive/ResponsiveContext";

const ContactForm = () => {
  const { isPc } = useResponsiveContext();
  return (
    <Container className="md:border rounded-lg relative">
      <div>
        <img src={sideContact} alt="sidebar" className=" w-10 h-32 absolute bottom-2 -right-10 " />
        <img src={contact_linkedIn} className="absolute w-7 h-7 bottom-24 -right-9" />
        <img src={contact_twitter} className="absolute w-7 h-7  bottom-14 -right-9" />
        <img src={contact_facebook} className="absolute w-7 h-7 bottom-4 -right-9" />
      </div>

      <FlexWrapper className=" items-center md:justify-between  md:flex-row flex-col flex-wrap gap-20 m-auto">
        <FlexWrapper flexDirection="flex-col" className="m-auto">
          <Section title={"Get in Touch "} description={"We are here for you! How can we help ?"} titleColor="text-secondary" className="pb-8"></Section>
          <MyForm />
        </FlexWrapper>
        <FlexWrapper flexDirection="flex-col" className="m-auto">
          <CustomImage src={contact_logo} alt="contact_logo" className="w-full h-300" />
          <div>
            <FlexWrapper className="gap-4 py-2">
              <CustomImage src={conact_location} alt="location icon" className="w-7 h-7" />
              6391 Elgin St. Celina,Delaware
            </FlexWrapper>
            <FlexWrapper className="gap-4 py-2">
              <CustomImage src={contact_call} alt="location icon" className="w-7 h-7" />
              (406) 555-0120
            </FlexWrapper>
            <FlexWrapper className="gap-4 py-2">
              <CustomImage src={contact_email} alt="location icon" className="w-7 h-7" />
              contact@gmail.com
            </FlexWrapper>
          </div>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

const Location = () => {};

const Contact = () => {
  return (
    <>
      <ContactForm />
    </>
  );
};

export default Contact;
