import { useState, useEffect } from "react";

const useResponsive = () => {
  const [responsiveState, setResponsiveState] = useState({
    isMobile: false,
    isTablet: false,
    isPc: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newIsMobile = screenWidth <= 550;
      const newIsTablet = screenWidth > 550 && screenWidth <= 767;
      const newIsPc = screenWidth > 767;

      if (newIsMobile !== responsiveState.isMobile || newIsTablet !== responsiveState.isTablet || newIsPc !== responsiveState.isPc) {
        setResponsiveState({
          isMobile: newIsMobile,
          isTablet: newIsTablet,
          isPc: newIsPc,
        });
      }
    };

    handleResize(); // Initial check on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [responsiveState]);

  return responsiveState;
};

export default useResponsive;
