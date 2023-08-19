import React, { useState } from "react";
import "./feedback.css";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import Container from "../CommonComponents/Container";
import { left_arrow, person, right_arrow } from "../../assets";
import { captionText, listText_3 } from "../../Utils/customStyles";

interface Feedback {
  name: string;
  comment: string;
  image: string;
  country: string;
}

interface FeedbackProps {
  feedback: Feedback[];
}

const FeedbackComponent: React.FC<FeedbackProps> = ({ feedback }) => {
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentFeedbackIndex((prevIndex) => (prevIndex === 0 ? feedback.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentFeedbackIndex((prevIndex) => (prevIndex === feedback.length - 1 ? 0 : prevIndex + 1));
  };

  const currentFeedback = feedback[currentFeedbackIndex];

  const FeedbackCard = () => {
    // some animation in future
    return (
      <Container margined={false} paddinged={false}>
        <FlexWrapper className="pt-10 justify-center text-center">
          <img className={"w-6 h-6 cursor-pointer"} src={left_arrow} alt={"left_arrow"} onClick={handlePrevClick} />
          <Container type="card" className="lg:w-[32%] md:w-[45%] sm:w-[55%] w-[70%] min-w-[250px] rounded relative" backgroundColor="bg-[#F2FFF6]">
            <img className={"absolute sm:-top-12  -top-5 left-[40%] md:w-20 sm:w-16 w-12  md:h-20 sm:h-16 h-12 rounded-full  z-20"} src={person} alt={"person"} />
            <FlexWrapper flexDirection="flex-col pt-4">
              <div className={`${listText_3} h-[170px] overflow-scroll`}>{currentFeedback.comment}</div>
              <div>{currentFeedback.name}</div>
              <div className={`${captionText}`}>{currentFeedback.country}</div>
            </FlexWrapper>
          </Container>
          <img className={"w-6 h-6 cursor-pointer"} src={right_arrow} alt={"right_arrow"} onClick={handleNextClick} />
        </FlexWrapper>
      </Container>
    );
  };

  return (
    <>
      <FeedbackCard />
    </>
  );
};

export default FeedbackComponent;
