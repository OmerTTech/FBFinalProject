import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({})
    const [token, setToken] = useState(null)
    const [student, setStudent] = useState(true)
    const [teacher, setTeacher] = useState(false)
    const [admin, setAdmin] = useState(false)
    const [loading, setLoading] = useState(true)

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

            if (getUserData.role === "admin") {
                setAdmin(true);
            } else if (getUserData.role === "teacher") {
                setTeacher(true);
            } else {
                setStudent(true);
            }
        }
        setLoading(false)
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
            userData, setUserData, loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
