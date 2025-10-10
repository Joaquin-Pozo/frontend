import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProviderWithToggle } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderWithToggle>
      <App />
    </ThemeProviderWithToggle>
  </StrictMode>
);