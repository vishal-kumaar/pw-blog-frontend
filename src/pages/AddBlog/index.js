import React, { useContext, useState } from "react";
import TokenContext from "../../contexts/token/TokenContext";
import { useNavigate } from "react-router-dom";
import addBlog from "../../apis/addBlog";
import { toast } from "react-toastify";

export default function AddBlog() {
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState({
    title: "",
    desc: "",
    imgUrl: "",
    content: "",
  });

  const changeBlogData = (fieldName, value) => {
    setBlogData({
      ...blogData,
      [fieldName]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await addBlog(blogData, token);
    if (res.success) {
      toast(res.message, {
        position: "top-right",
        type: "success",
        theme: "dark",
        autoClose: 3000,
      });
      navigate(`/blog/${res.blog._id}`);
    } else {
      toast(res.message, {
        position: "top-right",
        type: "error",
        theme: "dark",
        autoClose: 3000,
      });
    }

    setBlogData({
      title: "",
      desc: "",
      imgUrl: "",
      content: "",
    });
  };

  return (
    <main
      className={`w-[90%] sm:w-[28rem] mt-10 mx-auto bg-[#393939] px-5 pt-8 pb-4 rounded-md`}>
      <h1 className="text-[#F26D48] text-center font-bold text-3xl sm:text-4xl mb-10 mt-4">
        Write Your Blog
      </h1>
      <form className={`flex flex-col gap-3`} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title of Your Story"
          className={`text-base border-none outline-[#EC4F2F] py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F]`}
          value={blogData.title}
          onChange={(event) => changeBlogData("title", event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Url of Blog Image"
          className={`text-base border-none outline-[#EC4F2F] py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F]`}
          value={blogData.imgUrl}
          onChange={(event) => changeBlogData("imgUrl", event.target.value)}
        />
        <input
          type="text"
          placeholder="Type Short Description For Your Blog"
          className={`text-base border-none outline-[#EC4F2F] py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F]`}
          value={blogData.desc}
          onChange={(event) => changeBlogData("desc", event.target.value)}
        />
        <textarea
          placeholder="Type Your Blog"
          className={`text-base border-none outline-[#EC4F2F] py-2.5 px-3 w-full text-[#AA8F7F] placeholder:text-[#AA8F7F] h-32`}
          value={blogData.content}
          onChange={(event) =>
            changeBlogData("content", event.target.value)
          }></textarea>
        <button
          type="submit"
          className={`bg-[#EC4F2F] hover:bg-[#F26D49] text-white rounded-xl py-1.5 w-full`}>
          Publish Your Blog
        </button>
      </form>
    </main>
  );
}
