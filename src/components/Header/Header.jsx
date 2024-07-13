import React, { useContext } from "react";
import { NavContext } from "../../contexts/NavContext";
import Profile_submenu from "../Profile_submenu/Profile_submenu";
import Searchbar from "../Searchbar/Searchbar";
import { FiMenu } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  const { theme, toggleNav } = useContext(NavContext);
  return (
    <header style={{boxShadow:`${theme === "light" ? "1px 1px 15px rgba(161, 182, 253, 0.825)" : "1px 1px 25px rgba(20, 22, 31, 0.325)"}`}}>
      <div className="logosec">
        <div className="logo">FinalProject</div>
        <FiMenu
          className="icn menuicn"
          style={{
            fontSize: "3rem",
            scale: "1.2",
            color: "var(--secondary-color2)",
          }}
          id="menuicn"
          alt="menu-icon"
          onClick={toggleNav}
        />
      </div>

      <Searchbar />

      <div className="message">
        <div className="circle"></div>
        <IoMdNotifications
          style={{
            fontSize: "2rem",
            color: "var(--secondary-color2)",
          }}
        />
        <Profile_submenu />
      </div>
    </header>
  );
};

export default Header;
