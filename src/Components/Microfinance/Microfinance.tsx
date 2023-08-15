import React from "react";
import Container from "../CommonComponents/Container";
import Section from "../CommonComponents/Section";
import data from "../../assets/combined/en/translation.json";
import { getArrayFromObj } from "../../Utils/util";
import "./microfinance.css";
import CustomizedSteppers from "./Stepper";
import { customText_0, customText_1, pageTitle, sectionDescription, sectionTitle } from "../../Utils/customStyles";
import { customText_2 } from "../../Utils/customStyles";

const MicrofinanceWorkList = () => {
  const microData = getArrayFromObj(data.microfinance.process_to_microfinance);
  return (
    <ol className={`list-decimal ${customText_1}`}>
      {microData.map((item) => (
        <li key={item.key} className="py-1">
          {item.value}
        </li>
      ))}
    </ol>
  );
};

const Microfinance = () => {
  return (
    <>
      <Container margined={false} className=" w-full lg:mx-20 md:mx-16 sm:mx-8">
        <Section title={data.microfinance.title} description={<MicrofinanceWorkList />} titleStyle={`${customText_0} mb-4`} descriptionStyle="pl-4"></Section>
      </Container>
      <Section title={data.microfinance.apply_for_loan.title} description={""} titleStyle={`${customText_0} md:mx-28 mx-10 `}></Section>
      <Container margined={true} paddinged={true} backgroundColor="bg-tertiary" className="w-[90%] !mt-4 !pt-16 rounded-lg shadow-md">
        <CustomizedSteppers />
      </Container>
    </>
  );
};

export default Microfinance;
