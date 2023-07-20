import React, { useEffect, useState } from "react";
import getBlogById from "../../apis/getBlogById";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import imagePlaceholder from "../../assets/icons/image_placeholder.svg";

export default function Blog() {
  const [blog, setBlog] = useState(null);
  const { blogId } = useParams();

  const getNormalDate = (mongoDate) => {
    const date = new Date(mongoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const normalDate = date.toLocaleDateString(undefined, options);

    return normalDate;
  };

  const handleBlog = async () => {
    const res = await getBlogById(blogId);

    if (res.success) {
      setBlog(res.blog);
    } else {
      toast(res.message, {
        position: "top-right",
        theme: "dark",
        type: "error",
        autoClose: 3000,
      });
    }
  };

  useEffect(
    () => {
      handleBlog();
      const content = document.getElementById("content");
      if (content) {
        content.style.height = `${content.scrollHeight}px`;
      }
    },
    // eslint-disable-next-line
    []
  );

  if (!blog) {
    return null;
  }

  return (
    <div className="text-white w-[90%] xl:w-[70rem] mx-auto my-10">
      <main className={`flex flex-col items-center text-center`}>
        <img
          src={blog.imgUrl}
          onError={(event) => {
            event.target.src = imagePlaceholder;
          }}
          alt="cover"
          className="w-[70%] block"
        />
        <h1 className="font-bold text-4xl mt-10">{blog.title}</h1>
        <p className="font-normal text-2xl mt-5">{blog.desc}</p>
        <p className="font-normal text-lg mt-5">
          Published Date: {getNormalDate(blog.createdAt)}
        </p>
      </main>
      <hr className="my-6" />
      <textarea
        readOnly={true}
        id="content"
        className="font-normal text-lg bg-transparent overflow-hidden flex w-full outline-none"
        value={blog.content}></textarea>
    </div>
  );
}
