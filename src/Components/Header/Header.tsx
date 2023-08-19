import React, { useEffect, useRef, useState } from "react";
import Container from "../CommonComponents/Container";
import app_logo from "../../assets/app_logo.png";
import { menuIcon } from "../../assets";
import FlexWrapper from "../CommonComponents/FlexWrapper";
import data from "../../assets/combined/en/translation.json";
import { Link } from "react-router-dom";
import CustomButton from "../CommonComponents/CustomButton";
import CustomImage from "../CommonComponents/CustomImage";
import Carousel from "../Home/Carousel";
import { useResponsiveContext } from "../../Utils/useResponsive/ResponsiveContext";
import { scrollToTop } from "../../Utils/util";

interface HeaderProps {
  activeLink: string | null;
  setActiveLink: (link: string) => void;
}

const HeaderPc: React.FC<HeaderProps> = ({ activeLink, setActiveLink }) => {
  const headerData = data.header.menu;
  return (
    <Container margined={false} type="card" className="md:py-4 mb-0 shadow-md sticky top-0 z-50">
      {/*less y-padding margin bottom 0 for  sticky header */}
      <FlexWrapper className="justify-between">
        <CustomImage src={app_logo} alt="app_logo" className="w-12 h-12"></CustomImage>
        <FlexWrapper gap="gap-8">
          {headerData.map((menuItem) => (
            <Link
              to={menuItem.to}
              key={menuItem.to}
              onClick={() => {
                setActiveLink(menuItem.to);
                scrollToTop();
              }}
              className={`hover:text-secondary hover:font-bold ${activeLink === menuItem.to ? "border rounded-lg p-2 shadow-inner text-secondary font-bold" : ""}`}
            >
              {menuItem.text}
            </Link>
          ))}
          <CustomButton>{data.header.button.downloadSignUp}</CustomButton>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

const HeaderMobile: React.FC<HeaderProps> = ({ activeLink, setActiveLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerData = data.header.menu;
  const innerButtonRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    // console.log(isMenuOpen);
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    closeMenu();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (innerButtonRef.current && !innerButtonRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <Container margined={false} paddinged={false} className={`relative w-full !pt-0`}>
      <div ref={innerButtonRef}>
        <Container className="fixed top-8 w-[80%]  z-50 border  rounded-xl shadow-sm shadow-[#CDE7C9] px-4 py-1">
          <FlexWrapper className="justify-between">
            {/* md doesnt get priority because of samll screen + working fine but room for improvement */}
            <CustomImage src={app_logo} alt="app_logo" className="w-10 h-10"></CustomImage>
            <div onClick={toggleMenu}>
              <CustomImage src={menuIcon} alt="menu_icon" className="w-6 h-6"></CustomImage>
            </div>
          </FlexWrapper>
        </Container>
      </div>
      {isMenuOpen && (
        <Container className="w-[80%] fixed  top-24 z-50 border  rounded-xl shadow-sm shadow-[#CDE7C9] px-4 py-2" backgroundColor=" bg-tertiary">
          <FlexWrapper flexDirection="flex-col" gap="gap-4" className="py-4">
            {headerData.map((menuItem) => (
              <Link
                to={menuItem.to}
                key={menuItem.to}
                onClick={() => {
                  handleLinkClick(menuItem.to);
                  scrollToTop();
                }}
                className={`hover:text-secondary hover:font-bold ${activeLink === menuItem.to ? " bg-white  border-[1px]  rounded-lg p-2 shadow-inner text-secondary " : ""}`}
              >
                {menuItem.text}
              </Link>
            ))}
            <CustomButton>{data.header.button.downloadSignUp}</CustomButton>
            {/* <div ref={innerButtonRef}></div> */}
          </FlexWrapper>
        </Container>
      )}
    </Container>
  );
};

const Header: React.FC<HeaderProps> = ({ activeLink, setActiveLink }) => {
  const { isPc } = useResponsiveContext();
  // console.log(isMobile, isTablet, isPc);
  return <>{isPc ? <HeaderPc activeLink={activeLink} setActiveLink={setActiveLink} /> : <HeaderMobile activeLink={activeLink} setActiveLink={setActiveLink} />}</>;
};

export default Header;
