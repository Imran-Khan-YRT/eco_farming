import React from "react";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import Container from "../CommonComponents/Container";
import { listText_2, listText_3 } from "../../Utils/customStyles";
import data from "../../assets/combined/en/translation.json";
import { getArrayFromObj } from "../../Utils/util";
import useResponsive from "../../Utils/useResponsive";
interface ContentProps {
  data?: string;
  index?: number;
}

const StepperPC: React.FC<ContentProps> = () => {
  const microdataFirstRow = getArrayFromObj(data.microfinance.apply_for_loan.step).slice(0, 3);
  const microdataSecondRow = getArrayFromObj(data.microfinance.apply_for_loan.step).slice(3);
  console.log(microdataFirstRow);
  return (
    // Lots of calculation - very poor code
    <div className=" w-[57rem] relative m-auto">
      {/* first line H */}
      <div className="absolute w-full h-[3px] top-[1rem] bg-primary m-auto"></div>
      <FlexWrapper justifyContent="justify-around">
        {microdataFirstRow.map((item, index) => (
          <FlexWrapper flexDirection="flex-col">
            <FlexWrapper className="relative">
              <div className="w-8 h-8 flex justify-center items-center rounded-full bg-primary text-white p-auto z-10">{index + 1}</div>
            </FlexWrapper>
            <div className={`${listText_2}`}>{item.value.title}</div>
            <Container type="card" className={`w-[13rem] rounded-md shadow-sm border ${listText_3}`}>
              {item.value.description}
            </Container>
          </FlexWrapper>
        ))}
      </FlexWrapper>
      {/* first Line V */}
      <div className={`absolute w-[3px] h-[23rem] top-[1rem] right-0 whitespace bg-primary`}></div>
      {/* second line H */}
      <div className="absolute w-full h-[3px]  top-[24rem] bg-primary m-auto"></div>
      {/* second Line V */}
      <div className={`absolute w-[3px] h-[3rem] top-[24rem] left-0 whitespace bg-primary`}></div>
      {/* third Line H */}
      <div className="absolute w-full h-[3px]  top-[27rem] bg-primary m-auto"></div>
      <FlexWrapper justifyContent="justify-center mt-[5rem]">
        {microdataSecondRow.map((item, index) => (
          <FlexWrapper flexDirection="flex-col">
            <FlexWrapper className="relative">
              <div className="w-8 h-8 flex justify-center items-center rounded-full bg-primary text-white p-auto z-10">{index + 4}</div>
            </FlexWrapper>
            <div className={`${listText_2}`}>{item.value.title}</div>
            <Container type="card" className={`w-[13rem] rounded-md shadow-sm border ${listText_3}`}>
              {item.value.description}
            </Container>
          </FlexWrapper>
        ))}
      </FlexWrapper>
    </div>
  );
};

const StepperMobile = () => {
  return <></>;
};

const CustomizedSteppers = () => {
  const { isPc, isMobile, isTablet } = useResponsive();
  return <>{isPc ? <StepperPC /> : <StepperMobile />}</>;
};

export default CustomizedSteppers;