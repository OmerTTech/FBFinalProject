import React, { createContext, useState } from 'react';

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavContext.Provider value={{ isNavOpen, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };
