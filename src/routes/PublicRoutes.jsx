import React, { useContext, useEffect } from "react";
import PublicLayout from "../layout/PublicLayout";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import LoginPage from "../components/Auth/Login/LoginPage";
import RegisterPage from "../components/Auth/Register/RegisterPage";
import { AuthContext } from "../contexts/AuthContext";
import AllCourses from "../pages/AllCourses/AllCourses";
import MyCourses from "../pages/MyCourses/MyCourses";
import NotFound from "../components/NotFound/NotFound";
import Assignments from "../pages/Assignments/Assignments";
import Notifications from "../pages/Notifications/Notifications";

const PublicRoutes = () => {
  const { token, admin, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading) {
      if (!token) {
        if (
          location.pathname !== "/login" &&
          location.pathname !== "/register"
        ) {
          navigate("/login");
        }
      } else {
        if (
          location.pathname === "/login" ||
          location.pathname === "/register"
        ) {
          navigate("/");
        }
      }
    }
  }, [token, navigate, location.pathname, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
            <Route path="/courses/register" element={<AllCourses />} />
            <Route path="/courses/:id" element={<MyCourses />} />
            <Route path="/assignments/:id" element={<Assignments />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="*" element={<NotFound />} />
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
