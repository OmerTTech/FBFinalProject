import React from "react";

const Searchbar = () => {
  return (
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
  );
};

export default Searchbar;
