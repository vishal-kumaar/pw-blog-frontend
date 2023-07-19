import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import EditBlog from "./components/EditBlog";

function App() {
  document.body.classList.add("bg-black");
  return (
    <BrowserRouter>
      <Navbar />
      <Topbar />
      <EditBlog />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
