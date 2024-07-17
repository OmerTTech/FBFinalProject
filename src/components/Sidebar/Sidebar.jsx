import React, { useContext } from "react";
import "./Sidebar.css";
import { RiDashboardFill, RiArticleLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { BiSolidInstitution } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { NavContext } from "../../contexts/NavContext";
import { AuthContext } from "../../contexts/AuthContext";

const Sidebar = () => {
  const { isNavOpen, isSmallScreen } = useContext(NavContext);
  const { logoutHandler } = useContext(AuthContext);

  return (
    <div
      className={`navcontainer ${isNavOpen && "navclose"}`}
      style={{ zIndex: "1000" }}
    >
      <nav className="sidebar">
        <div className="nav-upper-options">
          <NavLink to="/" className="nav-option option1">
            <RiDashboardFill className="icon" />
            <h3 className="h3-nav"> Dashboard</h3>
          </NavLink>

          <NavLink to="/articles" className="nav-option option2">
            <RiArticleLine className="icon" />
            <h3 className="h3-nav"> Articles</h3>
          </NavLink>

          <NavLink to="report" className="nav-option option3">
            <TbReportSearch className="icon" />
            <h3 className="h3-nav"> Report</h3>
          </NavLink>

          <NavLink to="institution" className="nav-option option4">
            <BiSolidInstitution className="icon" />
            <h3 className="h3-nav"> Institution</h3>
          </NavLink>
          {isSmallScreen && (
            <>
              <NavLink to="profile" className="nav-option option5">
                <FaRegUser className="icon" />
                <h3 className="h3-nav"> Profile</h3>
              </NavLink>
              <NavLink to="settings" className="nav-option option6">
                <IoSettingsOutline className="icon" />
                <h3 className="h3-nav"> Settings</h3>
              </NavLink>

              <span onClick={logoutHandler} className="nav-option logout">
                <LuLogOut className="icon" />
                <h3 className="h3-nav">Logout</h3>
              </span>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
