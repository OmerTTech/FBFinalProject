import SearchBar from "material-ui-search-bar";
import React from "react";
import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="searchbar-parent mx-4">
      <SearchBar className="shadow-sm"/>
    </div>
  );
};

export default Searchbar;
