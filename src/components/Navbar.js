import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={`bg-[#282828] px-5 py-10`}>
      <div className={`max-w-[70rem] flex items-center mx-auto`}>
        <div
          className={`flex items-center gap-10 justify-self-end w-fit mx-auto`}>
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
            to="/myblog/blogId"
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
        <div
          className={`px-8 py-2.5 text-white bg-[#24C294] rounded-lg text-sm w-fit`}>
          Welcome
        </div>
      </div>
    </nav>
  );
}
