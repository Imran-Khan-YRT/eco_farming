import React from "react";

import Section from "../CommonComponents/Section";
import Container from "../CommonComponents/Container";
import MyForm from "./MyForm";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import CustomImage from "../CommonComponents/CustomImage";
import { contact_logo, contact_call, contact_email, contact_facebook, contact_linkedIn, conact_location, contact_twitter, sideContact } from "../../assets";
import { useResponsiveContext } from "../../Utils/useResponsive/ResponsiveContext";
import { customText_1, mobileViewPadding, pageTitle } from "../../Utils/customStyles";
import SkewedBacground from "../CommonComponents/SkewedBackground/SkewedBackground";

const ContactForm = () => {
  const { isPc } = useResponsiveContext();
  return (
    <SkewedBacground>
      <Container className={`md:border rounded-lg relative top-2 ${mobileViewPadding}`}>
        {isPc && (
          <>
            <img src={sideContact} alt="sidebar" className=" w-10 h-32 absolute bottom-2 -right-10 " />
            <img src={contact_linkedIn} alt="linkedIn" className="absolute w-7 h-7 bottom-24 -right-9" />
            <img src={contact_twitter} alt="twitter" className="absolute w-7 h-7  bottom-14 -right-9" />
            <img src={contact_facebook} alt="facebook" className="absolute w-7 h-7 bottom-4 -right-9" />
          </>
        )}

        <FlexWrapper className="lg:justify-between justify-center flex-wrap gap-20 w-full !p-auto">
          <FlexWrapper flexDirection="flex-col" className="!items-start">
            <Section
              title={"Get in Touch "}
              description={"We are here for you! How can we help ?"}
              titleColor="text-secondary"
              className="pb-8"
              titleStyle={pageTitle}
              descriptionStyle={customText_1}
            ></Section>
            <MyForm />
          </FlexWrapper>
          <FlexWrapper flexDirection="flex-col" className="">
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
    </SkewedBacground>
  );
};

const Contact = () => {
  return (
    <>
      <ContactForm />
    </>
  );
};

export default Contact;
