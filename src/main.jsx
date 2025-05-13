import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AdminContextProvider from "./utils/AdminContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminContextProvider>
      <ToastContainer position="top-center" />
      <App />
    </AdminContextProvider>
  </StrictMode>
);
