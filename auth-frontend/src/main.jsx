import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "flowbite"; // <-- Add this line
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Authlayout,
  EmailVerify,
  ForgetPage,
  LoginPage,
  RegisterPage,
  ResetPage,
} from "./pages/auth";
import Layout from "./Layout";
import App from "./App";
import PageNotfound from "./pages/pageNotfound";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
        </Route>
        <Route element={<Authlayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<RegisterPage />} />
          <Route path="forget-password" element={<ForgetPage />} />
          <Route path="reset-password" element={<ResetPage />} />
          <Route path="verifyEmail" element={<EmailVerify />} />
        </Route>
     <Route path="*" element={<PageNotfound />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
