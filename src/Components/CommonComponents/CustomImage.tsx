import React from "react";
import { ReactNode } from "react";
interface ImageProps {
  // must mention width and height in style
  style: string;
  src: string;
  alt: string;
  objectFit?: string;
}

const CustomImage: React.FC<ImageProps> = ({ src, alt, objectFit = "object-cover", style = "" }) => {
  return (
    <div className={`${style}`}>
      <img src={src} alt={alt} className={`w-full h-full rounded-lg ${objectFit}`} />
    </div>
  );
};

export default CustomImage;
