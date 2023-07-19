import React, { useState } from "react";
import TopbarContext from "./TopbarContext";

export default function TopbarProvider({ children }) {
  const [topbar, setTopbar] = useState(false);

  const toggleTopbar = () => {
    if (topbar) {
      setTopbar(false);
    } else {
      setTopbar(true);
    }
  };
  return (
    <TopbarContext.Provider value={{ topbar, toggleTopbar }}>
      {children}
    </TopbarContext.Provider>
  );
}
