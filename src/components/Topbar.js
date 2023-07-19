import React from "react";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <aside className={`hidden absolute w-full bg-[#282828] py-3`}>
      <div className={`w-fit mx-auto flex flex-col gap-2`}>
        <Link
          to="/"
          className={`block text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
          Home
        </Link>
        <Link
          to="/blog/add"
          className={`block text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
          Add Blog
        </Link>
        <Link
          to="/myblog"
          className={`block text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
          MyBlog
        </Link>
        <Link
          to="/login"
          className={`hidden text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
          Login/Register
        </Link>
        <Link
          to="/logout"
          className={`block text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
          LogOut
        </Link>
      </div>
    </aside>
  );
}
