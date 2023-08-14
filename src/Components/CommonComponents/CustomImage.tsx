import React from "react";
import { ReactNode } from "react";
interface ImageProps {
  // must mention width and height in style
  className: string;
  src: string;
  alt: string;
  objectFit?: string;
  onLinkClick?: (link: string) => void;
}

const CustomImage: React.FC<ImageProps> = ({ src, alt, objectFit = "object-contain", onLinkClick, className = "" }) => {
  return (
    <div className={`${className}`} onClick={() => onLinkClick}>
      <img src={src} alt={alt} className={`w-full h-full rounded-lg ${objectFit}`} />
    </div>
  );
};

export default CustomImage;
