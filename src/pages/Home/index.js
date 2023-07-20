import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import getAllBlogs from "../../apis/getAllBlogs";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  const handleBlog = async () => {
    const res = await getAllBlogs();

    if (res.success) {
      setBlogs(res.blogs);
    }
  };

  useEffect(() => {
    handleBlog();
  }, []);

  return (
    <main
      className={`text-[#B9B9B9] flex flex-wrap gap-x-3 gap-y-6 w-[90%] sm:w-[95%] xl:w-[70rem] mx-auto my-7`}>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} isEdit={false} isDelete={false} />
      ))}
    </main>
  );
}
