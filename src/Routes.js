import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddBlog from "./pages/AddBlog";
import MyBlog from "./pages/MyBlog";
import Blog from "./pages/Blog";
import Custom404 from "./pages/Custom404";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/blog/:id",
      element: <Blog />,
    },
    {
      path: "/blog/add",
      element: <AddBlog />,
    },
    {
      path: "/myblog",
      element: <MyBlog />,
    },
    {
      path: "*",
      element: <Custom404 />,
    },
  ]);

  return routes;
}
