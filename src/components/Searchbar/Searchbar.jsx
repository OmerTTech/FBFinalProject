import React from "react";
import { CgSearch } from "react-icons/cg";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search" />
      <div className="searchbtn">
        <CgSearch
          className="text-white icn srchicn"
          style={{fontSize:"2rem", margin:"0px 0px 0px -5px"}}
        />
      </div>
    </div>
  );
};

export default Searchbar;
