import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(false)

    useEffect(() => {
        let savedToken = localStorage.getItem('token');
        if (!savedToken) {
            savedToken = sessionStorage.getItem('token');
        }
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        setToken(null);
      };
    return (
        <AuthContext.Provider value={{ token, setToken, logoutHandler }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
