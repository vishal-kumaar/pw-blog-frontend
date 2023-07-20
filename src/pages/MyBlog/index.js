import React, { useContext, useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import getMyBlogs from "../../apis/getMyBlogs";
import { toast } from "react-toastify";
import TokenContext from "../../contexts/token/TokenContext";

export default function MyBlog() {
  const [blogs, setBlogs] = useState([]);
  const { token } = useContext(TokenContext);

  const handleBlogs = async () => {
    const res = await getMyBlogs(token);

    if (res.success) {
      setBlogs(res.blogs);
    } else {
      toast(res.message, {
        position: "top-right",
        theme: "dark",
        type: "error",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    handleBlogs();
  },
  // eslint-disable-next-line
  []);

  return (
    <main
      className={`text-[#B9B9B9] flex flex-wrap gap-x-3 gap-y-6 w-[90%] sm:w-[95%] xl:w-[70rem] mx-auto my-7`}>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} isEdit={true} isDelete={true} />
      ))}
    </main>
  );
}
