import React, { useContext } from "react";
import { createContext, useState } from "react";

const uiContext = createContext();

export const UiContextProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(true);
  const [theme, setTheme] = useState("dark");

  return (
    <uiContext.Provider value={{ sideBar, setSideBar, theme, setTheme }}>
      {children}
    </uiContext.Provider>
  );
};

export default uiContext;
