import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TopbarContext from "../contexts/topbar/TopbarContext";

export default function Topbar() {
  const { topbar, toggleTopbar } = useContext(TopbarContext);
  return (
    <aside
      className={`${
        topbar ? "block" : "hidden"
      } absolute w-full bg-[#282828] py-3`}>
      <div className={`w-fit mx-auto flex flex-col gap-2`}>
        <Link
          to="/"
          onClick={toggleTopbar}
          className={`block text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
          Home
        </Link>
        <Link
          to="/blog/add"
          onClick={toggleTopbar}
          className={`block text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
          Add Blog
        </Link>
        <Link
          to="/myblog"
          onClick={toggleTopbar}
          className={`block text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
          MyBlog
        </Link>
        <Link
          to="/login"
          onClick={toggleTopbar}
          className={`hidden text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
          Login/Register
        </Link>
        <Link
          to="/logout"
          onClick={toggleTopbar}
          className={`block text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
          LogOut
        </Link>
      </div>
    </aside>
  );
}
