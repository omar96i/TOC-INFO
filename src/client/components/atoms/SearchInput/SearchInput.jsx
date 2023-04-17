import React from "react";
import "./SearchInput.scss";

const SearchInput = ({ ...props }) => {
  return (
    <div className="search-input">
      <input type="text" {...props} />
      <button
        className="btn waves-effect waves-light light-blue"
        type="submit"
        name="action"
      >
        <i className="material-icons">search</i>
      </button>
    </div>
  );
};

export default SearchInput;
