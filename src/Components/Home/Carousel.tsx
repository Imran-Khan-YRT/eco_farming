import React, { useState } from "react";
import { home_image1, home_image2, home_image3 } from "../../assets";
import CustomImage from "../CommonComponents/CustomImage";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import Container from "../CommonComponents/Container";

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const images = [home_image1, home_image2, home_image3];

  const handleClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <Container margined={false} paddinged={false} className="top-0 w-full !pt-0">
      <CustomImage className="w-full h-[350px]" src={images[currentImage]} alt={`Image ${currentImage + 1}`} objectFit="cover" />

      <FlexWrapper justifyContent="justify-center" className="mt-6 gap-1">
        {images.map((_, index) => (
          <button key={index} onClick={() => handleClick(index)} className={` h-0.5 mx-1 ${currentImage === index ? "w-6 bg-black" : "w-4 bg-gray-300"}`}></button>
        ))}
      </FlexWrapper>
    </Container>
  );
};

export default Carousel;
