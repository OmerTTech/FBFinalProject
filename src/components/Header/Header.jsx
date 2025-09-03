import React, { useContext } from "react";
import "./Header.css";
import "../../css/responsive.css";
import ProfileSubmenu from "../Profile_submenu/Profile_submenu";
import { FiMenu } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { ThemeContext } from "../../contexts/ThemeContext";
import { NavContext } from "../../contexts/NavContext";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { toggleNav } = useContext(NavContext);
  return (
    <header
      style={{
        boxShadow: `${
          theme === "light"
            ? "1px 1px 15px rgba(161, 182, 253, 0.825)"
            : "1px 1px 25px rgba(20, 22, 31, 0.325)"
        }`,
      }}
    >
      <div className="logosec">
        <FiMenu
          className="icn menuicn"
          style={{
            fontSize: "3rem",
            scale: "1.2",
            color: "var(--secondary-color2)",
            filter: "drop-shadow(0px 0px 1px var(--secondary-color))",
          }}
          id="menuicn"
          alt="menu-icon"
          onClick={toggleNav}
        />
        <Link to="/" className="logo py-1">
          <img src={Logo} alt="" />
        </Link>
      </div>


      <div className="message">
        <Link
          to="/notifications/"
          style={{
            filter: "drop-shadow(0px 0px 1.25px var(--secondary-color))",
          }}
        >
          <div className="circle z-1"></div>
          <IoMdNotifications
            style={{
              fontSize: "2rem",
              color: "var(--secondary-color2)",
            }}
          />
        </Link>
        <ProfileSubmenu />
      </div>
    </header>
  );
};

export default Header;
