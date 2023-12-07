import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import PhoneLogin from "components/Login/PhoneLogin.js";
import AdminLayout from "layouts/Admin.js";
import User from "views/User";
import ShowDetails from "views/ShowDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/user/*" element={<User />} />
      <Route path="/Details/*" element={<ShowDetails />} />
      <Route path="/login/*" element={<PhoneLogin />} />
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  </BrowserRouter>
);
