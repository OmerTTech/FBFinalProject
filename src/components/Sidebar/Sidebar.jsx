import React, { useContext } from "react";
import { NavContext } from "../../contexts/NavContext";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const { isNavOpen } = useContext(NavContext);
  return (
    <div className={`navcontainer ${isNavOpen && "navclose"}`}>
      <nav className="sidebar">
        <div className="nav-upper-options">
          <NavLink to="/" className="nav-option option1">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
              className="nav-img"
              alt="dashboard"
            />
            <h3 className="h3-nav"> Dashboard</h3>
          </NavLink>

          <NavLink to="/articles" className="nav-option option2">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
              className="nav-img"
              alt="articles"
            />
            <h3 className="h3-nav"> Articles</h3>
          </NavLink>

          <NavLink to="report" className="nav-option option3">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
              className="nav-img"
              alt="report"
            />
            <h3 className="h3-nav"> Report</h3>
          </NavLink>

          <NavLink to="institution" className="nav-option option4">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
              className="nav-img"
              alt="institution"
            />
            <h3 className="h3-nav"> Institution</h3>
          </NavLink>

          <NavLink to="profile" className="nav-option option5">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
              className="nav-img"
              alt="blog"
            />
            <h3 className="h3-nav"> Profile</h3>
          </NavLink>

          <NavLink to="settings" className="nav-option option6">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
              className="nav-img"
              alt="settings"
            />
            <h3 className="h3-nav"> Settings</h3>
          </NavLink>

          <span className="nav-option logout">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
              className="nav-img"
              alt="logout"
            />
            <h3 className="h3-nav">Logout</h3>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;