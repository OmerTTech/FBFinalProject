import { jwtDecode } from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [accessToken, setAccessToken] = useState(null);
  const [teacher, setTeacher] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let savedToken = localStorage.getItem("accessToken");
    let getUserData = savedToken && jwtDecode(savedToken);
    if (!savedToken) {
      savedToken = sessionStorage.getItem("accessToken");
      getUserData = savedToken && jwtDecode(savedToken);
    }
    if (savedToken) {
      setAccessToken(savedToken);
      setUserData(getUserData);
      if (getUserData.role === "admin") {
        setAdmin(true);
      } else if (getUserData.role === "teacher") {
        setTeacher(true);
      }
    } else {
      setAdmin(false);
      setTeacher(false);
    }
    setLoading(false);
  }, [accessToken]);

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    sessionStorage.removeItem("userData");
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        logoutHandler,
        teacher,
        admin,
        setTeacher,
        setAdmin,
        userData,
        setUserData,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
