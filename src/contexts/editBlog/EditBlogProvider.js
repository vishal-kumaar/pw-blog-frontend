import React, { useState } from "react";
import EditBlogContext from "./EditBlogContext";

export default function EditBlogProvider({ children }) {
  const [isEditBlog, setIsEditBlog] = useState(false);
  const [blogId, setBlogId] = useState("");

  const edit = (blogId) => {
    setBlogId(blogId);
    setIsEditBlog(true);
  };

  const close = () => {
    setBlogId("");
    setIsEditBlog(false);
  };

  return (
    <EditBlogContext.Provider value={{ isEditBlog, blogId, edit, close }}>
      {children}
    </EditBlogContext.Provider>
  );
}
