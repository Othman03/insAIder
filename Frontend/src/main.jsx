import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UiContextProvider } from "./context/UiContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UiContextProvider>
      <App />
    </UiContextProvider>
  </StrictMode>
);
