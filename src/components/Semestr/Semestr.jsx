import React from "react";
import "./Semestr.css";
import { NavLink } from "react-router-dom";

const Semestr = ({ page }) => {
  return (
    <div className="semestr-box bg-primary mt-1 mb-4 mx-auto p-2 rounded-5 col-md-4 d-flex justify-content-around align-items-center">
      <NavLink to={`/${page}/1`} className="semestr-text">
        Semestr 1
      </NavLink>
      <NavLink to={`/${page}/2`} className="semestr-text">
        Semestr 2
      </NavLink>
    </div>
  );
};

export default Semestr;
