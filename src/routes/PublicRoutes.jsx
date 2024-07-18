import React, { useContext, useEffect } from "react";
import PublicLayout from "../layout/PublicLayout";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../components/Auth/Login/LoginPage";
import RegisterPage from "../components/Auth/Register/RegisterPage";
import { AuthContext } from "../contexts/AuthContext";

const PublicRoutes = () => {
  const { token, admin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      if (location.pathname !== "/login" && location.pathname !== "/register") {
        navigate("/login");
      }
    } else {
      if (location.pathname === "/login" || location.pathname === "/register") {
        navigate("/");
      }
    }
  }, [token, navigate, location]);

  return (
    <>
      {!token && (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      )}
      {token && (
        <PublicLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </PublicLayout>
      )}
      {token && admin && (
        <Routes>
          <Route path="/admin" />
        </Routes>
      )}
    </>
  );
};

export default PublicRoutes;
