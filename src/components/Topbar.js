import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TopbarContext from "../contexts/topbar/TopbarContext";
import TokenContext from "../contexts/token/TokenContext";
import { toast } from "react-toastify";

export default function Topbar() {
  const { topbar, toggleTopbar } = useContext(TopbarContext);
  const { token, removeUserToken } = useContext(TokenContext);

  const logout = () => {
    removeUserToken();
    toast("Logout successfull", {
      position: "top-right",
      type: "success",
      theme: "dark",
      autoClose: 3000,
    });
  };
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
        {token ? (
          <>
            <Link
              to="/myblog"
              onClick={toggleTopbar}
              className={`block text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
              MyBlog
            </Link>
            <button
              onClick={() => {
                logout();
                toggleTopbar();
              }}
              className={`block text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
              LogOut
            </button>
          </>
        ) : (
          <Link
            to="/login"
            onClick={toggleTopbar}
            className={`text-white w-32 text-center py-2.5 rounded-lg text-sm`}>
            Login/Register
          </Link>
        )}
      </div>
    </aside>
  );
}
