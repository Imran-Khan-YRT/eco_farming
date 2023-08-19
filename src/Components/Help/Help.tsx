import React from "react";
import Section from "../CommonComponents/Section";
import data from "../../assets/combined/en/translation.json";
import { getArrayFromObj } from "../../Utils/util";
import { customText_0, customText_1, customText_2, customText_3, mobileViewPadding, sectionTitle } from "../../Utils/customStyles";
import Container from "../CommonComponents/Container";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import CustomImage from "../CommonComponents/CustomImage";
import { mobile2 } from "../../assets";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import ZigZag from "../CommonComponents/ZigZag";
import CustomAccordion from "../Accordion/CustomAccordion";

const HelpList = () => {
  const helpData = getArrayFromObj(data.help.steps);
  return (
    <ol className={`list-decimal ${customText_1}`}>
      {helpData.map((item) => (
        <li key={item.key} className="py-1">
          {item.value}
        </li>
      ))}
    </ol>
  );
};

const Troublesooting = () => {
  const troubleshootingData = data.help.troublesooting.steps;
  return (
    <>
      <div className={`${sectionTitle} text-center md:pb-16 pb-8`}>{data.help.troublesooting.title}</div>
      <FlexWrapper justifyContent="justify-center">
        <div className="grid md:grid-cols-3 grid-cols-1 items-center">
          {troubleshootingData.map((item) => (
            <Container type="card" backgroundColor="bg-tertiary" className="max-w-[20rem] max-h-[250px] overflow-scroll rounded-xl border shadow-md">
              <Section title={item.title} description={item.description} titleStyle={`pb-2`} descriptionStyle={customText_2}></Section>
            </Container>
          ))}
        </div>
      </FlexWrapper>
    </>
  );
};

const PopularQuestion = () => {
  const popularQuestions = getArrayFromObj(data.help.popularQurstions.questions);
  return (
    <Container backgroundColor="bg-tertiary" className="rounded-lg shadow-sm">
      <FlexWrapper flexDirection="flex-col" justifyContent="justify-center">
        <div className={`${sectionTitle} text-center`}>{data.help.popularQurstions.title}</div>
        <FlexWrapper justifyContent="justify-between" className="max-w-full bg-white items-center px-4 rounded-full m-auto text-center" gap="gap-2">
          <div className={`${customText_2} pt-2`}>{data.help.popularQurstions.search}</div>
          <AiOutlineSearch />
        </FlexWrapper>
        <FlexWrapper justifyContent="justify-between" className={`md:w-[80%] m-auto ${customText_3} pt-8`}>
          <FlexWrapper gap="gap-1.5">
            <div>Popular questions </div>
            <BsChevronDown className="pt-1" />
          </FlexWrapper>
          <div className="md:block hidden">
            <FlexWrapper gap="gap-1.5" className="items-center">
              <div>All Answers</div>
              <BsChevronRight className="pt-1" />
            </FlexWrapper>
          </div>
        </FlexWrapper>
        <div className="grid md:grid-cols-2 grid-cols-1 items-start pt-4">
          {popularQuestions.map((item) => (
            <div className="lg:w-[60%] md:w-[70%] w-[85%]   m-auto my-2 bg-tertiary">
              <div className={`bg-white rounded-lg p-2 px-4 shadow-md ${customText_2}`}>{item.value}</div>
            </div>
          ))}
        </div>
        <FlexWrapper gap="gap-1" className="md:hidden block m-auto">
          <div>All Answers</div>
          <BsChevronRight className="pt-1" />
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

const Help = () => {
  return (
    <Container margined={false} className={`${mobileViewPadding}`}>
      <ZigZag title={data.help.title} description={<HelpList />} id={1} image={mobile2} backgroundColor="bg-white" descriptionStyle={"pl-8"}></ZigZag>
      <Troublesooting />
      <CustomAccordion />
      <PopularQuestion />
    </Container>
  );
};

export default Help;
