import React from "react";
import TopbarProvider from "./topbar/TopbarProvider";
import EditBlogProvider from "./editBlog/EditBlogProvider.js";
import TokenProvider from "./token/TokenProvider";

export default function Context({ children }) {
  return (
    <TokenProvider>
      <TopbarProvider>
        <EditBlogProvider>{children}</EditBlogProvider>
      </TopbarProvider>
    </TokenProvider>
  );
}
