import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerUser from "../../apis/registerUser";
import TokenContext from "../../contexts/token/TokenContext";
import { toast } from "react-toastify";

export default function Register() {
  const { setUserToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeUserData = (fieldName, value) => {
    setUserData({
      ...userData,
      [fieldName]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await registerUser(userData);
    if (res.success) {
      setUserToken(res.token);
      toast(res.message, {
        position: "top-right",
        type: "success",
        theme: "dark",
        autoClose: 3000,
      });
      setTimeout(() => {
        navigate("/", { replace: true });
      });
    } else {
      toast(res.message, {
        position: "top-right",
        type: "error",
        theme: "dark",
        autoClose: 3000,
      });
    }

    setUserData({
      name: "",
      password: "",
      email: "",
    });
  };

  return (
    <main
      className={`w-[90%] sm:w-96 mt-10 mx-auto bg-[#393939] px-5 py-8 rounded-xl`}>
      <h1 className="text-white text-center font-bold text-3xl sm:text-4xl mb-10 mt-4">
        Register
      </h1>
      <form className={`flex flex-col gap-3`} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name Eg. Farman Tasleem"
          className={`text-base border-none outline-[#EC4F2F] rounded-xl py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F]`}
          value={userData.name}
          onChange={(event) => changeUserData("name", event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className={`text-base border-none outline-[#EC4F2F] rounded-xl py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F]`}
          value={userData.email}
          onChange={(event) => changeUserData("email", event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={`text-base border-none outline-[#EC4F2F] rounded-xl py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F]`}
          value={userData.password}
          onChange={(event) => changeUserData("password", event.target.value)}
        />
        <button
          type="submit"
          className={`bg-[#EC4F2F] hover:bg-[#F26D49] text-white rounded-xl py-2.5 w-full`}>
          Submit
        </button>
      </form>
      <p className={`text-center text-white text-lg mt-8 mb-3`}>
        Don't have account?{" "}
        <Link to="/login" className={`text-[#BA4A31]`}>
          Login
        </Link>
      </p>
    </main>
  );
}
