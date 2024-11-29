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
import TeacherCourses from "../pages/MyCourses/TeacherCourses";
import { SpinnerInfinity } from "spinners-react";

const PublicRoutes = () => {
  const { accessToken, teacher, admin, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading) {
      if (!accessToken) {
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
  }, [accessToken, navigate, location.pathname, loading]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <SpinnerInfinity
          size={75}
          thickness={64}
          speed={55}
          color="rgba(57, 152, 172, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
          className="mx-2"
        />
        Loading...
      </div>
    );
  }

  return (
    <>
      {!accessToken && (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      )}
      {accessToken && (
        <PublicLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses/register/" element={<AllCourses />} />
            <Route
              path="/courses/"
              element={teacher ? <TeacherCourses /> : <MyCourses />}
            />
            <Route path="/assignments/" element={<Assignments />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PublicLayout>
      )}
      {accessToken && admin && (
        <Routes>
          <Route path="/admin" />
        </Routes>
      )}
    </>
  );
};

export default PublicRoutes;
