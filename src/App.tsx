import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import GetRoutes from "./Utils/GetRoutes/GetRoutes";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="w-full">
      <Header />
      <GetRoutes />
      <Footer />
    </div>
  );
}

export default App;
