import React, { useContext, useEffect } from "react";
import "./Profile_submenu.css";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Profile_submenu = () => {
  const { logoutHandler, userData } = useContext(AuthContext);
  return (
    <>
      <label className="popup">
        <input type="checkbox" />
        <div className="dp" style={{ cursor: "pointer" }}>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
            className="dpicn"
            alt="dp"
          />
        </div>
        <nav className="popup-window">
          <ul>
              <li className="text-center" style={{fontSize:`${userData.email && userData.email.length >= 28 ? "0.6rem" : "0.75rem"}`}}>
              {userData.email && userData.email.length >= 28 ? userData.email.slice(0,28) + ".." : userData.email}
              </li>
            <hr />
            <legend>Actions</legend>
            <Link to="/profile">
              <li>
                <button className="submenubtn">
                <FaRegUser
                  style={{ fontSize: "13.5px", marginLeft: "1.75px" }}
                />
                  <span>View Profile</span>
                </button>
              </li>
            </Link>
            <hr />
            <Link to="/settings">
              <li>
                <button className="submenubtn">
                  <IoSettingsOutline
                    className="submenu_icon"
                    style={{ color: "#777", fontSize: "15px" }}
                  />
                  <span>Setting</span>
                </button>
              </li>
            </Link>
            <li>
              <button className="submenubtn">
                <label htmlFor="ThemeSwitch" className="dark-mode-switch">
                  <MdOutlineDarkMode
                    className="submenu_icon"
                    color="#999"
                    fontSize="17px"
                  />
                  <span>Dark Mode</span>
                  <ThemeSwitch />
                </label>
              </button>
            </li>
            <hr />
            <Link to="/login">
              <li>
                <button onClick={logoutHandler} className="logout-btn">
                  <LuLogOut
                    className="submenu_icon"
                    style={{ color: "#f75", fontSize: "15px" }}
                  />
                  <span>Logout</span>
                </button>
              </li>
            </Link>
          </ul>
        </nav>
      </label>
    </>
  );
};

export default Profile_submenu;
