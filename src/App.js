import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import EditBlog from "./components/EditBlog";

function App() {
  document.body.classList.add("bg-black");
  return (
    <BrowserRouter>
      <Navbar />
      <EditBlog />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
