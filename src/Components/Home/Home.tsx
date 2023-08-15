import React from "react";
import Container from "../CommonComponents/Container";
import Section from "../CommonComponents/Section";
import data from "../../assets/combined/en/translation.json";
import { home_image1, home_image2, home_image3, home_iphone, sellingAnt, home_sell_field, home_women, footerButtons, mobile2 } from "../../assets";
import { innovationIcon, pageIcon, homeIcon, handIcon } from "../../assets";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import CustomImage from "../CommonComponents/CustomImage";
import CustomButton from "../CommonComponents/CustomButton";
import ZigZag from "../CommonComponents/ZigZag";
import { captionText, customText_0, customText_1, customText_3, customText_4, listText_1, listText_3, pageTitle, sectionTitle } from "../../Utils/customStyles";
import FeedbackComponent from "./Feedback";
import { useResponsiveContext } from "../../Utils/useResponsive/ResponsiveContext";
import Carousel from "./Carousel";

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
    <Container margined={false} backgroundColor="bg-tertiary" className="mt-20">
      <FlexWrapper flexDirection="flex-col">
        <Section title="What The App Offers" description={""} titleStyle={sectionTitle} />
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
      <Container margined={false} paddinged={false} className="pt-0">
        <FlexWrapper className="md:pl-20 md:justify-between justify-center gap-10">
          <FlexWrapper flexDirection="flex-col" justifyContent="" className="pl-4">
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
  const ShadowedImage: React.FC<shadowedImageProps> = ({ src = "", shadowPosition = "-left-2 -top-2" }) => {
    return (
      <>
        <div className="relative">
          <img src={src} alt="Top Half Shadow" className="relative w-full z-20 rounded-md" />
          <div className={`absolute w-3/4 h-3/4 rounded-md bg-[#C3FFC3] ${shadowPosition}`}></div>
        </div>
      </>
    );
  };
  return (
    <Container>
      <FlexWrapper justifyContent="justify-center" className="flex-wrap items-center gap-20">
        <FlexWrapper gap="gap-20">
          <ShadowedImage src={home_women} />
          <ShadowedImage src={home_sell_field} shadowPosition="-left-2 -bottom-2" />
        </FlexWrapper>
        <FlexWrapper flexDirection="flex-col" className="max-w-[350px] items-start">
          <Section title={"Sustainable Farm Solutionfor a Better Tomorrow"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"} />
          {/* change with real data use grid later */}
          <FlexWrapper className="sm:flex-row flex-col sm:gap-4 gap-2">
            <FlexWrapper gap="gap-1">
              <CustomImage className={"w-7 h-7"} src={handIcon} alt={""} />
              <div className={listText_3}> 100% Satisfaction</div>
            </FlexWrapper>
            <FlexWrapper gap="gap-1">
              <CustomImage className={"w-7 h-7"} src={innovationIcon} alt={""} />
              <div className={listText_3}> Innovative Solution</div>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper className="sm:flex-row flex-col sm:gap-12 gap-2">
            <FlexWrapper gap="gap-1">
              <CustomImage className={"w-7 h-7"} src={pageIcon} alt={""} />
              <div className={listText_3}> Microfinance.</div>
            </FlexWrapper>
            <FlexWrapper gap="gap-1">
              <CustomImage className={"w-7 h-7"} src={homeIcon} alt={""} />
              <div className={listText_3}> Precision farming</div>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

// some dummy data format added  to use later- not used yet -still static
interface Feedback {
  name: string;
  comment: string;
}

const feedbackData: Feedback[] = [
  {
    name: "Client A",
    comment: "Excellent service! Highly recommended.",
  },
  {
    name: "Client B",
    comment: "Good experience overall.",
  },
  // Add more feedback items as needed
];

const Feedbacks = () => {
  return (
    <Container margined={false} className="!pt-0">
      <FlexWrapper justifyContent="justify-center" className="items-center">
        <Section
          title="Best Feedback From Happy Clients"
          description="We take pride in providing our customers with the highest quality, sustainable agriculture solutions. "
          titleStyle={sectionTitle}
        />
      </FlexWrapper>
      <FeedbackComponent feedback={feedbackData} />
    </Container>
  );
};

const DownloadSection = () => {
  return (
    <Container margined={false}>
      <FlexWrapper justifyContent="justify-between" className="items-center md:flex-row flex-col-reverse">
        <FlexWrapper flexDirection="flex-col" className=" !items-start ">
          <div className={`${sectionTitle} !pb-0`}>MIMIDZI App</div>
          <div className={`${listText_1} !pt-0`}>Download Now</div>
          <div className={`${captionText} max-w-[250px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
          <FlexWrapper className="gap-4 pt-4">
            {footerButtons.map((value) => (
              <CustomImage src={value} alt="footer btns" className="w-24" />
            ))}
          </FlexWrapper>
        </FlexWrapper>
        <CustomImage className={"pl-0"} src={mobile2} alt={""}></CustomImage>
      </FlexWrapper>
    </Container>
  );
};

const Home = () => {
  const { isPc } = useResponsiveContext();
  return (
    <>
      {!isPc && <Carousel />}
      <OverviewPc />
      <AppOffers />
      <SellingPoints />
      <SustainableSolution />
      <Feedbacks />
      <DownloadSection />
    </>
  );
};

export default Home;
