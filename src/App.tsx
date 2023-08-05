import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import GetRoutes from "./Utils/GetRoutes/GetRoutes";

function App() {
  return (
    <>
      <Header />
      <GetRoutes />
    </>
  );
}

export default App;
