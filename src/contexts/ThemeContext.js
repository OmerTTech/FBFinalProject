import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    
    useEffect(() => {
        localStorage.setItem("theme",theme)
        const root = document.documentElement;
        root.style.setProperty('--body-background-color', theme === 'light' ? 'var(--background-color4)' : 'var(--dark-background-color4)');
        root.style.setProperty('--background-color2', theme === 'dark' ? 'var(--dark-background-color2)' : null);
        root.style.setProperty('--background-color1', theme === 'dark' ? 'var(--dark-background-color1)' : null);
        root.style.setProperty('--nav-bg', theme === 'dark' ? 'var(--dark-background-color1)' : null);
        root.style.setProperty('--text-color', theme === 'light' ? '#000' : '#fff');
        root.style.setProperty('--text-color-rev', theme === 'light' ? '#fff' : '#000');
        root.style.setProperty('--icon', theme === 'light' ? '#000249' : 'var(--primary-color)');
        root.style.setProperty('--Border-color2', theme === 'light' ? '#00149796' : 'var(--primary-color)');
        root.style.setProperty('--secondary-color2', theme === 'light' ? '#0b006c' : 'var(--primary-color)');
        root.style.setProperty('--background-color5', theme === 'light' ? '#dadada' : 'var(--dark-background-color1)');
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
