import React from "react";
import { CgSearch } from "react-icons/cg";

const Searchbar2 = () => {
  return (
    <div className="searchbar2">
      <input type="text" name="" id="" placeholder="Search" />
      <div className="searchbtn">
        <CgSearch
          className="text-white icn srchicn"
          style={{fontSize:"2rem", margin:"0px 0px 0px -7.5px"}}
        />
      </div>
    </div>
  );
};

export default Searchbar2;
