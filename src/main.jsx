import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AdminContextProvider from "./utils/AdminContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminContextProvider>
      <App />
    </AdminContextProvider>
  </StrictMode>
);
