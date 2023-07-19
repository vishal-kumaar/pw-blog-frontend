import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./components/Navbar";

function App() {
  document.body.classList.add("bg-black");
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
