import React, { useState } from "react";
import EditBlogContext from "./EditBlogContext";

export default function EditBlogProvider({ children }) {
  const [isEditBlog, setIsEditBlog] = useState(false);
  const [blog, setBlog] = useState({
    title: "",
    desc: "",
    imgUrl: "",
    content: "",
  });

  const edit = (blog) => {
    setBlog(blog);
    setIsEditBlog(true);
  };

  const close = () => {
    setBlog(null);
    setIsEditBlog(false);
  };

  const changeBlogData = (fieldName, value) => {
    setBlog({
      ...blog,
      [fieldName]: value,
    });
  };

  return (
    <EditBlogContext.Provider value={{ isEditBlog, blog, changeBlogData, edit, close }}>
      {children}
    </EditBlogContext.Provider>
  );
}
