import React, { useContext } from "react";
import { NavContext } from "../../contexts/NavContext";
import Profile_submenu from "../Profile_submenu/Profile_submenu";

const Header = () => {
  
  const {toggleNav} = useContext(NavContext)
  return (
    <header>
        <div className="logosec">
          <div className="logo">FinalProject</div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
            className="icn menuicn"
            id="menuicn"
            alt="menu-icon"
            onClick={toggleNav}
          />
        </div>

        <div className="searchbar">
          <input type="text" placeholder="Search" />
          <div className="searchbtn">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
              className="icn srchicn"
              alt="search-icon"
            />
          </div>
        </div>

        <div className="message">
          <div className="circle"></div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
            className="icn"
            alt=""
          />
          <Profile_submenu/>
        </div>
    </header>
  );
};

export default Header;
