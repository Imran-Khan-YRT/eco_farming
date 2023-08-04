import React from "react";
import { ReactNode } from "react";
interface ImageProps {
  // must mention width and height in style
  style: string;
  src: string;
  alt: string;
}

const CustomImage: React.FC<ImageProps> = ({ src, alt, style }) => {
  return (
    <div className={`${style}`}>
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
};

export default CustomImage;
