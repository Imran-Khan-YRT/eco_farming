import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import GetRoutes from "./Utils/GetRoutes/GetRoutes";
import Footer from "./Components/Footer/Footer";

function App() {
  const [activeLink, setActiveLink] = useState<string>("home");
  useEffect(() => {
    const storedActiveLink = window.localStorage.getItem("activeLink");
    if (storedActiveLink !== null) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  return (
    <div className="w-full">
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      <GetRoutes />
      <Footer activeLink={activeLink} setActiveLink={setActiveLink} />
    </div>
  );
}

export default App;
