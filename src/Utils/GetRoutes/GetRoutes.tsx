// Route.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";

// Import your components here (e.g., Home, About, Contact, etc.)
import Home from "../../Components/Home/Home";
import Contact from "../../Components/Contact/Contact";
import AppFeatures from "../../Components/AppFeatures/AppFeatures";
import Terms from "../../Components/Terms/Terms";
import Privacy from "../../Components/Privacy/Privacy";
import Microfinance from "../../Components/Microfinance/Microfinance";
// import AppFeatures from "../components/AppFeatures/AppFeatures";
// import ContactUs from "../components/ContactUs/ContactUs";
// import Microfinance from "../components/Microfinace/Microfinance";

const GetRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Define your routes here */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/features" element={<AppFeatures />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/microfinance" element={<Microfinance />} />
    </Routes>
  );
};

export default GetRoutes;
