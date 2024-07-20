import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({})
    const [token, setToken] = useState(false)
    const [student, setStudent] = useState(true)
    const [teacher, setTeacher] = useState(false)
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        let savedToken = localStorage.getItem('token');
        let getUserData = JSON.parse(localStorage.getItem("userData"));
        if (!savedToken) {
            savedToken = sessionStorage.getItem('token');
            getUserData = JSON.parse(sessionStorage.getItem("userData"));
        }
        if (savedToken) {
            setToken(savedToken);
            setUserData(getUserData)

            if (getUserData.role === "teacher") {
                setTeacher(true);
                setStudent(false);
                setAdmin(false);
            } else if (getUserData.role === "admin") {
                setTeacher(true);
                setAdmin(true);
                setStudent(true);
            } else {
                setTeacher(false);
                setAdmin(false);
                setStudent(true);
            }
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        localStorage.removeItem('userData');
        sessionStorage.removeItem('userData');
        setToken(null);
    };
    return (
        <AuthContext.Provider value={{
            token, setToken, logoutHandler, 
            student, teacher, admin,
            setStudent, setTeacher, setAdmin,
            userData, setUserData,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
