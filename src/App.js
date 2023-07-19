import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import EditBlog from "./components/EditBlog";
import Context from "./contexts";

function App() {
  document.body.classList.add("bg-black");
  return (
    <BrowserRouter>
      <Context>
        <Navbar />
        <Topbar />
        <EditBlog />
        <Routes />
      </Context>
    </BrowserRouter>
  );
}

export default App;
