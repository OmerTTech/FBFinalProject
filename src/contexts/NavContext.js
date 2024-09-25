import React, { createContext, useEffect, useState } from 'react';

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);
  const [isMobile, setMobile] = useState(window.innerWidth < 600);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
      setMobile(window.innerWidth < 600);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <NavContext.Provider value={{ isNavOpen, toggleNav, isSmallScreen, isMobile }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };
