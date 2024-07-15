import React, { useContext } from "react";
import Profile_submenu from "../Profile_submenu/Profile_submenu";
import Searchbar from "../Searchbar/Searchbar";
import { FiMenu } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
  const { theme, toggleNav } = useContext(ThemeContext);
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
        <div className="logo">FinalProject</div>
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
      </div>

      <Searchbar />

      <div className="message">
        <div
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
        </div>
        <Profile_submenu />
      </div>
    </header>
  );
};

export default Header;
