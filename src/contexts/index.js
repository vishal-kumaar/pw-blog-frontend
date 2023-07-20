import React from "react";
import TopbarProvider from "./topbar/TopbarProvider";
import EditBlogProvider from "./editBlog/EditBlogProvider.js"

export default function Context({ children }) {
  return (
    <TopbarProvider>
      <EditBlogProvider>{children}</EditBlogProvider>
    </TopbarProvider>
  );
}
