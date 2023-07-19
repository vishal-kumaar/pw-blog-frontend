import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./pages/Login";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return routes;
}
