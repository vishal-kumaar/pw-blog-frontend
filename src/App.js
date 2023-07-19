import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  document.body.classList.add("bg-black");
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
