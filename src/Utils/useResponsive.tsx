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
      const isMobile = screenWidth <= 550; // Adjust the breakpoint as needed for mobile devices
      const isTablet = screenWidth > 550 && screenWidth <= 1000; // Adjust the breakpoint as needed for tablet devices
      const isPc = screenWidth > 1000; // Adjust the breakpoint as needed for PC devices

      setResponsiveState({ isMobile, isTablet, isPc });
    };

    handleResize(); // Initial check on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return responsiveState;
};

export default useResponsive;
