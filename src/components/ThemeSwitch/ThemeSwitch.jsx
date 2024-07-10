import React from "react";
import "./ThemeSwitch.css"
const ThemeSwitch = () => {
  return (
    <label className="ui-switch">
      <input type="checkbox" id="ThemeSwitch"/>
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
};

export default ThemeSwitch;
