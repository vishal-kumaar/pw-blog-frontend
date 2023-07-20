import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from "./contexts";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import EditBlog from "./components/EditBlog";
import Routes from "./Routes";

function App() {
  document.body.classList.add("bg-black");
  return (
    <BrowserRouter>
      <Context>
        <ToastContainer />
        <Navbar />
        <Topbar />
        <EditBlog />
        <Routes />
      </Context>
    </BrowserRouter>
  );
}

export default App;
