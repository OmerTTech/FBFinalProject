import React, { useContext } from "react";
import "./ThemeSwitch.css";
import { ThemeContext } from "../../contexts/ThemeContext";
const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleChange = (event) => {
    toggleTheme();
  };
  
  return (
    <label className="ui-switch">
      <input
        type="checkbox"
        id="ThemeSwitch"
        onChange={handleChange}
        checked={theme === "dark"}
      />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
};

export default ThemeSwitch;
