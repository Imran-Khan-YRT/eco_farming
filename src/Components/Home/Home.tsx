import React from "react";
import Container from "../CommonComponents/Container";
import Section from "../CommonComponents/Section";
import data from "../../assets/combined/en/translation.json";
import { home_image1, home_image2, home_image3, home_iphone, sellingAnt, home_sell_field, home_women, handIcon } from "../../assets";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import CustomImage from "../CommonComponents/CustomImage";
import CustomButton from "../CommonComponents/CustomButton";
import ZigZag from "../CommonComponents/ZigZag";
import { listText_1, listText_3, pageTitle } from "../../Utils/customStyles";
import FeedbackComponent from "./Feedback";
import { useResponsiveContext } from "../../Utils/useResponsive/ResponsiveContext";

const OverViewButtons = () => {
  const overViewData = data.home.overview;
  return (
    <>
      <FlexWrapper flexDirection="flex-col" justifyContent="flex-start" className="grid-cols-2 pt-10" gap="gap-2">
        <FlexWrapper className="mb-2 " justifyContent="flex-start" gap="gap-4">
          <CustomButton>{overViewData.button.ourProducts}</CustomButton>
          <CustomButton backgroundColor="bg-tertiary" textColor="text-black">
            {overViewData.button.learnMore}
          </CustomButton>
        </FlexWrapper>
        <FlexWrapper justifyContent="flex-start" gap="gap-4">
          <CustomButton backgroundColor="bg-tertiary" textColor="text-black">
            <div className="font-bold">456+</div>
            {overViewData.button.projectDone}
          </CustomButton>
          <CustomButton backgroundColor="bg-tertiary" textColor="text-black">
            <h1 className="font-bold">156+</h1>
            {overViewData.button.teamMembers}
          </CustomButton>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};

const AppOffers = () => {
  const appOffersData = data.home.appOffers;
  return (
    <Container margined={false} backgroundColor="bg-tertiary">
      <FlexWrapper flexDirection="flex-col">
        <Section title="What The App Offers" description={""} titleStyle={pageTitle} />
        {appOffersData.map((value) => (
          <ZigZag id={value.id} title={value.title} description={value.description} buttonText={value.buttonText} image={home_iphone} />
        ))}
      </FlexWrapper>
    </Container>
  );
};

const ImageGrid = () => {
  return (
    <div className="grid-cols-1 w-[600px]">
      <CustomImage className="pb-1" src={home_image1} alt="Image 1" />
      <div className="grid grid-cols-2 ">
        <CustomImage className=" pr-1" src={home_image2} alt="Image 2" />
        <CustomImage className="" src={home_image3} alt="Image 3" objectFit="" />
      </div>
    </div>
  );
};

const OverviewPc = () => {
  const overViewData = data.home.overview;
  const { isPc } = useResponsiveContext();
  return (
    <>
      <Container margined={false} paddinged={false}>
        <FlexWrapper className="md:pl-20 md:justify-between justify-center gap-10">
          <FlexWrapper flexDirection="flex-col" justifyContent="md:flex-start">
            <Section title={overViewData.title} description={overViewData.content} className="max-w-[400px]" titleStyle={pageTitle}></Section>
            <OverViewButtons />
          </FlexWrapper>
          {isPc && <ImageGrid />}
        </FlexWrapper>
      </Container>
    </>
  );
};

const SellingPoints = () => {
  const SellingPointsData = data.home.sellingPoints;
  return (
    <Container>
      <FlexWrapper flexDirection="flex-col" justifyContent="justify-center" className="items-center gap-20">
        <CustomButton className="bg-secondary">SEE ALL FEATURES</CustomButton>
        <Section title="Our Unique Selling Points" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "} className="items-center" />
        <FlexWrapper gap="gap-4" className="flex-wrap" justifyContent="justify-center">
          {SellingPointsData.map((value) => (
            <div className={`${value.id === 2 ? "bg-[#F2FFF6]" : "bg-inherit"} border shadow-md rounded-xl p-4 max-w-[300px]`}>
              <CustomImage src={sellingAnt} alt="selling ant" className={"w-8 h-8"} objectFit="cover" />
              <Section title={value.title} description={value.description} />
              <div className={`text-primary ${listText_1}`}>Learn More</div>
            </div>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

const SustainableSolution = () => {
  // separate shadowedImage if further required
  interface shadowedImageProps {
    src: string;
    shadowPosition?: string;
  }
  const ShadowedImage: React.FC<shadowedImageProps> = ({ src = "", shadowPosition = "-left-2.5 -top-2.5" }) => {
    return (
      <>
        <div className="relative">
          <img src={src} alt="Top Half Shadow" />
          <div className={`absolute w-2/3 h-2/3 rounded-xl bg-[#C3FFC3]  -z-20 ${shadowPosition}`}></div>
        </div>
      </>
    );
  };
  return (
    <Container>
      <FlexWrapper justifyContent="justify-center" className="flex-wrap items-center gap-20">
        <FlexWrapper gap="gap-20">
          <ShadowedImage src={home_women} />
          <ShadowedImage src={home_sell_field} shadowPosition="-left-2.5 -bottom-2.5" />
        </FlexWrapper>
        <FlexWrapper flexDirection="flex-col" className="max-w-[350px]">
          <Section title={"Sustainable Farm Solutionfor a Better Tomorrow"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"} />
          <FlexWrapper className="flex-wrap gap-2">
            {Array(4)
              .fill(5)
              .map((_) => (
                <>
                  <CustomImage className={"w-7 h-7"} src={handIcon} alt={""} />
                  <div className={listText_3}> 100% Satisfaction</div>
                </>
              ))}
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

interface Feedback {
  name: string;
  comment: string;
  rating: number;
}

const feedbackData: Feedback[] = [
  {
    name: "Client A",
    comment: "Excellent service! Highly recommended.",
    rating: 5,
  },
  {
    name: "Client B",
    comment: "Good experience overall.",
    rating: 4,
  },
  // Add more feedback items as needed
];

const Feedbacks = () => {
  return (
    <Container>
      <FlexWrapper justifyContent="justify-center" className="items-center">
        <Section title="Best Feedback From Happy Clients" description="We take pride in providing our customers with the highest quality, sustainable agriculture solutions. " titleStyle={pageTitle} />
      </FlexWrapper>
      <FeedbackComponent feedback={feedbackData} />
    </Container>
  );
};

const Home = () => {
  return (
    <>
      <OverviewPc />;
      <AppOffers />
      <SellingPoints />
      <SustainableSolution />
      <Feedbacks />
    </>
  );
};

export default Home;
