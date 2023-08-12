import React, { useState } from "react";
import "./feedback.css";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import Container from "../CommonComponents/Container";
import { app_logo, left_arrow, person, right_arrow } from "../../assets";
import CustomImage from "../CommonComponents/CustomImage";
import { captionText, listText_2, listText_3 } from "../../Utils/customStyles";

interface Feedback {
  name: string;
  comment: string;
  rating: number;
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
    return (
      <Container>
        <FlexWrapper>
          <img className={"w-6 h-6 cursor-pointer"} src={left_arrow} alt={"left_arrow"} onClick={handlePrevClick} />
          <Container type="card" className="w-[70%] h-[250px] rounded relative" backgroundColor="bg-[#F2FFF6]">
            <CustomImage className={"absolute -top-10  left-1/2 w-20 h-20 rounded-full  z-20"} src={person} alt={"person"} objectFit="contain" />
            <FlexWrapper flexDirection="flex-col">
              <div className={`${listText_3}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt eni Lorem ipsum dolor sit amet, consectetur ad{" "}
              </div>
              <div>Alisa Albert</div>
              <div className={`${captionText}`}>United kingdom</div>
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
      {/* <h2>Client Feedback</h2>
      <div className="feedback-item">
        <div className="feedback-info">
          <h3>{currentFeedback.name}</h3>
          <p>{currentFeedback.comment}</p>
        </div>
        <div className="feedback-rating">
          <p>{currentFeedback.rating}/5</p>
        </div>
      </div>
      <div className="feedback-navigation">
        <button onClick={handlePrevClick}>&lt;</button>
        <button onClick={handleNextClick}>&gt;</button>
      </div>*/}
    </>
  );
};

export default FeedbackComponent;
