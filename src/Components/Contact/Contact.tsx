import React from "react";

import Section from "../CommonComponents/Section";
import Container from "../CommonComponents/Container";
import MyForm from "./MyForm";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import CustomImage from "../CommonComponents/CustomImage";
import { contact_logo, contact_call, contact_email, contact_facebook, contact_linkedin, conact_location, contact_twitter } from "../../assets";

const ContactForm = () => {
  return (
    <Container style="md:border rounded-lg md:m-20 m-10">
      <FlexWrapper style=" items-center md:justify-between  md:flex-row flex-col flex-wrap gap-20">
        <div className="p-20">
          <Section title={"Get in Touch "} description={"We are here for you! How can we help ?"}></Section>
          <MyForm />
        </div>
        <FlexWrapper flexDirection="flex-col" style="pr-20 pt-10">
          <CustomImage src={contact_logo} alt="contact_logo" style="w-full h-300" />
          <div>
            <FlexWrapper style="gap-4 py-2">
              <CustomImage src={conact_location} alt="location icon" style="w-7 h-7" />
              6391 Elgin St. Celina,Delaware
            </FlexWrapper>
            <FlexWrapper style="gap-4 py-2">
              <CustomImage src={contact_call} alt="location icon" style="w-7 h-7" />
              (406) 555-0120
            </FlexWrapper>
            <FlexWrapper style="gap-4 py-2">
              <CustomImage src={contact_email} alt="location icon" style="w-7 h-7" />
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
