import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(false)
    const [student, setStudent] = useState(true)
    const [teacher, setTeacher] = useState(false)
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        let savedToken = localStorage.getItem('token');
        let savedRole = localStorage.getItem("role");
        if (!savedToken) {
            savedToken = sessionStorage.getItem('token');
            savedRole = sessionStorage.getItem("role");
        }
        if (savedToken) {
            setToken(savedToken);

            if (savedRole === "teacher") {
                setTeacher(true);
                setStudent(false);
                setAdmin(false);
            } else if (savedRole === "admin") {
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
        localStorage.removeItem('role');
        sessionStorage.removeItem('role');
        setToken(null);
    };
    return (
        <AuthContext.Provider value={{
            token, setToken, logoutHandler, 
            student, teacher, admin,
            setStudent, setTeacher, setAdmin,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
