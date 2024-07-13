import React, { createContext, useEffect, useState } from 'react';

const NavContext = createContext();

const NavProvider = ({ children }) => {
  // Nav - Sidebar minimize and maximize button.
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);
  const [theme, setTheme] = useState('light');

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // if Screen is smaller 500px to get true else false.
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--body-background-color', theme === 'light' ? 'var(--background-color4)' : 'var(--dark-background-color4)');
    root.style.setProperty('--background-color2', theme === 'dark' ? 'var(--dark-background-color2)' : null);
    root.style.setProperty('--background-color1', theme === 'dark' ? 'var(--dark-background-color1)' : null);
    root.style.setProperty('--nav-bg', theme === 'dark' ? 'var(--dark-background-color1)' : null);
    root.style.setProperty('--text-color', theme === 'light' ? '#000000' : '#ffffff');
    root.style.setProperty('--icon', theme === 'light' ? '#000249' : 'var(--primary-color)');
    root.style.setProperty('--background-color5', theme === 'light' ? '#dadada' : 'var(--dark-background-color1)');
  }, [theme]);

  return (
    <NavContext.Provider value={{ isNavOpen, toggleNav, isSmallScreen, theme, toggleTheme }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };
