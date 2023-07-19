import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main className={`w-96 mt-10 mx-auto bg-[#393939] px-5 py-8 rounded-xl`}>
      <h1 className="text-white text-center font-bold text-4xl mb-10 mt-4">
        Register
      </h1>
      <form className={`flex flex-col gap-3`}>
        <input
          type="text"
          placeholder="Full Name Eg. Farman Tasleem"
          className={`text-base border-none outline-[#EC4F2F] rounded-xl py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F]`}
        />
        <input
          type="email"
          placeholder="Email"
          className={`text-base border-none outline-[#EC4F2F] rounded-xl py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F]`}
        />
        <input
          type="password"
          placeholder="Password"
          className={`text-base border-none outline-[#EC4F2F] rounded-xl py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F]`}
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
