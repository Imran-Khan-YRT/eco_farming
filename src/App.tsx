import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import GetRoutes from "./Utils/GetRoutes/GetRoutes";
import Footer from "./Components/Footer/Footer";

function App() {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <div className="w-full">
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      <GetRoutes />
      <Footer activeLink={activeLink} setActiveLink={setActiveLink} />
    </div>
  );
}

export default App;
