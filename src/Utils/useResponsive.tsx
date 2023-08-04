import { useState, useEffect, useCallback } from "react";

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    // Initial check on component mount
    handleResize();

    // Add event listener to recheck on window resize
    const handleResizeOnResize = () => {
      handleResize();
    };

    window.addEventListener("resize", handleResizeOnResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResizeOnResize);
    };
  }, []);

  return isMobile;
};

export default useResponsive;
