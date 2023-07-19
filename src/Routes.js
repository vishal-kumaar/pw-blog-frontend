import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return routes;
}
