import React, { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        className="search"
      />
    </div>
  );
};

export default SearchBox;
