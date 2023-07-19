import React from "react";

export default function AddBlog() {
  return (
    <main
      className={`max-w-[28rem] mt-10 mx-auto bg-[#393939] px-5 pt-8 pb-4 rounded-md`}>
      <h1 className="text-[#F26D48] text-center font-bold text-4xl mb-10 mt-4">
        Write Your Blog
      </h1>
      <form className={`flex flex-col gap-3`}>
        <input
          type="text"
          placeholder="Enter Title of Your Story"
          className={`text-base border-none outline-[#EC4F2F] py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F]`}
        />
        <input
          type="text"
          placeholder="Enter Url of Blog Image"
          className={`text-base border-none outline-[#EC4F2F] py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F]`}
        />
        <input
          type="text"
          placeholder="Type Short Description For Your Blog"
          className={`text-base border-none outline-[#EC4F2F] py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F]`}
        />
        <textarea
          placeholder="Type Your Blog"
          className={`text-base border-none outline-[#EC4F2F] py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F] h-32`}></textarea>
        <button
          type="submit"
          className={`bg-[#EC4F2F] hover:bg-[#F26D49] text-white rounded-xl py-1.5 w-full`}>
          Publish Your Blog
        </button>
      </form>
    </main>
  );
}
