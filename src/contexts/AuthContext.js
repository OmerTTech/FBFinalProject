import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const token = false;
    return (
        <AuthContext.Provider value={{ token, navigator }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
