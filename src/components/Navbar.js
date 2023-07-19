import React, { useContext } from "react";
import { Link } from "react-router-dom";
import hamburger from "../assets/icons/hamburger.svg";
import TopbarContext from "../contexts/topbar/TopbarContext";

export default function Navbar() {
  const { toggleTopbar } = useContext(TopbarContext);
  return (
    <nav className={`bg-[#282828] px-5 py-10`}>
      <div
        className={`max-w-[80rem] flex items-center justify-between mx-auto`}>
        <div
          className={`hidden md:flex items-center gap-5 xl:gap-10 justify-self-end w-fit mx-auto`}>
          <Link
            to="/"
            className={`block bg-black hover:bg-black/50 text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
            Home
          </Link>
          <Link
            to="/blog/add"
            className={`block bg-black hover:bg-black/50 text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
            Add Blog
          </Link>
          <Link
            to="/myblog"
            className={`block bg-black hover:bg-black/50 text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
            MyBlog
          </Link>
          <Link
            to="/login"
            className={`hidden bg-black text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
            Login/Register
          </Link>
          <Link
            to="/logout"
            className={`block bg-black hover:bg-black/50 text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
            LogOut
          </Link>
        </div>
        <img
          src={hamburger}
          alt="menu"
          className="invert cursor-pointer w-6 block md:hidden"
          onClick={toggleTopbar}
        />
        <div
          className={`py-1.5 px-4 md:px-8 md:py-2.5 text-white bg-[#24C294] rounded-lg text-sm w-fit`}>
          Welcome
        </div>
      </div>
    </nav>
  );
}
